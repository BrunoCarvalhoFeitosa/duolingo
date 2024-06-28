"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { challenges, userSubscription } from "@/db/schema"
import Confetti from "react-confetti"
import { useAudio, useWindowSize } from "react-use"
import { QuizResultCard } from "@/app/(application)/(lesson)/lesson/_components/quiz-result-card"
import { QuizFooter } from "@/app/(application)/(lesson)/lesson/_components/quiz-footer"
import { DuolingoTaskCompletedImage } from "@/public/svgs/duolingo-task-completed-image"

interface QuizFinishedProps {
    challenges: typeof challenges.$inferSelect[]
    hearts: number
    lessonId?: number
    userSubscription: typeof userSubscription.$inferSelect & {
        isActive: boolean
    } | null
    status: "completed"
}

export const QuizFinished = ({
    challenges,
    hearts,
    lessonId,
    userSubscription,
    status
}: QuizFinishedProps) => {
    const router = useRouter()
    const { width, height } = useWindowSize()
    const [finishAudio, _, controls] = useAudio({ src: "/audios/common/duolingo-level-complete.mp3", autoPlay: true })

    useEffect(() => {
        controls.play()
    }, [])

    return (
        <div className="h-[calc(100%-100px)] lg:h-[calc(100%-140px)]">
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={1000}
                tweenDuration={14000}
            />
            <div className="relative bottom-10 lg:bottom-4 mx-auto px-4 flex flex-col justify-center items-center gap-y-4 lg:gap-y-8 max-w-lg h-full">
                <div>
                    <DuolingoTaskCompletedImage
                        width="340"
                        height="340"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-lg lg:text-2xl font-bold">
                        Ótimo trabalho!
                    </h2>
                    <h3 className="text-lg lg:text-2xl font-bold">
                        Você completou a lição com sucesso.
                    </h3>
                </div>
                <div className="flex items-center gap-x-4 w-full">
                    <QuizResultCard
                        variant="points"
                        value={challenges.length * 10}
                    />
                    <QuizResultCard
                        variant="hearts"
                        value={hearts}
                        userSubscription={userSubscription}
                    />
                </div>
            </div>
            <div>
                <QuizFooter
                    lessonId={lessonId}
                    status={status}
                    onCheck={() => router.push("/learn")}
                />
            </div>
            {finishAudio}
        </div>
    )
}