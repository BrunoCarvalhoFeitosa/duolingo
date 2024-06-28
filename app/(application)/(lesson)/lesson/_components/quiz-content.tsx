"use client"
import { QuizQuestionBubble } from "@/app/(application)/(lesson)/lesson/_components/quiz-question-bubble"
import { QuizChallenge } from "@/app/(application)/(lesson)/lesson/_components/quiz-challenge"
import { challengeOptions, challenges } from "@/db/schema"

interface QuizContentProps {
    title: string
    challenge: (typeof challenges.$inferSelect & {
        completed: boolean
        challengeOptions: (typeof challengeOptions.$inferSelect)[]
    })
    options: typeof challengeOptions.$inferSelect[]
    status: "correct" | "wrong" | "none"
    selectedOption?: number
    disabled?: boolean
    type: typeof challenges.$inferSelect["type"]
    onSelect: (id: number) => void
}

export const QuizContent = ({
    title,
    challenge,
    options,
    status,
    selectedOption,
    disabled,
    type,
    onSelect
}: QuizContentProps) => {
    return (
        <div className="flex-1">
            <div className="flex justify-center items-center h-full">
                <div className="px-6 lg:px-0 flex flex-col justify-center gap-y-12 w-full lg:w-[940px] lg:min-h-[350px]">
                    <div>
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold">
                            {title}
                        </h1>
                    </div>
                    <div className="w-full">
                        {challenge.type === "ASSIST" && (
                            <QuizQuestionBubble question={challenge.question} />
                        )}
                        <QuizChallenge
                            options={options}
                            status={status}
                            selectedOption={selectedOption}
                            disabled={disabled}
                            type={type}
                            onSelect={onSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}