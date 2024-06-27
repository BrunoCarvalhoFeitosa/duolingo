import { getCourses, getUserProgress } from "@/db/queries"
import { CoursesList } from "@/app/(application)/(dashboard)/(courses)/courses/_components/courses-list"

const CoursesPage = async () => {
    const courses = await getCourses()
    const userProgress = await getUserProgress()

    return (
        <div className="px-3 mx-auto max-w-[1240px] h-full">
            <div>
                <h1 className="text-2xl font-bold">
                    Cursos disponíveis
                </h1>
            </div>
            {courses.length ? (
                <CoursesList
                    courses={courses}
                    activeCourseId={userProgress?.activeCourseId}
                />
            ) : (
                <div>
                    <p>
                        Nenhum curso disponível, aguarde o lançamento.
                    </p>
                </div>
            )}
        </div>
    )
}
 
export default CoursesPage