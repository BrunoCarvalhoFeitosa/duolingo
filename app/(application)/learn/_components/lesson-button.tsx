"use client"
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import { cn } from "@/app/_libs/utils"
import Link from "next/link"
import { Button } from "@/app/_components/ui/button"
import { CheckIcon, CrownIcon, StarIcon } from "lucide-react"
import "react-circular-progressbar/dist/styles.css"

interface LessonButtonProps {
    id: number
    index: number
    totalCount: number
    locked?: boolean
    current?: boolean
    percentage: number
}

export const LessonButton = ({
    id,
    index,
    totalCount,
    locked,
    current,
    percentage
}: LessonButtonProps) => {
    const cycleLength = 8
    const cycleIndex = index % cycleLength
    let indentationLevel

    if (cycleIndex <= 2) {
        indentationLevel = cycleIndex
    } else if (cycleIndex <= 4) {
        indentationLevel = 4 - cycleIndex
    } else if (cycleIndex <= 6) {
        indentationLevel = 4 - cycleIndex
    } else {
        indentationLevel = cycleIndex - 8
    }

    const rightPosition = indentationLevel * 40
    const isFirst = index === 0
    const isLast = index === totalCount
    const isCompleted = !current && !locked
    const Icon = isCompleted ? CheckIcon : isLast ? CrownIcon : StarIcon
    const href = isCompleted ? `/lesson/${id}` : "/lesson"

    return (
        <Link
            href={href}
            aria-disabled={locked}
            style={{
                pointerEvents: locked ? "none": "auto"
            }}
        >
            <div
                className="relative"
                style={{
                    right: `${rightPosition}px`,
                    marginTop: isFirst && !isCompleted ? 60 : 24
                }}
            >
                {current ? (
                    <div className="relative w-[102px] h-[102px]">
                        <div className="px-3 py-2.5 absolute -top-6 left-2.5 border-2 font-bold uppercase text-lime-600 bg-white rounded-xl tracking-wide animate-bounce z-10">
                            <div>
                                Start
                            </div>
                            <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-t-8 border-x-8 border-x-transparent transform -translate-x-1/2" />
                        </div>
                        <CircularProgressbarWithChildren
                            value={Number.isNaN(percentage) ? 0 : percentage}
                            styles={{
                                path: {
                                    stroke: "#4ade80"
                                },
                                trail: {
                                    stroke: "#e5e7eb"
                                }
                            }}
                        >
                            <Button
                                variant={locked ? "locked" : "gray"}
                                size="rounded"
                                className="w-[70px] h-[70px] border-b-8"
                            >
                                <Icon
                                    className={cn(
                                        "w-10 h-10",
                                        locked ? "fill-neutral-400 text-neutral-400 stroke-neutral-400" : "fill-gray-400 text-gray-400",
                                        isCompleted && "fill-none stroke-[4]"
                                    )}
                                />
                            </Button>
                        </CircularProgressbarWithChildren>
                    </div>
                ) : (
                    <Button
                        variant={locked ? "locked" : "gray"}
                        size="rounded"
                        className="w-[70px] h-[70px] border-b-8"
                    >
                        <Icon
                            className={cn(
                                "w-10 h-10",
                                locked ? "fill-neutral-400 text-neutral-400 stroke-neutral-400" : "fill-gray-400 text-gray-400",
                                isCompleted && "fill-none stroke-[4]"
                            )}
                        />
                    </Button>
                )}
            </div>
        </Link>
    )
}