"use client"
import Image from "next/image" 

interface QuizQuestionBubbleProps {
    question: string
}

export const QuizQuestionBubble = ({ question }: QuizQuestionBubbleProps) => {
    return (
        <div className="mb-6 flex items-center gap-x-4">
            <Image
                src="/images/icon-duolingo.png"
                width={90}
                height={90}
                alt=""
                className="hidden lg:block"
            />
            <Image
                src="/images/icon-duolingo.png"
                width={60}
                height={60}
                alt=""
                className="block lg:hidden"
            />
            <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base font-semibold">
                {question}
                <div className="absolute -left-3 top-1/2 w-0 h-0 border-t-8 border-x-8 border-x-transparent transform -translate-y-1/2 rotate-90" />
            </div>
        </div>
    )
}