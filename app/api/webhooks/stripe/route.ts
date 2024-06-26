import Stripe from "stripe"
import { db } from "@/db/drizzle"
import { eq } from "drizzle-orm"
import { stripe } from "@/app/_libs/stripe"
import { headers } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"
import { userSubscription } from "@/db/schema"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: unknown) {
    return new NextResponse(`Stripe webhook error ${JSON.stringify(error)}`, {
      status: 400
    })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    )

    if (!session?.metadata?.userId)
      return new NextResponse("User id is required.", { status: 400 })

    await db.insert(userSubscription).values({
      userId: session.metadata.userId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: subscription.items.data[0].price.id,
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
    })
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    )

    await db.update(userSubscription).set({
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000
        )
    }).where(
        eq(userSubscription.stripeSubscriptionId, subscription.id)
    )
  }

  return new NextResponse(null, { status: 200 })
}