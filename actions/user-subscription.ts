"use server"
import { auth, currentUser } from "@clerk/nextjs/server"
import { getUserSubscription } from "@/db/queries"
import { stripe } from "@/app/_libs/stripe"
import { absoluteUrl } from "@/app/_libs/utils"

const returnUrl = absoluteUrl("/shop")

export const createStripeUrl = async () => {
  const { userId } = auth()
  const user = await currentUser()

  if (!userId || !user) {
    throw new Error("Unauthorized.")
  }

  const userSubscription = await getUserSubscription()

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl,
    })

    return { data: stripeSession.url }
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.emailAddresses[0].emailAddress,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "BRL",
          product_data: {
            name: "Duolingo Pro",
            description: "Compre vida infinita para praticar ao máximo diversos idiomas através de lições divertidas.",
          },
          unit_amount: 2000,
          recurring: {
            interval: "month"
          }
        }
      }
    ],
    metadata: {
      userId
    },
    success_url: returnUrl,
    cancel_url: returnUrl
  })

  return { data: stripeSession.url }
}