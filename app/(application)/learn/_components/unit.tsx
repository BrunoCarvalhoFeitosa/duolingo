"use client"
import { lessons, units } from "@/db/schema"
import { UnitBanner } from "./unit-banner"
import { LessonButton } from "./lesson-button"

interface UnitProps {
    id: number
    order: number
    title: string
    description: string
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean
    })[]
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units
    } | undefined
    activeLessonPercentage: number
}

export const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage
}: UnitProps) => {
    return (
        <div>
            <UnitBanner title={title} description={description} />
            <div className="relative flex flex-col items-center">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id
                    const isLocked = !lesson.completed && !isCurrent

                    return (
                        <LessonButton
                            key={lesson.id}
                            id={lesson.id}
                            index={index}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPercentage}
                        />
                    )
                })}
            </div>
        </div>
    )
}