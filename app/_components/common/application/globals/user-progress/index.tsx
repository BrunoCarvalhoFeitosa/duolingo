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
                        width={40}
                        height={40}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="p-0 flex items-center">
                    <Image
                        src="/images/icon-application-ray.png"
                        alt="Points"
                        width={32}
                        height={32}
                    />
                    <div className="text-lg font-extrabold text-yellow-500">
                        {points}
                    </div>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="p-0 flex items-center gap-2">
                    <Image
                        src="/images/icon-application-heart.png"
                        alt="Hearts"
                        width={28}
                        height={28}
                    />
                    {hasActiveSubscription
                        ? <InfinityIcon className="w-7 h-7 stroke-[3] text-[#E63714]" />
                        : <div className="text-base font-extrabold text-[#E63714]">{hearts}</div>
                    }
                </Button>
            </Link>
        </div>
    )
}