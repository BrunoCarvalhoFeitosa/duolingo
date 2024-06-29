"use client"
import Link from "next/link"
import { quests } from "@/constants"
import { QuestsListItem } from "@/app/(application)/(dashboard)/(quests)/quests/_components/quests-list-item"

interface QuestsProps {
    points: number
}

export const Quests = ({ points }: QuestsProps) => {
    return (
        <div className="p-4 border rounded-xl space-y-4">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-base font-bold">
                            Missões
                        </h3>
                    </div>
                    <div className="text-xs uppercase font-bold text-lime-600 underline">
                        <Link href="/quests">
                            Ver todas
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                <ul className="flex flex-col gap-3">
                    {quests.slice(0, 6).map((quest, index) => {
                        const progress = (points / quest.value) * 100

                        return (
                            <QuestsListItem
                                key={index}
                                title={quest.title}
                                progress={progress}
                            />
                        )
                    })}
            </ul>
                </div>
            </div>
        </div>
    )
}