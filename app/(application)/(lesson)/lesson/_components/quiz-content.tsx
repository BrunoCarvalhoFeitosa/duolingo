"use client"
import { challengeOptions, challenges } from "@/db/schema"
import { QuizQuestionBubble } from "@/app/(application)/(lesson)/lesson/_components/quiz-question-bubble"
import { QuizChallenge } from "@/app/(application)/(lesson)/lesson/_components/quiz-challenge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/app/_components/ui/hover-card"
import { InfoIcon, KeyboardIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import { DuolingoRoundedIconSvg } from "@/public/svgs/duolingo-rounded-icon-svg"

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
                        <div className="flex items-start w-full">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button variant="link" className="p-0 flex items-center">
                                        <div className="flex items-center gap-1">
                                            <div>
                                                <InfoIcon className="w-4 h-4 lg:w-[22px] lg:h-[22px]" />
                                            </div>
                                            <div className="text-xs lg:text-base">
                                                Informação útil
                                            </div>
                                        </div>
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-96 right-0">
                                    <div className="flex flex-col">
                                        <div className="mb-4 flex items-center">
                                            <div className="mr-1">
                                                <DuolingoRoundedIconSvg width="40" height="40" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold leading-none">
                                                    @Duolingo
                                                </h4>
                                                <p className="ml-1 text-sm text-muted-foreground">
                                                    O assistente da sua jornada.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="mb-2">
                                                <p className="text-sm">
                                                    Você pode usar o teclado para responder as questões.
                                                    Basta pressionar o número condizente à  resposta correta 
                                                    e depois pressionar a tecla ENTER. 
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-y-1">
                                                <div className="flex items-center gap-1">
                                                    <div>
                                                        <KeyboardIcon className="w-5 h-5" />
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        Pressione as teclas 1, 2 ou 3.
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div>
                                                        <KeyboardIcon className="w-5 h-5" />
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        Após escolher a resposta correta, pressione ENTER.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                        <div className="w-full">
                            <h1 className="text-lg md:text-2xl lg:text-3xl lg:text-start font-bold">
                                {title}
                            </h1>
                        </div>
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