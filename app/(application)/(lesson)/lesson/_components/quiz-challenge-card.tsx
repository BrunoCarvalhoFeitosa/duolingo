"use client"
import { useCallback } from "react"
import { challenges } from "@/db/schema"
import { useAudio, useKey } from "react-use"
import { cn } from "@/app/_libs/utils"
import Image from "next/image"

interface QuizChallengeCardProps {
    id: number
    text: string
    imageSrc: string | null
    audioSrc: string | null
    shortcut: string
    selected?: boolean
    disabled?: boolean
    status?: "correct" | "wrong" | "none"
    type: typeof challenges.$inferInsert["type"]
    onClick: () => void
}

export const QuizChallengeCard = ({
    id,
    text,
    imageSrc,
    audioSrc,
    shortcut,
    selected,
    disabled,
    status,
    type,
    onClick
}: QuizChallengeCardProps) => {
    const [audio, _, controls] = useAudio({ src: audioSrc || "" })

    const handleClick = useCallback(() => {
        if (disabled) return
    
        controls.play()
        onClick()
    }, [disabled, onClick, controls])

    useKey(shortcut, handleClick, {}, [handleClick])

    return (
        <div
            onClick={handleClick}
            className={cn(
                "p-4 lg:p-6 h-full border-2 border-b-4 rounded-xl hover:bg-gray-100 active:border-b-2 cursor-pointer",
                selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
                selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
                selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
                disabled && "pointer-events-none hover:bg-white",
                type === "ASSIST" && "lg:p-3 w-full"
            )}
        >
            {audio}
            {imageSrc && (
                <div className="relative mb-4 aspect-square w-full max-h-[80px] lg:max-h-[150px]">
                    <Image
                        fill
                        src={imageSrc}
                        alt={text}
                    />
                </div>
            )}
            <div className={cn(
                "flex justify-between items-center",
                type === "ASSIST" && "flex-row-reverse"
            )}>
                {type === "ASSIST" && <div />}
                <p className={cn(
                    "text-sm lg:text-base font-semibold text-neutral-600",
                    selected && "text-sky-500",
                    selected && status === "correct" && "text-green-500",
                    selected && status === "wrong" && "text-rose-500"
                )}>
                    {text}
                </p>
                <div className={cn(
                    "w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] flex justify-center items-center border-2 rounded-lg text-xs lg:text-base font-semibold border-gray-400 text-gray-400",
                    selected && "border-sky-300 text-sky-500",
                    selected && status === "correct" && "border-green-300 text-green-300",
                    selected && status === "wrong" && "border-rose-300 text-rose-300"
                )}>
                    {shortcut}
                </div>
            </div>
        </div>
    )
}