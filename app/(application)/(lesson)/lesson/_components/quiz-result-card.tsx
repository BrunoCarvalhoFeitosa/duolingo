"use client"
import { cn } from "@/app/_libs/utils"
import { userSubscription } from "@/db/schema"
import { InfinityIcon } from "lucide-react"
import Image from "next/image"

interface QuizResultCardProps {
    variant: "points" | "hearts"
    value: number
    userSubscription?: typeof userSubscription.$inferSelect & {
        isActive: boolean
    } | null
}

export const QuizResultCard = ({ variant, value, userSubscription }: QuizResultCardProps) => {
    const imageSrc = variant === "points"
        ? "/images/icon-application-ray.png"
        : "/images/icon-application-heart.png"

    return (
        <div className={cn(
            "w-full border-[10px] rounded-2xl",
            variant === "points" && "bg-orange-400 border-orange-400",
            variant === "hearts" && "bg-[#E63714] border-[#E63714]"
        )}>
            <div className={cn(
                "p-1.5 text-xs lg:text-base font-bold text-center uppercase text-white rounded-t-xl",
                variant === "points" && "bg-orange-400",
                variant === "hearts" && "bg-[#E63714]",
            )}>
                {variant === "hearts" ? "Vidas restantes" : "Total XP"}
            </div>
            <div className={cn(
                "p-6 flex justify-center items-center gap-1 rounded-2xl bg-white text-lg font-extrabold",
                variant === "points" && "text-orange-400",
                variant === "hearts" && "text-[#E63714]",
            )}>
                <Image
                    src={imageSrc}
                    width={30}
                    height={30}
                    alt="Icon"
                />
                {variant === "hearts" && userSubscription?.isActive
                    ? <InfinityIcon className="w-7 h-7 stroke-[3] text-[#E63714]" />
                    : value
                }
            </div>
        </div>
    )
}