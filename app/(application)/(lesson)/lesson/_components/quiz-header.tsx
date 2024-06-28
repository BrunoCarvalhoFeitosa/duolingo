"use client"
import { useExitModal } from "@/store/use-exit-modal"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import { Progress } from "@/app/_components/ui/progress"
import { InfinityIcon, XIcon } from "lucide-react"

interface QuizHeaderProps {
    hearts: number
    percentage: number
    hasActiveSubscription: boolean
}

export const QuizHeader = ({ hearts, percentage, hasActiveSubscription }: QuizHeaderProps) => {
    const { open } = useExitModal()
    
    return (
        <header className="pt-5 lg:pt-12 px-5 lg:px-10 mx-auto flex justify-between items-center gap-x-7 max-w-[1140px] w-full">
            <div>
                <Button
                    type="button"
                    variant="ghost"
                    className="p-0"
                    onClick={open}
                >
                    <XIcon className="text-late-500 hover:opacity-75 transition" />
                </Button>
            </div>
            <div className="flex-1">
                <Progress value={percentage} />
            </div>
            <div className="flex items-center gap-1">
                <div>
                    <Image
                        src="/images/icon-application-heart.png"
                        width={28}
                        height={28}
                        alt="Heart"
                    />
                </div>
                <div className="text-base font-extrabold text-[#E63714]">
                    {hasActiveSubscription
                        ? <InfinityIcon className="w-7 h-7 stroke-[3] text-[#E63714]" />
                        : hearts
                    }
                </div>
            </div>
        </header>
    )
}