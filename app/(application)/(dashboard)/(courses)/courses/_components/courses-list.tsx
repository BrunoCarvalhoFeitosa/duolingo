"use client"
import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { courses, userProgress } from "@/db/schema"
import { upsertUserProgress } from "@/actions/user-progress"
import { CoursesCard } from "@/app/(application)/(dashboard)/(courses)/courses/_components/courses-card"

interface CoursesListProps {
    courses: typeof courses.$inferSelect[]
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

export const CoursesList = ({ courses, activeCourseId }: CoursesListProps) => {
    const router = useRouter()
    const [pending, startTransition] = useTransition()

    const onClick = (id: number) => {
        if (pending) {
            return
        }

        if (id === activeCourseId) {
            return router.push("/learn")
        }

        startTransition(() => {
            upsertUserProgress(id)
            .catch(() => toast.error("Something went wrong."))
        })
    }

    return (
        <div className="pt-6 grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4">
            {courses.map((course) => (
                <CoursesCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    disabled={pending}
                    active={course.id === activeCourseId}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}