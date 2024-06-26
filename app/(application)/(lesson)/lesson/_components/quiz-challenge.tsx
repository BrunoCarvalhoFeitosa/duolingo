"use client"
import { challengeOptions, challenges } from "@/db/schema"
import { cn } from "@/app/_libs/utils"
import { QuizChallengeCard } from "./quiz-challenge-card"

interface QuizChallengeProps {
    options: typeof challengeOptions.$inferSelect[]
    status: "correct" | "wrong" | "none"
    selectedOption?: number
    disabled?: boolean
    type: typeof challenges.$inferSelect["type"]
    onSelect: (id: number) => void
}

export const QuizChallenge = ({
    options,
    status,
    selectedOption,
    disabled,
    type,
    onSelect
}: QuizChallengeProps) => {
    return (
        <div className={cn(
            "grid gap-2",
            type === "ASSIST" && "grid-cols-1",
            type === "SELECT" && "grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        )}>
            {options.map((option, index) => (
                <QuizChallengeCard
                    key={option.id}
                    id={option.id}
                    text={option.text}
                    imageSrc={option.imageSrc}
                    audioSrc={option.audioSrc}
                    shortcut={`${index + 1}`}
                    selected={selectedOption === option.id}
                    disabled={disabled}
                    status={status}
                    type={type}
                    onClick={() => onSelect(option.id)}
                />
            ))}
        </div>
    )
}