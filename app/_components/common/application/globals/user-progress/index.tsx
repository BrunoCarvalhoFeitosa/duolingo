"use client"
import { courses } from "@/db/schema"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import { InfinityIcon } from "lucide-react"

interface UserProgressProps {
    activeCourse: typeof courses.$inferSelect
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: UserProgressProps) => {
    return (
        <div className="flex justify-between items-center gap-2 w-full">
            <Link href="/courses">
                <Button variant="ghost" className="p-0">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        width={34}
                        height={34}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="p-0 flex items-center">
                    <Image
                        src="/images/icon-application-ray.png"
                        alt="Points"
                        width={28}
                        height={38}
                    />
                    <div className="font-bold">
                        {points}
                    </div>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="p-0 flex items-center gap-2">
                    <Image
                        src="/images/icon-application-heart.png"
                        alt="Hearts"
                        width={24}
                        height={24}
                    />
                    {hasActiveSubscription
                        ? <InfinityIcon className="w-4 h-4 stroke-[3]" />
                        : <div className="font-bold">{hearts}</div>
                    }
                </Button>
            </Link>
        </div>
    )
}