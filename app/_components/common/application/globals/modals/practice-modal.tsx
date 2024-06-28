"use client"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/app/_components/ui/dialog"
import { usePracticeModal } from "@/store/use-practice-modal"
import { Button } from "@/app/_components/ui/button"
import { DuolingoTrainingImageSvg } from "@/public/svgs/duolingo-training-image-svg"

export const PracticeModal = () => {
    const [isClient, setIsClient] = useState<boolean>(false)
    const { isOpen, close } = usePracticeModal()

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
                        <DuolingoTrainingImageSvg width="220" height="220" />
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
                        Aula prática
                    </DialogTitle>
                    <DialogDescription className="text-base text-center">
                        Use aulas práticas para recuperar corações e pontos.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-2 w-full">
                        <Button
                            type="button"
                            variant="default"
                            size="lg"
                            className="w-full"
                            onClick={close}
                        >
                           Eu entendi
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}