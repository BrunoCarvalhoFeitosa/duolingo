import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { StickyWrapper } from "@/app/_components/common/application/globals/sticky-wrapper"
import { UserProgress } from "@/app/_components/common/application/globals/user-progress"
import { FeedWrapper } from "@/app/_components/common/application/globals/feed-wrapper"
import { FeedHeader } from "@/app/_components/common/application/globals/feed-header"
import { LeaderboardList } from "@/app/(application)/(dashboard)/(leaderboard)/leaderboard/_components/leaderboard-list"

const LeaderBoardPage = async () => {
    const userProgressData = getUserProgress()
    const userSubscriptionData = await getUserSubscription()
    const leaderboardData = await getTopTenUsers()

    const [userProgress, userSubscription, leaderboard] = await Promise.all([
        userProgressData,
        userSubscriptionData,
        leaderboardData
    ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    return (
        <div className="px-5 flex gap-12">
            <FeedWrapper>
                <div className="flex flex-col items-start w-full">
                    <FeedHeader
                        imageSrc="/images/icon-application-sidebar-leaderboard-large.png"
                        imageWidth={100}
                        imageHeight={100}
                        imageAlt="Ranking"
                        title="Ranking"
                        description="Veja sua posição entre outros alunos da comunidade."
                    />
                    <LeaderboardList leaderboard={leaderboard} />
                </div>
            </FeedWrapper>
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
        </div>
    )
}

export default LeaderBoardPage