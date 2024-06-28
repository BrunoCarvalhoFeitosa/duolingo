"use client"
import { userProgress } from "@/db/schema"
import { QuestsListItem } from "@/app/(application)/(dashboard)/(quests)/quests/_components/quests-list-item"
import { quests } from "@/constants"

interface QuestsListProps {
    userProgress: typeof userProgress.$inferSelect
}

export const QuestsList = ({ userProgress }: QuestsListProps) => {
    return (
        <div className="mt-10 w-full">
            <ul className="flex flex-col gap-3">
                {quests.map((quest, index) => {
                    const progress = (userProgress.points / quest.value) * 100

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
    )
}