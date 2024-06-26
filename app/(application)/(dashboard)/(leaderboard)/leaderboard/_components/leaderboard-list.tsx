"use client"

import { LeaderboardListItem } from "./leaderboard-list-item"

interface LeaderboardListProps {
    leaderboard: {
        points: number
        userId: string
        userName: string
        userImageSrc: string
    }[]
}

export const LeaderboardList = ({ leaderboard }: LeaderboardListProps) => {
    return (
        <div className="mt-10 w-full">
            {leaderboard.map((userProgress, index) => (
                <LeaderboardListItem
                    key={userProgress.userId}
                    index={index}
                    userProgress={userProgress}
                />
            ))}
        </div>
    )
}