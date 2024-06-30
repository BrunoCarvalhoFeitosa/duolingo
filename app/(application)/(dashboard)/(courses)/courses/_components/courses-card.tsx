"use client"
import { cn } from "@/app/_libs/utils"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

interface CoursesCardProps {
    id: number
    title: string
    imageSrc: string
    disabled?: boolean
    active?: boolean
    onClick: (id: number) => void
}

export const CoursesCard = ({
    id,
    title,
    imageSrc,
    disabled,
    active,
    onClick
}: CoursesCardProps) => {
    return (
        <div
            onClick={() => onClick(id)}
            className={cn(
                "p-3 pb-6 min-w-[180px] md:min-w-[200px] h-full min-h-[180px] md:min-h-[222px] flex flex-col justify-between items-center border-2 border-b-4 active:border-b-2 rounded-xl hover:bg-gray-200 cursor-pointer",
                disabled && "pointer-events-none opacity-50"
            )}
        >
            <div className="min-w-6 w-full flex justify-end items-center">
                {active && (
                    <div className="p-1.5 flex justify-between items-center rounded-md bg-lime-600">
                        <CheckIcon className="w-4 h-4 text-white stroke-[4]" />
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={90}
                        height={90}
                        className="drop-shadow-md object-center"
                    />
                </div>
                <div>
                    <p className="font-bold text-center">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}