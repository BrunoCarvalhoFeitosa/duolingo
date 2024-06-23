import { getUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { FeedWrapper } from "@/app/_components/common/application/globals/feed-wrapper"
import { StickyWrapper } from "@/app/_components/common/application/globals/sticky-wrapper"
import { UserProgress } from "@/app/_components/common/application/globals/user-progress"
import { Header } from "./_components/header"
import { Unit } from "./_components/unit"

const LearnPage = async () => {
    const unitsData = await getUnits()
    const userProgressData = await getUserProgress()

    const [units, userProgress] = await Promise.all([
        unitsData,
        userProgressData
    ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    return (
        <div className="px-6 flex flex-row-reverse gap-[48px]">
            <StickyWrapper>
                <UserProgress
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                    activeCourse={userProgress.activeCourse}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.id}
                            title={unit.title}
                            description={unit.description}
                            lessons={unit.lessons}
                            activeLesson={undefined}
                            activeLessonPercentage={0}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage