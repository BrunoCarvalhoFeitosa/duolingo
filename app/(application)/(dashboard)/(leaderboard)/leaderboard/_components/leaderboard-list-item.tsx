"use client"

import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"

interface LeaderboardListItemProps {
    index: number
    userProgress: {
        points: number
        userId: string
        userName: string
        userImageSrc: string
    }
}

export const LeaderboardListItem = ({ index, userProgress }: LeaderboardListItemProps) => {
    return (
        <div className="p-2 px-4 flex justify-between md:justify-start items-center gap-4 md:gap-8 w-full rounded-xl hover:bg-gray-200/50">
            <div>
                <strong className="text-lg font-semibold">
                    {index + 1}
                </strong>
            </div>
            <div className="flex md:flex-1 w-[70%] md:w-2/4 items-center gap-2 truncate">
                <div>
                    <Avatar className="w-12 h-12 md:w-14 md:h-14">
                        <AvatarImage
                            src={userProgress.userImageSrc}
                            alt={userProgress.userName}
                            className="object-cover"
                        />
                    </Avatar>
                </div>
                <div className="w-full truncate">
                    <p className="font-bold truncate">
                        {userProgress.userName}
                    </p>
                </div>
            </div>
            <div>
                <p className="font-normal text-muted-foreground">
                    {userProgress.points} XP
                </p>
            </div>
        </div>
    )
}