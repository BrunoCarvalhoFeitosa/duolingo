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


    // Language courses
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Inglês",
        imageSrc: "/images/image-flag-eua.png",
      },
      {
        id: 2,
        title: "Português",
        imageSrc: "/images/image-flag-brazil.png",
      },
      {
        id: 3,
        title: "Espanhol",
        imageSrc: "/images/image-flag-spanish.png",
      },
      {
        id: 4,
        title: "Francês",
        imageSrc: "/images/image-flag-french.png",
      },
      {
        id: 5,
        title: "Italiano",
        imageSrc: "/images/image-flag-italy.png",
      },
    ])

    // Unit Basic English
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unidade 1",
        description: "Aprenda o básico do Inglês",
        order: 1
      }
    ])

    // Unit Intermediate English
    // await db.insert(schema.units).values([
    //   {
    //     id: 2,
    //     courseId: 1,
    //     title: "Unit 2",
    //     description: "Learn intermediate English",
    //     order: 2
    //   }
    // ])

    // Lessons Basic English
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns",
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
        title: "Pronouns"
      },
    ])

    // Challenges Basic English Nouns
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Qual destas opções corresponde a expressão "o garoto"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: 'Qual destas opções corresponde a expressão "a garota"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Qual destas opções corresponde a expressão "o zombie"?',
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // Nouns
        type: "SELECT",
        order: 4,
        question: 'Qual destas opções corresponde a expressão "o homem"?',
      },
      {
        id: 5,
        lessonId: 2, // Nouns
        type: "SELECT",
        order: 5,
        question: 'Qual destas opções corresponde a expressão "a mulher"?',
      },
      {
        id: 6,
        lessonId: 2, // Nouns
        type: "SELECT",
        order: 6,
        question: 'Qual destas opções corresponde a expressão "o macaco"?',
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 7,
        lessonId: 3, // Nouns
        type: "SELECT",
        order: 4,
        question: 'Em uma padaria, você precisa pedir um "copo de café" ao atendente. Qual das opções abaixo expressa o pedido?',
      },
      {
        id: 8,
        lessonId: 3, // Nouns
        type: "SELECT",
        order: 5,
        question: 'Em uma padaria, você precisa pedir um "copo de leite" ao atendente. Qual das opções abaixo expressa o pedido?',
      },
      {
        id: 9,
        lessonId: 3, // Nouns
        type: "SELECT",
        order: 6,
        question: 'Em uma padaria, você precisa pedir um "copo de água" ao atendente. Qual das opções abaixo expressa o pedido?',
      },
    ])

    // Challenges Basic English Verbs
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 1,
    //     lessonId: 2, // Verbs
    //     type: "SELECT",
    //     order: 1,
    //     question: 'Qual destas opções corresponde a expressão "the boy"?',
    //   },
    //   {
    //     id: 2,
    //     lessonId: 2, // Verbs
    //     type: "ASSIST",
    //     order: 2,
    //     question: '"the girl"',
    //   },
    //   {
    //     id: 3,
    //     lessonId: 2, // Verbs
    //     type: "SELECT",
    //     order: 3,
    //     question: 'Qual destas opções corresponde a expressão the "the zombie"?',
    //   },
    // ])

    // Options Basic English Nouns 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/svg/boy.svg",
        audioSrc: "/audios/en/question-one/the-boy.mp3",
        correct: true,
        text: "the boy",
      },
      {
        challengeId: 1,
        imageSrc: "/svg/girl.svg",
        audioSrc: "/audios/en/question-one/the-girl.mp3",
        correct: false,
        text: "the girl",
      },
      {
        challengeId: 1,
        imageSrc: "/svg/zombie.svg",
        audioSrc: "/audios/en/question-one/the-zombie.mp3",
        correct: false,
        text: "the zombie",
      },
    ])  

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "the girl"?
        correct: false,
        text: "the boy",
        audioSrc: "/audios/en/question-one/the-boy.mp3",
      },
      {
        challengeId: 2,
        correct: true,
        text: "the girl",
        audioSrc: "/audios/en/question-one/the-girl.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "the zombie",
        audioSrc: "/audios/en/question-one/the-zombie.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Qual destas opções corresponde a expressão the "the zombie"?
        imageSrc: "/svg/boy.svg",
        correct: false,
        text: "the boy",
        audioSrc: "/audios/en/question-one/the-boy.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/svg/girl.svg",
        correct: false,
        text: "the girl",
        audioSrc: "/audios/en/question-one/the-girl.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/svg/zombie.svg",
        correct: true,
        text: "the zombie",
        audioSrc: "/audios/en/question-one/the-zombie.mp3",
      },
    ]);

    // Options Basic English Nouns 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4, // Qual destas opções corresponde a expressão the "the man"?
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/en/question-two/the-woman.mp3",
        correct: false,
        text: "the woman",
      },
      {
        challengeId: 4, // Qual destas opções corresponde a expressão the "the man"?
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/en/question-two/the-man.mp3",
        correct: true,
        text: "the man",
      },
      {
        challengeId: 4, // Qual destas opções corresponde a expressão the "the man"?
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/en/question-two/the-monkey.mp3",
        correct: false,
        text: "the monkey",
      },
    ])

    // Options Basic English Nouns 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5, // Qual destas opções corresponde a expressão the "the woman"?
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/en/question-two/the-woman.mp3",
        correct: true,
        text: "the woman",
      },
      {
        challengeId: 5, // Qual destas opções corresponde a expressão the "the woman"?
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/en/question-two/the-man.mp3",
        correct: false,
        text: "the man",
      },
      {
        challengeId: 5, // Qual destas opções corresponde a expressão the "the woman"?
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/en/question-two/the-monkey.mp3",
        correct: false,
        text: "the monkey",
      },
    ])

    // Options Basic English Nouns 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6, // Qual destas opções corresponde a expressão the "the monkey"?
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/en/question-two/the-woman.mp3",
        correct: false,
        text: "the woman",
      },
      {
        challengeId: 6, // Qual destas opções corresponde a expressão the "the monkey"?
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/en/question-two/the-man.mp3",
        correct: false,
        text: "the man",
      },
      {
        challengeId: 6, // Qual destas opções corresponde a expressão the "the monkey"?
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/en/question-two/the-monkey.mp3",
        correct: true,
        text: "the monkey",
      },
    ])

    // Options Basic English Nouns 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 7, // Qual destas opções corresponde a expressão the "I want coffee"?
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/en/question-three/i-want-milk.mp3",
        correct: false,
        text: "I want milk",
      },
      {
        challengeId: 7, // Qual destas opções corresponde a expressão the "I want coffee"?
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/en/question-three/i-want-coffee.mp3",
        correct: true,
        text: "I want coffee",
      },
      {
        challengeId: 7, // Qual destas opções corresponde a expressão the "I want coffee"?
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/en/question-three/i-want-water.mp3",
        correct: false,
        text: "I want water",
      },
    ])

    // Options Basic English Nouns 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 8, // Qual destas opções corresponde a expressão the "I want milk"?
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/en/question-three/i-want-milk.mp3",
        correct: true,
        text: "I want milk",
      },
      {
        challengeId: 8, // Qual destas opções corresponde a expressão the "I want milk"?
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/en/question-three/i-want-coffee.mp3",
        correct: false,
        text: "I want coffee",
      },
      {
        challengeId: 8, // Qual destas opções corresponde a expressão the "I want milk"?
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/en/question-three/i-want-water.mp3",
        correct: false,
        text: "I want water",
      },
    ])

    // Options Basic English Nouns 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9, // Qual destas opções corresponde a expressão the "I want water"?
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/en/question-three/i-want-milk.mp3",
        correct: false,
        text: "I want milk",
      },
      {
        challengeId: 9, // Qual destas opções corresponde a expressão the "I want water"?
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/en/question-three/i-want-coffee.mp3",
        correct: false,
        text: "I want coffee",
      },
      {
        challengeId: 9, // Qual destas opções corresponde a expressão the "I want water"?
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/en/question-three/i-want-water.mp3",
        correct: true,
        text: "I want water",
      },
    ])

    console.log("Seeding finished.")
    } catch (error) {
      console.error(error)
      throw new Error("Failed to seed the database.")
    }
}

main()