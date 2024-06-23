"use client"
import { cn } from "@/app/_libs/utils"
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs"
import { SidebarItem } from "@/app/_components/common/application/sidebar-item"
import { DuolingoIcon } from "@/app/_components/common/globals/doulingo-icon"
import { LoaderIcon } from "lucide-react"

type Props = {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "lg:fixed lg:top-0 lg:left-0 lg:w-[310px] xl:w-[360px] px-4 lg:px-6 flex flex-col justify-between h-full border-r bg-white",
            className
        )}>
            <div>
                <div className="w-fit py-4">
                    <DuolingoIcon href="/learn" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <SidebarItem
                        label="Learn"
                        href="/learn"
                        iconSrc="/images/icon-application-sidebar-home.png"
                    />
                    <SidebarItem
                        label="Leaderboard"
                        href="/leaderboard"
                        iconSrc="/images/icon-application-sidebar-leaderboard.png"
                    />
                    <SidebarItem
                        label="Quests"
                        href="/quests"
                        iconSrc="/images/icon-application-sidebar-quests.png"
                    />
                    <SidebarItem
                        label="Shop"
                        href="/shop"
                        iconSrc="/images/icon-application-sidebar-shop.png"
                    />
                </div>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <LoaderIcon className="w-8 h-8 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}