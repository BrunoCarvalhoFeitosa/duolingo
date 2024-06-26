"use client"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/app/_components/ui/dialog"
import { useRouter } from "next/navigation"
import { useExitModal } from "@/store/use-exit-modal"
import { Button } from "@/app/_components/ui/button"
import { DuolingoSadImageSvg } from "@/public/svgs/duolingo-sad-image-svg"

export const ExitModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState<boolean>(false)
    const { isOpen, close } = useExitModal()

    const handleClose = () => {
        close()
        router.push("/learn")
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
                        <DuolingoSadImageSvg width="160" height="160" />
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
                        Espere, não vá embora!
                    </DialogTitle>
                    <DialogDescription className="text-base text-center">
                        Você está prestes a sair da atividade. Tem certeza que deseja sair?
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
                            Continuar aprendendo
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            size="lg"
                            className="w-full"
                            onClick={handleClose}
                        >
                            Sair da atividade
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}