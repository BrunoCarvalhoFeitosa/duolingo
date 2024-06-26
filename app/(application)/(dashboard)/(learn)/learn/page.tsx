import { lessons, units as unitsSchema } from "@/db/schema"
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { FeedWrapper } from "@/app/_components/common/application/globals/feed-wrapper"
import { StickyWrapper } from "@/app/_components/common/application/globals/sticky-wrapper"
import { UserProgress } from "@/app/_components/common/application/globals/user-progress"
import { LearnHeader } from "@/app/(application)/(dashboard)/(learn)/learn/_components/learn-header"
import { LearnUnit } from "@/app/(application)/(dashboard)/(learn)/learn/_components/learn-unit"
import { Promo } from "@/app/_components/common/application/globals/promo"
import { Quests } from "@/app/_components/common/application/globals/quests"

const LearnPage = async () => {
    const userProgressData = getUserProgress()
    const unitsData = getUnits()
    const courseProgressData = getCourseProgress()
    const lessonPercentageData = getLessonPercentage()
    const userSubscriptionData = getUserSubscription()

    const [userProgress, units, courseProgress, lessonPercentage, userSubscription] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData
    ])

    const isPro = !!userSubscription?.isActive

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    if (!courseProgress) {
        redirect("/courses")
    }

    return (
        <div className="px-6 flex gap-[48px]">
            <FeedWrapper>
                <LearnHeader title={userProgress.activeCourse.title} />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <LearnUnit
                            id={unit.id}
                            order={unit.id}
                            title={unit.title}
                            description={unit.description}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                                unit: typeof unitsSchema.$inferSelect
                            } | undefined}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
            <StickyWrapper>
                <UserProgress
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    activeCourse={userProgress.activeCourse}
                    hasActiveSubscription={isPro}
                />
                {!isPro && <Promo />}
                <Quests points={userProgress.points} />
            </StickyWrapper>
        </div>
    )
}

export default LearnPage