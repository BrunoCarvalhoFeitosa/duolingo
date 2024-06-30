"use client"
import { startTransition } from "react"
import { createStripeUrl } from "@/actions/user-subscription"
import { toast } from "sonner"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"

export const Promo = () => {
    const handleUpgrade = () => {
        startTransition(() => {
            createStripeUrl().then((response) => {
                if (response.data) {
                    window.location.href = response.data
                }
            }).catch(() => {
                toast.error("Something went wrong.")
            })
        })
    }

    return (
        <div className="p-4 border rounded-xl space-y-4">
            <div className="space-y-2">
                <div className="flex items-center">
                    <div className="mr-2">
                        <Image
                            src="/images/icon-application-premium-heart.png"
                            width={30}
                            height={30}
                            alt="Duolingo Pro"
                        />
                    </div>
                    <div>
                        <h3 className="text-base font-bold">
                            Assine o Duolingo Pro
                        </h3>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-muted-foreground text-sm">
                        Tenha vidas infinitas e pratique o quanto quiser.
                    </p>
                </div>
                <div className="mt-3 w-full">
                    <Button
                            type="button"
                            variant="default"
                            size="lg"
                            onClick={handleUpgrade}
                        >
                        Assinar o Duolingo Pro agora
                    </Button>
                </div>
            </div>
        </div>
    )
}