"use client"
import Image from "next/image"
import { Progress } from "@/app/_components/ui/progress"

interface QuestsListItemProps {
    title: string
    progress: number
}

export const QuestsListItem = ({ title, progress }: QuestsListItemProps) => {
    return (
        <li className="p-4 flex items-center gap-x-4 w-full border-b">
            <div>
                <Image
                    src="/images/icon-application-ray.png"
                    width={40}
                    height={40}
                    alt="Pontos"
                />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
                <div>
                    <p className="text-base md:text-xl font-bold">
                        {title}
                    </p>
                </div>
                <div>
                    <Progress value={progress} className="h-3" />
                </div>
            </div>
        </li>
    )
}