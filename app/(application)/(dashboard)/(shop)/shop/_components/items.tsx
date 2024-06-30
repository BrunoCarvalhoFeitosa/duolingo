"use client"
import { useTransition } from "react"
import { refillHearts } from "@/actions/user-progress"
import { createStripeUrl } from "@/actions/user-subscription"
import { toast } from "sonner"
import { Button } from "@/app/_components/ui/button"
import Image from "next/image"
import { POINTS_TO_REFILL } from "@/constants"

interface ItemsProps {
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

export const Items = ({ hearts, points, hasActiveSubscription }: ItemsProps) => {
    const [pending, startTransition] = useTransition()

    const handleRefillHearts = () => {
        if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
            return
        }

        startTransition(() => {
            refillHearts().catch(() => {
                toast.error("Something went wrong.")
            })
        })
    }

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
        <ul className="mt-10 w-full">
            <li className="py-4 flex justify-between items-end gap-x-4 w-full border-b">
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:gap-3">
                    <div>
                        <Image
                            src="/images/icon-application-heart.png"
                            width={42}
                            height={42}
                            alt="Vida"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm lg:text-xl font-bold">
                            Recuperar todas as vidas
                        </p>
                    </div>
                </div>
                <div>
                    <Button
                        type="button"
                        size="lg"
                        variant={pending || hearts === 5 || points < POINTS_TO_REFILL ? "locked" : "default"}
                        disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
                        className="w-36 md:w-40 h-12 text-sm md:text-base"
                        onClick={handleRefillHearts}
                    >
                        {hearts === 5 ? "Vidas cheias" : (
                            <div className="flex items-center gap-1">
                                <div>
                                    <Image
                                        src="/images/icon-application-ray.png"
                                        width={25}
                                        height={25}
                                        alt="Pontos"
                                    />
                                </div>
                                <div>
                                    <p className="text-base font-bold">
                                        {POINTS_TO_REFILL}
                                    </p>
                                </div>
                            </div>
                        )}
                    </Button>
                </div>
            </li>
            <li className="py-4 flex justify-between items-end gap-x-4 w-full border-b">
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:gap-3">
                    <div>
                        <Image
                            src="/images/icon-application-premium-heart.png"
                            width={44}
                            height={44}
                            alt="Duolingo Pro"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm lg:text-xl font-bold">
                            Comprar vidas ilimitadas
                        </p>
                    </div>
                </div>
                <div>
                    <Button
                        type="button"
                        size="lg"
                        disabled={pending}
                        className="w-36 md:w-40 h-12 text-sm md:text-base"
                        onClick={handleUpgrade}
                    >
                        {hasActiveSubscription ? "Renovar vidas" : "Comprar vidas"}
                    </Button>
                </div>
            </li>
        </ul>
    )
}