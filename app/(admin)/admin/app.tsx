"use client"
import simpleRestProvider from "ra-data-simple-rest"
// import ptBrMessages from 'ra-language-pt-br'
// import polyglotI18nProvider from 'ra-i18n-polyglot'
import { Admin, Resource } from "react-admin"
import { CourseList } from "@/app/(admin)/admin/course/course-list"
import { CourseCreate } from "@/app/(admin)/admin/course/course-create"
import { CourseEdit } from "@/app/(admin)/admin/course/course-edit"
import { UnitList } from "@/app/(admin)/admin/unit/unit-list"
import { UnitCreate } from "@/app/(admin)/admin/unit/unit-create"
import { UnitEdit } from "@/app/(admin)/admin/unit/unit-edit"
import { LessonList } from "@/app/(admin)/admin/lesson/lesson-list"
import { LessonCreate } from "@/app/(admin)/admin/lesson/lesson-create"
import { LessonEdit } from "@/app/(admin)/admin/lesson/lesson-edit"
import { ChallengeList } from "@/app/(admin)/admin/challenge/challenge-list"
import { ChallengeCreate } from "@/app/(admin)/admin/challenge/challenge-create"
import { ChallengeEdit } from "@/app/(admin)/admin/challenge/challenge-edit"
import { ChallengeOptionList } from "@/app/(admin)/admin/challengeOptions/challenge-option-list"
import { ChallengeOptionCreate } from "@/app/(admin)/admin/challengeOptions/challenge-option-create"
import { ChallengeOptionEdit } from "@/app/(admin)/admin/challengeOptions/challenge-option-edit"

const dataProvider = simpleRestProvider("/api")
// const messages = { "pt-br": ptBrMessages }
// const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br')

const App = () => {
    return (
        <Admin
            dataProvider={dataProvider}
            // i18nProvider={i18nProvider}
            defaultTheme="dark"
        >
            <Resource
                name="courses"
                list={CourseList}
                create={CourseCreate}
                edit={CourseEdit}
                recordRepresentation="title"
                options={{ label: "Cursos" }}
            />
            <Resource
                name="units"
                list={UnitList}
                create={UnitCreate}
                edit={UnitEdit}
                recordRepresentation="title"
                options={{ label: "Unidade" }}
            />
            <Resource
                name="lessons"
                list={LessonList}
                create={LessonCreate}
                edit={LessonEdit}
                recordRepresentation="title"
                options={{ label: "Lições" }}
            />
            <Resource
                name="challenges"
                list={ChallengeList}
                create={ChallengeCreate}
                edit={ChallengeEdit}
                recordRepresentation="question"
                options={{ label: "Desafios" }}
            />
            <Resource
                name="challengeOptions"
                list={ChallengeOptionList}
                create={ChallengeOptionCreate}
                edit={ChallengeOptionEdit}
                recordRepresentation="text"
                options={{ label: "Respostas" }}
            />
        </Admin>
    )
}

export default App