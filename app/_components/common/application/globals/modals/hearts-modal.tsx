"use client"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/app/_components/ui/dialog"
import { useRouter } from "next/navigation"
import { useHeartsModal } from "@/store/use-hearts-modal"
import { Button } from "@/app/_components/ui/button"
import { DuolingoVeryAngryImageSvg } from "@/public/svgs/duolingo-very-angry-image-svg"

export const HeartsModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState<boolean>(false)
    const { isOpen, close } = useHeartsModal()

    const handleGoToStoreClick = () => {
        close()
        router.push("/store")
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <div className="flex justify-center items-start">
                        <DuolingoVeryAngryImageSvg width="220" height="220" />
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className="text-base text-center">
                        Get Pro for unlimited hearts, or purchase them in the store
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-2 w-full">
                        <Button
                            type="button"
                            variant="default"
                            size="lg"
                            className="w-full"
                            onClick={handleGoToStoreClick}
                        >
                            Get unlimited hearts
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            size="lg"
                            className="w-full"
                            onClick={close}
                        >
                           No thanks
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}