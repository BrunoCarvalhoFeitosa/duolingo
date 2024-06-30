"use client"
import { useKey, useMedia } from "react-use"
import { cn } from "@/app/_libs/utils"
import { Button } from "@/app/_components/ui/button"
import { CheckCircleIcon, XCircle } from "lucide-react"

interface QuizFooterProps {
    disabled?: boolean
    lessonId?: number
    status: "correct" | "wrong" | "none" | "completed"
    onCheck: () => void
}

export const QuizFooter = ({
    disabled,
    lessonId,
    status,
    onCheck
}: QuizFooterProps) => {
    const isMobile = useMedia("(max-width: 1024px)")
    useKey("Enter", onCheck, {}, [onCheck])

    return (
        <footer className={cn(
            "h-[100px] lg:h-[140px] border-t",
            status === "correct" && "border-transparent bg-green-100",
            status === "wrong" && "border-transparent bg-rose-100",
        )}>
            <div className="px-6 lg:px-10 mx-auto max-w-[1140px] h-full flex justify-between items-center">
                {status === "correct" && (
                    <div className="flex items-center gap-2">
                        <div className="text-base lg:text-2xl font-bold text-green-500">
                            <CheckCircleIcon className="w-6 h-6 lg:w-11 lg:h-11" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base lg:text-2xl font-bold text-green-500">
                                Irado, mandou bem!
                            </span>
                            <strong className="-translate-y-[6px] text-xs md:text-sm">
                                Resposta correta.
                            </strong>
                        </div>
                    </div>
                )}
                {status === "wrong" && (
                    <div className="flex items-center gap-2">
                        <div className="text-base lg:text-2xl font-bold text-rose-500">
                            <XCircle className="w-6 h-6 lg:w-11 lg:h-11" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base lg:text-2xl font-bold text-rose-500">
                                Tente novamente!
                            </span>
                            <strong className="-translate-y-[6px] text-xs">
                                Resposta errada.
                            </strong>
                        </div>
                    </div>
                )}
                {status === "completed" && (
                    <Button
                        type="button"
                        variant="white"
                        size={isMobile ? "sm" : "lg"}
                        onClick={() => window.location.href = `/lesson/${lessonId}`}
                    >
                        Praticar novamente
                    </Button>
                )}
                <Button
                    type="button"
                    variant={status === "wrong" ? "danger" : "default"}
                    size={isMobile ? "sm" : "lg"}
                    disabled={disabled}
                    className="ml-auto md:min-w-48"
                    onClick={onCheck}
                >
                    {status === "none" && "Verificar"}
                    {status === "correct" && "Próxima"}
                    {status === "wrong" && "Tentar de novo"}
                    {status === "completed" && "Continuar"}
                </Button>
            </div>
        </footer>
    )
}