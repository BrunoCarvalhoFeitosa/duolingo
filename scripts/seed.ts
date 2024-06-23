import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {
    try {
    await db.delete(schema.courses)
  
    await db.delete(schema.userProgress)
  
    await db.delete(schema.units)

    await db.delete(schema.lessons)

    await db.delete(schema.challenges)

    await db.delete(schema.challengeOptions)

    await db.delete(schema.challengeProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "English",
        imageSrc: "/images/image-flag-eua.png",
      },
      {
        id: 2,
        title: "Portuguese",
        imageSrc: "/images/image-flag-brazil.png",
      },
      {
        id: 3,
        title: "Spanish",
        imageSrc: "/images/image-flag-spanish.png",
      },
      {
        id: 4,
        title: "French",
        imageSrc: "/images/image-flag-french.png",
      },
      {
        id: 5,
        title: "Italian",
        imageSrc: "/images/image-flag-italy.png",
      },
    ])

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of English",
        order: 1
      }
    ])

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns"
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Verbs"
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Verbs"
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Verbs"
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Verbs"
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/svgs/man.svg",
        correct: true,
        text: "the man",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/svgs/woman.svg",
        correct: false,
        text: "the woman",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/svgs/robot.svg",
        correct: false,
        text: "the robot",
      },
    ])

    console.log("Seeding finished.")
    } catch (error) {
      console.error(error)
      throw new Error("Failed to seed the database.")
    }
}

main()