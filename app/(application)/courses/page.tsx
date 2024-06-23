import { getCourses, getUserProgress } from "@/db/queries"
import { List } from "./_components/list"

const CoursesPage = async () => {
    const courses = await getCourses()
    const userProgress = await getUserProgress()

    return (
        <div className="px-3 mx-auto max-w-[1240px] h-full">
            <div>
                <h1 className="text-2xl font-bold">
                    Language Courses
                </h1>
            </div>
            <div>
                <List
                    courses={courses}
                    activeCourseId={userProgress?.activeCourseId}
                />
            </div>
        </div>
    )
}
 
export default CoursesPage