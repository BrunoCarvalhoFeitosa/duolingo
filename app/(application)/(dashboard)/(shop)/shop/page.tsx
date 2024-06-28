import { getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { StickyWrapper } from "@/app/_components/common/application/globals/sticky-wrapper"
import { UserProgress } from "@/app/_components/common/application/globals/user-progress"
import { FeedWrapper } from "@/app/_components/common/application/globals/feed-wrapper"
import { Items } from "@/app/(application)/(dashboard)/(shop)/shop/_components/items"
import { FeedHeader } from "@/app/_components/common/application/globals/feed-header"
import { Quests } from "@/app/_components/common/application/globals/quests"
import { Promo } from "@/app/_components/common/application/globals/promo"

const ShopPage = async () => {
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()

    const [userProgress, userSubscription] = await Promise.all([
        userProgressData,
        userSubscriptionData
    ])

    const isPro = !!userSubscription?.isActive

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    return (
        <div className="px-5 flex gap-12">
            <FeedWrapper>
                <div className="flex flex-col items-start w-full">
                    <FeedHeader
                        imageSrc="/images/icon-application-sidebar-shop-large.png"
                        imageWidth={100}
                        imageHeight={100}
                        imageAlt="Loja"
                        title="Loja"
                        description="Gaste seus pontos em coisas legais."
                    />
                </div>
                <div>
                    <Items
                        hearts={userProgress.hearts}
                        points={userProgress.points}
                        hasActiveSubscription={!!userSubscription?.isActive}
                    />
                </div>
            </FeedWrapper>
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={!!userSubscription?.isActive}
                />
                {!isPro && <Promo />}
                <Quests points={userProgress.points} />
            </StickyWrapper>
        </div>
    )
}

export default ShopPage