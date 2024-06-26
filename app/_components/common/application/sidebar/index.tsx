"use client"
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs"
import { useTranslation } from "react-i18next"
import { cn } from "@/app/_libs/utils"
import { SidebarItem } from "@/app/_components/common/application/sidebar-item"
import { DuolingoIcon } from "@/app/_components/common/globals/doulingo-icon"
import { LoaderIcon } from "lucide-react"

type Props = {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    const { t } = useTranslation()

    return (
        <div className={cn(
            "lg:fixed lg:top-0 lg:left-0 lg:w-[310px] xl:w-[310px] px-4 lg:px-6 flex flex-col justify-between h-full border-r bg-white",
            className
        )}>
            <div>
                <div className="w-fit pt-8 md:pt-10 pb-6 lg:pb-2">
                    <DuolingoIcon href="/learn" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <SidebarItem
                        label="Aprender"
                        href="/learn"
                        iconSrc="/images/icon-application-sidebar-home.png"
                    />
                    <SidebarItem
                        label="Ranking"
                        href="/leaderboard"
                        iconSrc="/images/icon-application-sidebar-leaderboard-small.png"
                    />
                    <SidebarItem
                        label="Missões"
                        href="/quests"
                        iconSrc="/images/icon-application-sidebar-quests-small.png"
                    />
                    <SidebarItem
                        label="Loja"
                        href="/shop"
                        iconSrc="/images/icon-application-sidebar-shop-small.png"
                    />
                </div>
            </div>
            <div className="py-4">
                <ClerkLoading>
                    <LoaderIcon className="w-8 h-8 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: "w-12 h-12 lg:w-14 lg:h-14"
                            }
                        }}
                    />
                </ClerkLoaded>
            </div>
        </div>
    )
}