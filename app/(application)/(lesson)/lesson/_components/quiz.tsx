"use client"
import { useEffect, useState, useTransition } from "react"
import { challengeOptions, challenges, userSubscription } from "@/db/schema"
import { upsertChallengeProgress } from "@/actions/challenge-progress"
import { reduceHearts } from "@/actions/user-progress"
import { toast } from "sonner"
import { useAudio } from "react-use"
import { useHeartsModal } from "@/store/use-hearts-modal"
import { usePracticeModal } from "@/store/use-practice-modal"
import { QuizHeader } from "@/app/(application)/(lesson)/lesson/_components/quiz-header"
import { QuizContent } from "@/app/(application)/(lesson)/lesson/_components/quiz-content"
import { QuizFooter } from "@/app/(application)/(lesson)/lesson/_components/quiz-footer"
import { QuizFinished } from "@/app/(application)/(lesson)/lesson/_components/quiz-finished"

interface QuizProps {
    initialLessonId: number
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean
        challengeOptions: (typeof challengeOptions.$inferSelect)[]
    })[]
    initialHearts: number
    initialPercentage: number
    userSubscription: typeof userSubscription.$inferSelect & {
        isActive: boolean
    } | null
}

export const Quiz = ({
    initialLessonId,
    initialLessonChallenges,
    initialHearts,
    initialPercentage,
    userSubscription
}: QuizProps) => {
    const [hearts, setHearts] = useState(initialHearts)
    const [percentage, setPercentage] = useState(() => {
        return initialPercentage === 100 ? 0 : initialPercentage
    })
    const [challenges] = useState(initialLessonChallenges)
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
        return uncompletedIndex === -1 ? 0 : uncompletedIndex
    })
    const [selectedOption, setSelectedOption] = useState<number | undefined>()
    const [lessonId, setLessonId] = useState(initialLessonId)
    const [quizFinished, setQuizFinished] = useState(false)
    const [pending, startTransition] = useTransition()
    const { open: openHeartsModal } = useHeartsModal()
    const { open: openPracticeModal } = usePracticeModal()
    const [correctAudio, _c, correctControls] = useAudio({ src: "/audios/common/duolingo-answer-correct.mp3" })
    const [incorrectAudio, _i, incorrectControls] = useAudio({ src: "/audios/common/duolingo-answer-wrong.mp3" })
    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none")
    const challenge = challenges[activeIndex]
    const options = challenge.challengeOptions ?? []
    const title = challenge.type === "ASSIST" ? "Selecione abaixo a resposta correta" : challenge.question

    const onNext = () => {
        setActiveIndex((current) => current + 1)
    }

    const onSelect = (id: number) => {
        if (status !== "none") return

        setSelectedOption(id)
    }

    const onContinue = () => {
        if (!selectedOption) return

        if (status === "wrong") {
            setStatus("none")
            setSelectedOption(undefined)
            return
        }

        if (status === "correct") {
            onNext()
            setStatus("none")
            setSelectedOption(undefined)
            return
        }

        const correctOption = options.find((option) => option.correct)

        if (!correctOption) {
            return
        }

        if (correctOption.id === selectedOption) {
            startTransition(() => {
                upsertChallengeProgress(challenge.id).then((response) => {
                    if (response?.error === "hearts") {
                        openHeartsModal()
                        return
                    }

                    correctControls.play()
                    setStatus("correct")
                    setPercentage((prev) => prev + 100 / challenges.length)

                    if (initialPercentage === 100) {
                        setHearts((prev) => Math.min(prev + 1, 5))
                    }

                    if (activeIndex === challenges.length - 1) {
                        setQuizFinished(true)
                    }
                }).catch(() => {
                    toast.error("Something went wrong. Plese try again.")
                })
            })
        } else {
            startTransition(() => {
                reduceHearts(challenge.id).then((response) => {
                    if (response?.error === "hearts") {
                        openHeartsModal()
                        return
                    }

                    incorrectControls.play()
                    setStatus("wrong")

                    if (!response?.error) {
                        setHearts((prev) => Math.max(prev - 1, 0))
                    }
                }).catch(() => {
                    toast.error("Something went wrong. Please try again.")
                })
            })
        }
    }

    useEffect(() => {
        if (initialPercentage === 100) {
            openPracticeModal()
        }
    }, [initialPercentage])

    if (quizFinished) {
        return (
            <QuizFinished
                challenges={challenges}
                hearts={hearts}
                lessonId={lessonId}
                userSubscription={userSubscription}
                status="completed"
            />
        )
    }

    return (
        <div className="flex flex-col justify-between w-full h-full">
            <QuizHeader
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
            <QuizContent
                title={title}
                challenge={challenge}
                options={options}
                status={status}
                selectedOption={selectedOption}
                disabled={false}
                type={challenge.type}
                onSelect={onSelect}
            />
            <QuizFooter
                disabled={pending || !selectedOption}
                status={status}
                onCheck={onContinue}
            />
            {incorrectAudio}
            {correctAudio}
        </div>
    )
}