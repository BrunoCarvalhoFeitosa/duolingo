"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"

export const Promo = () => {
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
                    <Link href="/shop">
                        <Button
                            type="button"
                            size="lg"
                        >
                            Assinar o Duolingo Pro agora
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}