import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {
    try {
    // DELETES
    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)
    await db.delete(schema.userSubscription)




    // Courses
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Inglês",
        imageSrc: "/images/image-flag-eua.png",
      },
      {
        id: 2,
        title: "Espanhol",
        imageSrc: "/images/image-flag-spanish.png",
      },
      {
        id: 3,
        title: "Francês",
        imageSrc: "/images/image-flag-french.png",
      },
      {
        id: 4,
        title: "Italiano",
        imageSrc: "/images/image-flag-italy.png",
      },
    ])





    // Unit Basic English
    await db.insert(schema.units).values([
      {
        id: 1,
        order: 1,
        courseId: 1,
        title: "Inglês",
        description: "Aprenda inglês do básico ao avançado"
      }
    ])

    // Unit Basic Spanish
    await db.insert(schema.units).values([
      {
        id: 2,
        courseId: 2,
        order: 2,
        title: "Espanhol",
        description: "Aprenda espanhol do básico ao avançado"
      }
    ])

    // Unit Basic French
    await db.insert(schema.units).values([
      {
        id: 3,
        courseId: 3,
        order: 3,
        title: "Francês",
        description: "Aprenda francês do básico ao avançado",
      }
    ])

    // Unit Basic Italian
    await db.insert(schema.units).values([
      {
        id: 4,
        courseId: 4,
        order: 4,
        title: "Italiano",
        description: "Aprenda italiano do básico ao avançado",
      }
    ])





    // Lessons English
    await db.insert(schema.lessons).values([
      {
        id: 1,
        order: 1,
        unitId: 1,
        title: "The man",
      },
      {
        id: 2,
        order: 2,
        unitId: 1,
        title: "The young"
      },
      {
        id: 3,
        order: 3,
        unitId: 1,
        title: "The grandma"
      },
      {
        id: 4,
        order: 4,
        unitId: 1,
        title: "The dog"
      },
      {
        id: 5,
        order: 5,
        unitId: 1,
        title: "The cat"
      },
      {
        id: 6,
        order: 6,
        unitId: 1,
        title: "The lion"
      },
      {
        id: 7,
        order: 7,
        unitId: 1,
        title: "I want coffee"
      },
      {
        id: 8,
        order: 8,
        unitId: 1,
        title: "The bread"
      },
      {
        id: 9,
        order: 9,
        unitId: 1,
        title: "The cake"
      },
      {
        id: 10,
        order: 10,
        unitId: 1,
        title: "The sofa"
      },
      {
        id: 11,
        order: 11,
        unitId: 1,
        title: "The lamp"
      },
      {
        id: 12,
        order: 12,
        unitId: 1,
        title: "The shower"
      },
    ])

    // Lessons Spanish
    await db.insert(schema.lessons).values([
      {
        id: 13,
        order: 13,
        unitId: 2,
        title: "El hombre",
      },
      {
        id: 14,
        order: 14,
        unitId: 2,
        title: "El joven"
      },
      {
        id: 15,
        order: 15,
        unitId: 2,
        title: "La abuela"
      },
      {
        id: 16,
        order: 16,
        unitId: 2,
        title: "El perro"
      },
      {
        id: 17,
        order: 17,
        unitId: 2,
        title: "El gato"
      },
      {
        id: 18,
        order: 18,
        unitId: 2,
        title: "El león"
      },
      {
        id: 19,
        order: 19,
        unitId: 2,
        title: "El café"
      },
      {
        id: 20,
        order: 20,
        unitId: 2,
        title: "El pan"
      },
      {
        id: 21,
        order: 21,
        unitId: 2,
        title: "El pastel"
      },
      {
        id: 22,
        order: 22,
        unitId: 2,
        title: "El sofá"
      },
      {
        id: 23,
        order: 23,
        unitId: 2,
        title: "La lámpara"
      },
      {
        id: 24,
        order: 24,
        unitId: 2,
        title: "La ducha"
      },
    ])

    // Lessons French
    await db.insert(schema.lessons).values([
      {
        id: 25,
        order: 25,
        unitId: 3,
        title: "L'homme",
      },
      {
        id: 26,
        order: 26,
        unitId: 3,
        title: "Le jeune"
      },
      {
        id: 27,
        order: 27,
        unitId: 3,
        title: "Grand-mère"
      },
      {
        id: 28,
        order: 28,
        unitId: 3,
        title: "Le chien"
      },
      {
        id: 29,
        order: 29,
        unitId: 3,
        title: "Le chat"
      },
      {
        id: 30,
        order: 30,
        unitId: 3,
        title: "Le lion"
      },
      {
        id: 31,
        order: 31,
        unitId: 3,
        title: "Le café"
      },
      {
        id: 32,
        order: 32,
        unitId: 3,
        title: "Le pain"
      },
      {
        id: 33,
        order: 33,
        unitId: 3,
        title: "Le gâteau"
      },
      {
        id: 34,
        order: 34,
        unitId: 3,
        title: "Le canapé"
      },
      {
        id: 35,
        order: 35,
        unitId: 3,
        title: "La lampe"
      },
      {
        id: 36,
        order: 36,
        unitId: 3,
        title: "La douche"
      },
    ])

    // Lessons Italian
    await db.insert(schema.lessons).values([
      {
        id: 37,
        order: 37,
        unitId: 4,
        title: "L'uomo",
      },
      {
        id: 38,
        order: 38,
        unitId: 4,
        title: "Il giovane"
      },
      {
        id: 39,
        order: 39,
        unitId: 4,
        title: "Nonna"
      },
      {
        id: 40,
        order: 40,
        unitId: 4,
        title: "Il cane"
      },
      {
        id: 41,
        order: 41,
        unitId: 4,
        title: "Il gatto"
      },
      {
        id: 42,
        order: 42,
        unitId: 4,
        title: "Il leone"
      },
      {
        id: 43,
        order: 43,
        unitId: 4,
        title: "Il caffè"
      },
      {
        id: 44,
        order: 44,
        unitId: 4,
        title: "Il pane"
      },
      {
        id: 45,
        order: 45,
        unitId: 4,
        title: "La torta"
      },
      {
        id: 46,
        order: 46,
        unitId: 4,
        title: "Il divano"
      },
      {
        id: 47,
        order: 47,
        unitId: 4,
        title: "La lampada"
      },
      {
        id: 48,
        order: 48,
        unitId: 4,
        title: "La doccia"
      },
    ])


    // English


    // Challenges English "The man"
    await db.insert(schema.challenges).values([
      {
        id: 1,
        order: 1,
        lessonId: 1,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o homem"?',
      },
      {
        id: 2,
        order: 2,
        lessonId: 1,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a mulher"',
      },
      {
        id: 3,
        order: 3,
        lessonId: 1,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a criança"?',
      },
    ])

    // Options English "The man"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/en/question-one/the-woman.mp3",
        correct: false,
        text: "the woman",
      },
      {
        challengeId: 1,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-one/the-child.mp3",
        correct: false,
        text: "the child",
      },
      {
        challengeId: 1,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/en/question-one/the-man.mp3",
        correct: true,
        text: "the man",
      },
    ])  

    // Options English "The woman"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/en/question-one/the-woman.mp3",
        correct: true,
        text: "the woman",
      },
      {
        challengeId: 2,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-one/the-child.mp3",
        correct: false,
        text: "the child",
      },
      {
        challengeId: 2,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/en/question-one/the-man.mp3",
        correct: false,
        text: "the man",
      },
    ]);

    // Options English "The child"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/en/question-one/the-woman.mp3",
        correct: false,
        text: "the woman",
      },
      {
        challengeId: 3,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-one/the-child.mp3",
        correct: true,
        text: "the child",
      },
      {
        challengeId: 3,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/en/question-one/the-man.mp3",
        correct: false,
        text: "the man",
      },
    ]);

    



    // Challenges English "The young"
    await db.insert(schema.challenges).values([
      {
        id: 4,
        order: 4,
        lessonId: 2,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bebê"?',
      },
      {
        id: 5,
        order: 5,
        lessonId: 2,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adolescente"',
      },
      {
        id: 6,
        order: 6,
        lessonId: 2,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adulta"?',
      },
    ])

    // Options English "The baby"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/en/question-two/the-teenager.mp3",
        correct: false,
        text: "the teenager",
      },
      {
        challengeId: 4,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-two/the-baby.mp3",
        correct: true,
        text: "the baby",
      },
      {
        challengeId: 4,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/en/question-two/the-adult.mp3",
        correct: false,
        text: "the adult",
      },
    ])

    // Options English "The teenager"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/en/question-two/the-teenager.mp3",
        correct: true,
        text: "the teenager",
      },
      {
        challengeId: 5,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-two/the-baby.mp3",
        correct: false,
        text: "the baby",
      },
      {
        challengeId: 5,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/en/question-two/the-adult.mp3",
        correct: false,
        text: "the adult",
      },
    ])

    // Options English "The adult"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/en/question-two/the-teenager.mp3",
        correct: false,
        text: "the teenager",
      },
      {
        challengeId: 6,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-two/the-baby.mp3",
        correct: false,
        text: "the baby",
      },
      {
        challengeId: 6,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/en/question-two/the-adult.mp3",
        correct: true,
        text: "the adult",
      },
    ])





    // Challenges English "The grandma"
    await db.insert(schema.challenges).values([
      {
        id: 7,
        order: 7,
        lessonId: 3,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o filho"?',
      },
      {
        id: 8,
        order: 8,
        lessonId: 3,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pai"',
      },
      {
        id: 9,
        order: 9,
        lessonId: 3,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a avó"?',
      },
    ])

    // Options English "The son"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 7,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/en/question-three/the-father.mp3",
        correct: false,
        text: "the father",
      },
      {
        challengeId: 7,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-three/the-son.mp3",
        correct: true,
        text: "the son",
      },
      {
        challengeId: 7,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/en/question-three/the-grandma.mp3",
        correct: false,
        text: "the grandma",
      },
    ])

    // Options English "The father"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 8,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/en/question-three/the-father.mp3",
        correct: true,
        text: "the father",
      },
      {
        challengeId: 8,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-three/the-son.mp3",
        correct: false,
        text: "the son",
      },
      {
        challengeId: 8,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/en/question-three/the-grandma.mp3",
        correct: false,
        text: "the grandma",
      },
    ])

    // Options English "The grandma"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/en/question-three/the-father.mp3",
        correct: false,
        text: "the father",
      },
      {
        challengeId: 9,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/en/question-three/the-son.mp3",
        correct: false,
        text: "the son",
      },
      {
        challengeId: 9,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/en/question-three/the-grandma.mp3",
        correct: true,
        text: "the grandma",
      },
    ])





    // Challenges English "The dog"
    await db.insert(schema.challenges).values([
      {
        id: 10,
        order: 10,
        lessonId: 4,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o cachorro"?',
      },
      {
        id: 11,
        order: 11,
        lessonId: 4,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o macaco"',
      },
      {
        id: 12,
        order: 12,
        lessonId: 4,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a urso"?',
      },
    ])

    // Options English "The dog"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 10,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/en/question-four/the-bear.mp3",
        correct: false,
        text: "the bear",
      },
      {
        challengeId: 10,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/en/question-four/the-monkey.mp3",
        correct: false,
        text: "the monkey",
      },
      {
        challengeId: 10,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/en/question-four/the-dog.mp3",
        correct: true,
        text: "the dog",
      },
    ])

    // Options English "The monkey"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 11,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/en/question-four/the-bear.mp3",
        correct: false,
        text: "the bear",
      },
      {
        challengeId: 11,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/en/question-four/the-monkey.mp3",
        correct: true,
        text: "the monkey",
      },
      {
        challengeId: 11,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/en/question-four/the-dog.mp3",
        correct: false,
        text: "the dog",
      },
    ])

    // Options English "The bear"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 12,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/en/question-four/the-bear.mp3",
        correct: true,
        text: "the bear",
      },
      {
        challengeId: 12,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/en/question-four/the-monkey.mp3",
        correct: false,
        text: "the monkey",
      },
      {
        challengeId: 12,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/en/question-four/the-dog.mp3",
        correct: false,
        text: "the dog",
      },
    ])




    // Challenges English "The cat"
    await db.insert(schema.challenges).values([
      {
        id: 13,
        order: 13,
        lessonId: 5,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o gato"?',
      },
      {
        id: 14,
        order: 14,
        lessonId: 5,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sapo"',
      },
      {
        id: 15,
        order: 15,
        lessonId: 5,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o coelho"?',
      },
    ])

    // Options English "The cat"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 13,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/en/question-five/the-frog.mp3",
        correct: false,
        text: "the frog",
      },
      {
        challengeId: 13,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/en/question-five/the-rabbit.mp3",
        correct: false,
        text: "the rabbit",
      },
      {
        challengeId: 13,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/en/question-five/the-cat.mp3",
        correct: true,
        text: "the cat",
      },
    ])

    // Options English "The frog"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 14,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/en/question-five/the-frog.mp3",
        correct: true,
        text: "the frog",
      },
      {
        challengeId: 14,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/en/question-five/the-rabbit.mp3",
        correct: false,
        text: "the rabbit",
      },
      {
        challengeId: 14,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/en/question-five/the-cat.mp3",
        correct: false,
        text: "the cat",
      },
    ])

    // Options English "The rabbit"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 15,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/en/question-five/the-frog.mp3",
        correct: false,
        text: "the frog",
      },
      {
        challengeId: 15,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/en/question-five/the-rabbit.mp3",
        correct: true,
        text: "the rabbit",
      },
      {
        challengeId: 15,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/en/question-five/the-cat.mp3",
        correct: false,
        text: "the cat",
      },
    ])




    // Challenges English "The fish"
    await db.insert(schema.challenges).values([
      {
        id: 16,
        order: 16,
        lessonId: 6,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o peixe"?',
      },
      {
        id: 17,
        order: 17,
        lessonId: 6,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a girafa"',
      },
      {
        id: 18,
        order: 18,
        lessonId: 6,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o leão"?',
      },
    ])

    // Options English "The fish"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 16,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/en/question-six/the-lion.mp3",
        correct: false,
        text: "the lion",
      },
      {
        challengeId: 16,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/en/question-six/the-fish.mp3",
        correct: true,
        text: "the fish",
      },
      {
        challengeId: 16,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/en/question-six/the-giraffe.mp3",
        correct: false,
        text: "the giraffe",
      },
    ])

    // Options English "The giraffe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 17,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/en/question-six/the-lion.mp3",
        correct: false,
        text: "the lion",
      },
      {
        challengeId: 17,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/en/question-six/the-fish.mp3",
        correct: false,
        text: "the fish",
      },
      {
        challengeId: 17,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/en/question-six/the-giraffe.mp3",
        correct: true,
        text: "the giraffe",
      },
    ])

    // Options English "The lion"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 18,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/en/question-six/the-lion.mp3",
        correct: true,
        text: "the lion",
      },
      {
        challengeId: 18,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/en/question-six/the-fish.mp3",
        correct: false,
        text: "the fish",
      },
      {
        challengeId: 18,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/en/question-six/the-giraffe.mp3",
        correct: false,
        text: "the giraffe",
      },
    ])
    



    // Challenges English "I want coffee"
    await db.insert(schema.challenges).values([
      {
        id: 19,
        order: 19,
        lessonId: 7,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero café"?',
      },
      {
        id: 20,
        order: 20,
        lessonId: 7,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero leite"',
      },
      {
        id: 21,
        order: 21,
        lessonId: 7,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero água"?',
      },
    ])

    // Options English "I want coffee"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 19,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/en/question-seven/i-want-milk.mp3",
        correct: false,
        text: "I want milk",
      },
      {
        challengeId: 19,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/en/question-seven/i-want-coffee.mp3",
        correct: true,
        text: "I want coffee",
      },
      {
        challengeId: 19,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/en/question-seven/i-want-water.mp3",
        correct: false,
        text: "I want water",
      },
    ])

    // Options English "I want milk"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 20,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/en/question-seven/i-want-milk.mp3",
        correct: true,
        text: "I want milk",
      },
      {
        challengeId: 20,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/en/question-seven/i-want-coffee.mp3",
        correct: false,
        text: "I want coffee",
      },
      {
        challengeId: 20,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/en/question-seven/i-want-water.mp3",
        correct: false,
        text: "I want water",
      },
    ])

    // Options English "I want water"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 21,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/en/question-seven/i-want-milk.mp3",
        correct: false,
        text: "I want milk",
      },
      {
        challengeId: 21,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/en/question-seven/i-want-coffee.mp3",
        correct: false,
        text: "I want coffee",
      },
      {
        challengeId: 21,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/en/question-seven/i-want-water.mp3",
        correct: true,
        text: "I want water",
      },
    ])




    // Challenges English "The bread"
    await db.insert(schema.challenges).values([
      {
        id: 22,
        order: 22,
        lessonId: 8,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pão"?',
      },
      {
        id: 23,
        order: 23,
        lessonId: 8,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o queijo"',
      },
      {
        id: 24,
        order: 24,
        lessonId: 8,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a panqueca"?',
      },
    ])

    // Options English "The bread"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 22,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/en/question-eight/the-cheese.mp3",
        correct: false,
        text: "the cheese",
      },
      {
        challengeId: 22,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/en/question-eight/the-bread.mp3",
        correct: true,
        text: "the bread",
      },
      {
        challengeId: 22,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/en/question-eight/the-pancake.mp3",
        correct: false,
        text: "the pancake",
      },
    ])

    // Options English "The cheese"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 23,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/en/question-eight/the-cheese.mp3",
        correct: true,
        text: "the cheese",
      },
      {
        challengeId: 23,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/en/question-eight/the-bread.mp3",
        correct: false,
        text: "the bread",
      },
      {
        challengeId: 23,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/en/question-eight/the-pancake.mp3",
        correct: false,
        text: "the pancake",
      },
    ])

    // Options English "The pancake"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 24,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/en/question-eight/the-cheese.mp3",
        correct: false,
        text: "the cheese",
      },
      {
        challengeId: 24,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/en/question-eight/the-bread.mp3",
        correct: false,
        text: "the bread",
      },
      {
        challengeId: 24,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/en/question-eight/the-pancake.mp3",
        correct: true,
        text: "the pancake",
      },
    ])





    // Challenges English "The cake"
    await db.insert(schema.challenges).values([
      {
        id: 25,
        order: 25,
        lessonId: 9,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bolo"?',
      },
      {
        id: 26,
        order: 26,
        lessonId: 9,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "os biscoitos"',
      },
      {
        id: 27,
        order: 27,
        lessonId: 9,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o hambúrguer"?',
      },
    ])

    // Options English "The bread"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 25,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/en/question-nine/the-cookies.mp3",
        correct: false,
        text: "the cookies",
      },
      {
        challengeId: 25,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/en/question-nine/the-cake.mp3",
        correct: true,
        text: "the cake",
      },
      {
        challengeId: 25,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/en/question-nine/the-burguer.mp3",
        correct: false,
        text: "the burguer",
      },
    ])

    // Options English "The cookies"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 26,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/en/question-nine/the-cookies.mp3",
        correct: true,
        text: "the cookies",
      },
      {
        challengeId: 26,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/en/question-nine/the-cake.mp3",
        correct: false,
        text: "the cake",
      },
      {
        challengeId: 26,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/en/question-nine/the-burguer.mp3",
        correct: false,
        text: "the burguer",
      },
    ])

    // Options English "The burguer"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 27,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/en/question-nine/the-cookies.mp3",
        correct: false,
        text: "the cookies",
      },
      {
        challengeId: 27,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/en/question-nine/the-cake.mp3",
        correct: false,
        text: "the cake",
      },
      {
        challengeId: 27,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/en/question-nine/the-burguer.mp3",
        correct: true,
        text: "the burguer",
      },
    ])




    // Challenges English "The sofa"
    await db.insert(schema.challenges).values([
      {
        id: 28,
        order: 28,
        lessonId: 10,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sofá"?',
      },
      {
        id: 29,
        order: 29,
        lessonId: 10,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cama"',
      },
      {
        id: 30,
        order: 30,
        lessonId: 10,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cadeira"?',
      },
    ])

    // Options English "The sofa"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 28,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/en/question-ten/the-bed.mp3",
        correct: false,
        text: "the bed",
      },
      {
        challengeId: 28,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/en/question-ten/the-sofa.mp3",
        correct: true,
        text: "the sofa",
      },
      {
        challengeId: 28,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/en/question-ten/the-chair.mp3",
        correct: false,
        text: "the chair",
      },
    ])

    // Options English "The bed"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 29,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/en/question-ten/the-bed.mp3",
        correct: true,
        text: "the bed",
      },
      {
        challengeId: 29,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/en/question-ten/the-sofa.mp3",
        correct: false,
        text: "the sofa",
      },
      {
        challengeId: 29,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/en/question-ten/the-chair.mp3",
        correct: false,
        text: "the chair",
      },
    ])

    // Options English "The chair"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 30,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/en/question-ten/the-bed.mp3",
        correct: false,
        text: "the bed",
      },
      {
        challengeId: 30,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/en/question-ten/the-sofa.mp3",
        correct: false,
        text: "the sofa",
      },
      {
        challengeId: 30,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/en/question-ten/the-chair.mp3",
        correct: true,
        text: "the chair",
      },
    ])




    // Challenges English "The lamp"
    await db.insert(schema.challenges).values([
      {
        id: 31,
        order: 31,
        lessonId: 11,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o abajur"?',
      },
      {
        id: 32,
        order: 32,
        lessonId: 11,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lustre"',
      },
      {
        id: 33,
        order: 33,
        lessonId: 11,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lampião"?',
      },
    ])

    // Options English "The lamp"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 31,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/en/question-eleven/the-chandelier.mp3",
        correct: false,
        text: "the chandelier",
      },
      {
        challengeId: 31,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/en/question-eleven/the-lamp.mp3",
        correct: true,
        text: "the lamp",
      },
      {
        challengeId: 31,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/en/question-eleven/the-lamp-oil.mp3",
        correct: false,
        text: "the lamp oil",
      },
    ])

    // Options English "The chandelier"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 32,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/en/question-eleven/the-chandelier.mp3",
        correct: true,
        text: "the chandelier",
      },
      {
        challengeId: 32,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/en/question-eleven/the-lamp.mp3",
        correct: false,
        text: "the lamp",
      },
      {
        challengeId: 32,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/en/question-eleven/the-lamp-oil.mp3",
        correct: false,
        text: "the lamp oil",
      },
    ])

    // Options English "The lamp oil"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 33,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/en/question-eleven/the-chandelier.mp3",
        correct: false,
        text: "the chandelier",
      },
      {
        challengeId: 33,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/en/question-eleven/the-lamp.mp3",
        correct: false,
        text: "the lamp",
      },
      {
        challengeId: 33,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/en/question-eleven/the-lamp-oil.mp3",
        correct: true,
        text: "the lamp oil",
      },
    ])




    // Challenges English "The shower"
    await db.insert(schema.challenges).values([
      {
        id: 34,
        order: 34,
        lessonId: 12,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o chuveiro"?',
      },
      {
        id: 35,
        order: 35,
        lessonId: 12,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a pia"',
      },
      {
        id: 36,
        order: 36,
        lessonId: 12,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o espelho"?',
      },
    ])

    // Options English "The shower"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 34,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/en/question-twelve/the-sink.mp3",
        correct: false,
        text: "the sink",
      },
      {
        challengeId: 34,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/en/question-twelve/the-shower.mp3",
        correct: true,
        text: "the shower",
      },
      {
        challengeId: 34,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/en/question-twelve/the-mirror.mp3",
        correct: false,
        text: "the mirror",
      },
    ])

    // Options English "The sink"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 35,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/en/question-twelve/the-sink.mp3",
        correct: true,
        text: "the sink",
      },
      {
        challengeId: 35,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/en/question-twelve/the-shower.mp3",
        correct: false,
        text: "the shower",
      },
      {
        challengeId: 35,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/en/question-twelve/the-mirror.mp3",
        correct: false,
        text: "the mirror",
      },
    ])

    // Options English "The mirror"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 36,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/en/question-twelve/the-sink.mp3",
        correct: false,
        text: "the sink",
      },
      {
        challengeId: 36,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/en/question-twelve/the-shower.mp3",
        correct: false,
        text: "the shower",
      },
      {
        challengeId: 36,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/en/question-twelve/the-mirror.mp3",
        correct: true,
        text: "the mirror",
      },
    ])


    // Spanish


    // Challenges Spanish "El hombre"
    await db.insert(schema.challenges).values([
      {
        id: 37,
        order: 37,
        lessonId: 13,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o homem"?',
      },
      {
        id: 38,
        order: 38,
        lessonId: 13,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a mulher"',
      },
      {
        id: 39,
        order: 39,
        lessonId: 13,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a criança"?',
      },
    ])

    // Options Spanish "El hombre"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 37,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/es/question-one/la-mujer.mp3",
        correct: false,
        text: "la mujer",
      },
      {
        challengeId: 37,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-one/el-nino.mp3",
        correct: false,
        text: "el niño",
      },
      {
        challengeId: 37,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/es/question-one/el-hombre.mp3",
        correct: true,
        text: "el hombre",
      },
    ])  

    // Options Spanish "La mujer"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 38,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/es/question-one/la-mujer.mp3",
        correct: true,
        text: "la mujer",
      },
      {
        challengeId: 38,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-one/el-nino.mp3",
        correct: false,
        text: "el niño",
      },
      {
        challengeId: 38,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/es/question-one/el-hombre.mp3",
        correct: false,
        text: "el hombre",
      },
    ]);

    // Options Spanish "El niño"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 39,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/es/question-one/la-mujer.mp3",
        correct: false,
        text: "la mujer",
      },
      {
        challengeId: 39,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-one/el-nino.mp3",
        correct: true,
        text: "el niño",
      },
      {
        challengeId: 39,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/es/question-one/el-hombre.mp3",
        correct: false,
        text: "el hombre",
      },
    ]);

    



    // Challenges Spanish "El joven"
    await db.insert(schema.challenges).values([
      {
        id: 40,
        order: 40,
        lessonId: 14,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bebê"?',
      },
      {
        id: 41,
        order: 41,
        lessonId: 14,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adolescente"',
      },
      {
        id: 42,
        order: 42,
        lessonId: 14,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adulta"?',
      },
    ])

    // Options Spanish "El bebé"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 40,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/es/question-two/el-adolescente.mp3",
        correct: false,
        text: "el adolescente",
      },
      {
        challengeId: 40,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-two/el-bebe.mp3",
        correct: true,
        text: "el bebé",
      },
      {
        challengeId: 40,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/es/question-two/el-adulto.mp3",
        correct: false,
        text: "el adulto",
      },
    ])

    // Options Spanish "El adolescente"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 41,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/es/question-two/el-adolescente.mp3",
        correct: true,
        text: "el adolescente",
      },
      {
        challengeId: 41,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-two/el-bebe.mp3",
        correct: false,
        text: "el bebé",
      },
      {
        challengeId: 41,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/es/question-two/el-adulto.mp3",
        correct: false,
        text: "el adulto",
      },
    ])

    // Options Spanish "El adulto"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 42,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/es/question-two/el-adolescente.mp3",
        correct: false,
        text: "el adolescente",
      },
      {
        challengeId: 42,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-two/el-bebe.mp3",
        correct: false,
        text: "el bebé",
      },
      {
        challengeId: 42,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/es/question-two/el-adulto.mp3",
        correct: true,
        text: "el adulto",
      },
    ])





    // Challenges Spanish "The abuela"
    await db.insert(schema.challenges).values([
      {
        id: 43,
        order: 43,
        lessonId: 15,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o filho"?',
      },
      {
        id: 44,
        order: 44,
        lessonId: 15,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pai"',
      },
      {
        id: 45,
        order: 45,
        lessonId: 15,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a avó"?',
      },
    ])

    // Options Spanish "El hijo"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 43,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/es/question-three/el-padre.mp3",
        correct: false,
        text: "el padre",
      },
      {
        challengeId: 43,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-three/el-hijo.mp3",
        correct: true,
        text: "el hijo",
      },
      {
        challengeId: 43,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/es/question-three/la-abuela.mp3",
        correct: false,
        text: "la abuela",
      },
    ])

    // Options Spanish "El padre"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 44,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/es/question-three/el-padre.mp3",
        correct: true,
        text: "el padre",
      },
      {
        challengeId: 44,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-three/el-hijo.mp3",
        correct: false,
        text: "el hijo",
      },
      {
        challengeId: 44,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/es/question-three/la-abuela.mp3",
        correct: false,
        text: "la abuela",
      },
    ])

    // Options Spanish "La abuela"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 45,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/es/question-three/el-padre.mp3",
        correct: false,
        text: "el padre",
      },
      {
        challengeId: 45,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/es/question-three/el-hijo.mp3",
        correct: false,
        text: "el hijo",
      },
      {
        challengeId: 45,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/es/question-three/la-abuela.mp3",
        correct: true,
        text: "la abuela",
      },
    ])





    // Challenges Spanish "The dog"
    await db.insert(schema.challenges).values([
      {
        id: 46,
        order: 46,
        lessonId: 16,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o cachorro"?',
      },
      {
        id: 47,
        order: 47,
        lessonId: 16,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o macaco"',
      },
      {
        id: 48,
        order: 48,
        lessonId: 16,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a urso"?',
      },
    ])

    // Options Spanish "El perro"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 46,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/es/question-four/el-oso.mp3",
        correct: false,
        text: "el oso",
      },
      {
        challengeId: 46,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/es/question-four/el-mono.mp3",
        correct: false,
        text: "el mono",
      },
      {
        challengeId: 46,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/es/question-four/el-perro.mp3",
        correct: true,
        text: "el perro",
      },
    ])

    // Options Spanish "El mono"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 47,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/es/question-four/el-oso.mp3",
        correct: false,
        text: "el oso",
      },
      {
        challengeId: 47,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/es/question-four/el-mono.mp3",
        correct: true,
        text: "el mono",
      },
      {
        challengeId: 47,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/es/question-four/el-perro.mp3",
        correct: false,
        text: "el perro",
      },
    ])

    // Options Spanish "El oso"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 48,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/es/question-four/el-oso.mp3",
        correct: true,
        text: "el oso",
      },
      {
        challengeId: 48,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/es/question-four/el-mono.mp3",
        correct: false,
        text: "el mono",
      },
      {
        challengeId: 48,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/es/question-four/el-perro.mp3",
        correct: false,
        text: "el perro",
      },
    ])




    // Challenges Spanish "El gato"
    await db.insert(schema.challenges).values([
      {
        id: 49,
        order: 49,
        lessonId: 17,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o gato"?',
      },
      {
        id: 50,
        order: 50,
        lessonId: 17,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sapo"',
      },
      {
        id: 51,
        order: 51,
        lessonId: 17,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o coelho"?',
      },
    ])

    // Options Spanish "El gato"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 49,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/es/question-five/el-sapo.mp3",
        correct: false,
        text: "el sapo",
      },
      {
        challengeId: 49,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/es/question-five/el-conejo.mp3",
        correct: false,
        text: "el conejo",
      },
      {
        challengeId: 49,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/es/question-five/el-gato.mp3",
        correct: true,
        text: "el gato",
      },
    ])

    // Options Spanish "The frog"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 50,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/es/question-five/el-sapo.mp3",
        correct: true,
        text: "el sapo",
      },
      {
        challengeId: 50,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/es/question-five/el-conejo.mp3",
        correct: false,
        text: "el conejo",
      },
      {
        challengeId: 50,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/es/question-five/el-gato.mp3",
        correct: false,
        text: "el gato",
      },
    ])

    // Options Spanish "El conejo"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 51,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/es/question-five/el-sapo.mp3",
        correct: false,
        text: "el sapo",
      },
      {
        challengeId: 51,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/es/question-five/el-conejo.mp3",
        correct: true,
        text: "el conejo",
      },
      {
        challengeId: 51,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/es/question-five/el-gato.mp3",
        correct: false,
        text: "el gato",
      },
    ])




    // Challenges Spanish "The fish"
    await db.insert(schema.challenges).values([
      {
        id: 52,
        order: 52,
        lessonId: 18,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o peixe"?',
      },
      {
        id: 53,
        order: 53,
        lessonId: 18,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a girafa"',
      },
      {
        id: 54,
        order: 54,
        lessonId: 18,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o leão"?',
      },
    ])

    // Options Spanish "El pez"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 52,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/es/question-six/el-leon.mp3",
        correct: false,
        text: "el león",
      },
      {
        challengeId: 52,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/es/question-six/el-pez.mp3",
        correct: true,
        text: "el pez",
      },
      {
        challengeId: 52,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/es/question-six/la-jirafa.mp3",
        correct: false,
        text: "la jirafa",
      },
    ])

    // Options Spanish "La jirafa"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 53,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/es/question-six/el-leon.mp3",
        correct: false,
        text: "el león",
      },
      {
        challengeId: 53,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/es/question-six/el-pez.mp3",
        correct: false,
        text: "el pez",
      },
      {
        challengeId: 53,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/es/question-six/la-jirafa.mp3",
        correct: true,
        text: "la jirafa",
      },
    ])

    // Options Spanish "The león"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 54,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/es/question-six/el-leon.mp3",
        correct: true,
        text: "el león",
      },
      {
        challengeId: 54,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/es/question-six/el-pez.mp3",
        correct: false,
        text: "el pez",
      },
      {
        challengeId: 54,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/es/question-six/la-jirafa.mp3",
        correct: false,
        text: "la jirafa",
      },
    ])
    



    // Challenges Spanish "Quiero café"
    await db.insert(schema.challenges).values([
      {
        id: 55,
        order: 55,
        lessonId: 19,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero café"?',
      },
      {
        id: 56,
        order: 56,
        lessonId: 19,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero leite"',
      },
      {
        id: 57,
        order: 57,
        lessonId: 19,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero água"?',
      },
    ])

    // Options Spanish "Quiero café"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 55,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/es/question-seven/quiero-leche.mp3",
        correct: false,
        text: "quiero leche",
      },
      {
        challengeId: 55,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/es/question-seven/quiero-cafe.mp3",
        correct: true,
        text: "quiero cafe",
      },
      {
        challengeId: 55,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/es/question-seven/quiero-agua.mp3",
        correct: false,
        text: "quiero agua",
      },
    ])

    // Options Spanish "Quiero leche"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 56,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/es/question-seven/quiero-leche.mp3",
        correct: true,
        text: "quiero leche",
      },
      {
        challengeId: 56,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/es/question-seven/quiero-cafe.mp3",
        correct: false,
        text: "quiero cafe",
      },
      {
        challengeId: 56,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/es/question-seven/quiero-agua.mp3",
        correct: false,
        text: "quiero agua",
      },
    ])

    // Options Spanish "Quiero agua"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 57,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/es/question-seven/quiero-leche.mp3",
        correct: false,
        text: "quiero leche",
      },
      {
        challengeId: 57,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/es/question-seven/quiero-cafe.mp3",
        correct: false,
        text: "quiero cafe",
      },
      {
        challengeId: 57,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/es/question-seven/quiero-agua.mp3",
        correct: true,
        text: "quiero agua",
      },
    ])




    // Challenges Spanish "El pan"
    await db.insert(schema.challenges).values([
      {
        id: 58,
        order: 58,
        lessonId: 20,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pão"?',
      },
      {
        id: 59,
        order: 59,
        lessonId: 20,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o queijo"',
      },
      {
        id: 60,
        order: 60,
        lessonId: 20,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a panqueca"?',
      },
    ])

    // Options Spanish "El pan"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 58,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/es/question-eight/el-queso.mp3",
        correct: false,
        text: "el queso",
      },
      {
        challengeId: 58,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/es/question-eight/el-pan.mp3",
        correct: true,
        text: "el pan",
      },
      {
        challengeId: 58,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/es/question-eight/el-panqueque.mp3",
        correct: false,
        text: "el panqueque",
      },
    ])

    // Options Spanish "El queso"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 59,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/es/question-eight/el-queso.mp3",
        correct: true,
        text: "el queso",
      },
      {
        challengeId: 59,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/es/question-eight/el-pan.mp3",
        correct: false,
        text: "el pan",
      },
      {
        challengeId: 59,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/es/question-eight/el-panqueque.mp3",
        correct: false,
        text: "el panqueque",
      },
    ])

    // Options Spanish "El panqueque"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 60,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/es/question-eight/el-queso.mp3",
        correct: false,
        text: "el queso",
      },
      {
        challengeId: 60,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/es/question-eight/el-pan.mp3",
        correct: false,
        text: "el pan",
      },
      {
        challengeId: 60,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/es/question-eight/el-panqueque.mp3",
        correct: true,
        text: "el panqueque",
      },
    ])





    // Challenges Spanish "La torta"
    await db.insert(schema.challenges).values([
      {
        id: 61,
        order: 61,
        lessonId: 21,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bolo"?',
      },
      {
        id: 62,
        order: 62,
        lessonId: 21,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "os biscoitos"',
      },
      {
        id: 63,
        order: 63,
        lessonId: 21,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o hambúrguer"?',
      },
    ])

    // Options Spanish "La torta"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 61,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/es/question-nine/las-galletas.mp3",
        correct: false,
        text: "las galletas",
      },
      {
        challengeId: 61,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/es/question-nine/la-torta.mp3",
        correct: true,
        text: "la torta",
      },
      {
        challengeId: 61,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/es/question-nine/la-hamburguesa.mp3",
        correct: false,
        text: "la hamburguesa",
      },
    ])

    // Options Spanish "Las galletas"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 62,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/es/question-nine/las-galletas.mp3",
        correct: true,
        text: "las galletas",
      },
      {
        challengeId: 62,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/es/question-nine/la-torta.mp3",
        correct: false,
        text: "la torta",
      },
      {
        challengeId: 62,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/es/question-nine/la-hamburguesa.mp3",
        correct: false,
        text: "la hamburguesa",
      },
    ])

    // Options Spanish "La hamburguesa"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 63,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/es/question-nine/las-galletas.mp3",
        correct: false,
        text: "las galletas",
      },
      {
        challengeId: 63,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/es/question-nine/la-torta.mp3",
        correct: false,
        text: "la torta",
      },
      {
        challengeId: 63,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/es/question-nine/la-hamburguesa.mp3",
        correct: true,
        text: "la hamburguesa",
      },
    ])




    // Challenges Spanish "El sofá"
    await db.insert(schema.challenges).values([
      {
        id: 64,
        order: 64,
        lessonId: 22,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sofá"?',
      },
      {
        id: 65,
        order: 65,
        lessonId: 22,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cama"',
      },
      {
        id: 66,
        order: 66,
        lessonId: 22,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cadeira"?',
      },
    ])

    // Options Spanish "El sofá"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 64,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/es/question-ten/la-cama.mp3",
        correct: false,
        text: "la cama",
      },
      {
        challengeId: 64,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/es/question-ten/el-sofa.mp3",
        correct: true,
        text: "el sofa",
      },
      {
        challengeId: 64,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/es/question-ten/la-cadera.mp3",
        correct: false,
        text: "la cadera",
      },
    ])

    // Options Spanish "La cama"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 65,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/es/question-ten/la-cama.mp3",
        correct: true,
        text: "la cama",
      },
      {
        challengeId: 65,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/es/question-ten/el-sofa.mp3",
        correct: false,
        text: "el sofa",
      },
      {
        challengeId: 65,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/es/question-ten/la-cadera.mp3",
        correct: false,
        text: "la cadera",
      },
    ])

    // Options Spanish "La cadera"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 66,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/es/question-ten/la-cama.mp3",
        correct: false,
        text: "la cama",
      },
      {
        challengeId: 66,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/es/question-ten/el-sofa.mp3",
        correct: false,
        text: "el sofa",
      },
      {
        challengeId: 66,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/es/question-ten/la-cadera.mp3",
        correct: true,
        text: "la cadera",
      },
    ])




    // Challenges Spanish "La lampara"
    await db.insert(schema.challenges).values([
      {
        id: 67,
        order: 67,
        lessonId: 23,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o abajur"?',
      },
      {
        id: 68,
        order: 68,
        lessonId: 23,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lustre"',
      },
      {
        id: 69,
        order: 69,
        lessonId: 23,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lampião"?',
      },
    ])

    // Options Spanish "La lampara"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 67,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/es/question-eleven/el-candelabro.mp3",
        correct: false,
        text: "el candelabro",
      },
      {
        challengeId: 67,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/es/question-eleven/la-lampara.mp3",
        correct: true,
        text: "la lampara",
      },
      {
        challengeId: 67,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/es/question-eleven/la-lampara-de-fuego.mp3",
        correct: false,
        text: "la lampara de fuego",
      },
    ])

    // Options Spanish "El candelabro"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 68,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/es/question-eleven/el-candelabro.mp3",
        correct: true,
        text: "el candelabro",
      },
      {
        challengeId: 68,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/es/question-eleven/la-lampara.mp3",
        correct: false,
        text: "la lampara",
      },
      {
        challengeId: 68,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/es/question-eleven/la-lampara-de-fuego.mp3",
        correct: false,
        text: "la lampara de fuego",
      },
    ])

    // Options Spanish "La lampara de fuego"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 69,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/es/question-eleven/el-candelabro.mp3",
        correct: false,
        text: "el candelabro",
      },
      {
        challengeId: 69,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/es/question-eleven/la-lampara.mp3",
        correct: false,
        text: "la lampara",
      },
      {
        challengeId: 69,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/es/question-eleven/la-lampara-de-fuego.mp3",
        correct: true,
        text: "la lampara de fuego",
      },
    ])




    // Challenges Spanish "La ducha"
    await db.insert(schema.challenges).values([
      {
        id: 70,
        order: 70,
        lessonId: 24,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o chuveiro"?',
      },
      {
        id: 71,
        order: 71,
        lessonId: 24,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a pia"',
      },
      {
        id: 72,
        order: 72,
        lessonId: 24,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o espelho"?',
      },
    ])

    // Options Spanish "La ducha"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 70,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/es/question-twelve/el-lavabo.mp3",
        correct: false,
        text: "el lavabo",
      },
      {
        challengeId: 70,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/es/question-twelve/la-ducha.mp3",
        correct: true,
        text: "la ducha",
      },
      {
        challengeId: 70,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/es/question-twelve/el-espejo.mp3",
        correct: false,
        text: "el espejo",
      },
    ])

    // Options Spanish "El lavabo"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 71,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/es/question-twelve/el-lavabo.mp3",
        correct: true,
        text: "el lavabo",
      },
      {
        challengeId: 71,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/es/question-twelve/la-ducha.mp3",
        correct: false,
        text: "la ducha",
      },
      {
        challengeId: 71,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/es/question-twelve/el-espejo.mp3",
        correct: false,
        text: "el espejo",
      },
    ])

    // Options Spanish "El espejo"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 72,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/es/question-twelve/el-lavabo.mp3",
        correct: false,
        text: "el lavabo",
      },
      {
        challengeId: 72,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/es/question-twelve/la-ducha.mp3",
        correct: false,
        text: "la ducha",
      },
      {
        challengeId: 72,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/es/question-twelve/el-espejo.mp3",
        correct: true,
        text: "el espejo",
      },
    ])


    // French


    // Challenges French "El hombre"
    await db.insert(schema.challenges).values([
      {
        id: 73,
        order: 73,
        lessonId: 25,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o homem"?',
      },
      {
        id: 74,
        order: 74,
        lessonId: 25,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a mulher"',
      },
      {
        id: 75,
        order: 75,
        lessonId: 25,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a criança"?',
      },
    ])

    // Options French "L-homme"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 73,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/fra/question-one/la-femme",
        correct: false,
        text: "la femme",
      },
      {
        challengeId: 73,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-one/l-enfant",
        correct: false,
        text: "l'enfant",
      },
      {
        challengeId: 73,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/fra/question-one/l-homme.mp3",
        correct: true,
        text: "l'homme",
      },
    ])  

    // Options French "La femme"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 74,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/fra/question-one/la-femme",
        correct: true,
        text: "la femme",
      },
      {
        challengeId: 74,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-one/l-enfant",
        correct: false,
        text: "l'enfant",
      },
      {
        challengeId: 74,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/fra/question-one/l-homme.mp3",
        correct: false,
        text: "l'homme",
      },
    ]);

    // Options French "L-enfant"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 75,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/fra/question-one/la-femme",
        correct: false,
        text: "la femme",
      },
      {
        challengeId: 75,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-one/l-enfant",
        correct: true,
        text: "l'enfant",
      },
      {
        challengeId: 75,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/fra/question-one/l-homme.mp3",
        correct: false,
        text: "l'homme",
      },
    ]);

    



    // Challenges French "Le jeune"
    await db.insert(schema.challenges).values([
      {
        id: 76,
        order: 76,
        lessonId: 26,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bebê"?',
      },
      {
        id: 77,
        order: 77,
        lessonId: 26,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adolescente"',
      },
      {
        id: 78,
        order: 78,
        lessonId: 26,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adulta"?',
      },
    ])

    // Options French "Le bébé"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 76,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/fra/question-two/l-adolescent.mp3",
        correct: false,
        text: "l'adolescent",
      },
      {
        challengeId: 76,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-two/le-bebe.mp3",
        correct: true,
        text: "le bébé",
      },
      {
        challengeId: 76,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/fra/question-two/l-adult.mp3",
        correct: false,
        text: "l'adult",
      },
    ])

    // Options French "L'adolescent"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 77,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/fra/question-two/l-adolescent.mp3",
        correct: true,
        text: "l'adolescent",
      },
      {
        challengeId: 77,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-two/le-bebe.mp3",
        correct: false,
        text: "le bébé",
      },
      {
        challengeId: 77,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/fra/question-two/l-adult.mp3",
        correct: false,
        text: "l'adult",
      },
    ])

    // Options French "L'adult"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 78,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/fra/question-two/l-adolescent.mp3",
        correct: false,
        text: "l'adolescent",
      },
      {
        challengeId: 78,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-two/le-bebe.mp3",
        correct: false,
        text: "le bébé",
      },
      {
        challengeId: 78,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/fra/question-two/l-adult.mp3",
        correct: true,
        text: "l'adult",
      },
    ])





    // Challenges French "La grand-mère"
    await db.insert(schema.challenges).values([
      {
        id: 79,
        order: 79,
        lessonId: 27,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o filho"?',
      },
      {
        id: 80,
        order: 80,
        lessonId: 27,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pai"',
      },
      {
        id: 81,
        order: 81,
        lessonId: 27,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a avó"?',
      },
    ])

    // Options French "Le fils"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 79,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/fra/question-three/le-pere.mp3",
        correct: false,
        text: "le père",
      },
      {
        challengeId: 79,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-three/le-fils.mp3",
        correct: true,
        text: "le-fils",
      },
      {
        challengeId: 79,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/fra/question-three/la-grand-mere.mp3",
        correct: false,
        text: "la grand-mère",
      },
    ])

    // Options French "le père"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 80,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/fra/question-three/le-pere.mp3",
        correct: true,
        text: "le père",
      },
      {
        challengeId: 80,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-three/le-fils.mp3",
        correct: false,
        text: "le-fils",
      },
      {
        challengeId: 80,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/fra/question-three/la-grand-mere.mp3",
        correct: false,
        text: "la grand-mère",
      },
    ])

    // Options French "La grand-mère"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 81,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/fra/question-three/le-pere.mp3",
        correct: false,
        text: "le père",
      },
      {
        challengeId: 81,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/fra/question-three/le-fils.mp3",
        correct: false,
        text: "le-fils",
      },
      {
        challengeId: 81,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/fra/question-three/la-grand-mere.mp3",
        correct: true,
        text: "la grand-mère",
      },
    ])





    // Challenges French "Le chien"
    await db.insert(schema.challenges).values([
      {
        id: 82,
        order: 82,
        lessonId: 28,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o cachorro"?',
      },
      {
        id: 83,
        order: 83,
        lessonId: 28,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o macaco"',
      },
      {
        id: 84,
        order: 84,
        lessonId: 28,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a urso"?',
      },
    ])

    // Options French "Le chien"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 82,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/fra/question-four/l-ours.mp3",
        correct: false,
        text: "l'ours",
      },
      {
        challengeId: 82,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/fra/question-four/le-singe.mp3",
        correct: false,
        text: "le singe",
      },
      {
        challengeId: 82,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/fra/question-four/le-chien.mp3",
        correct: true,
        text: "le chien",
      },
    ])

    // Options French "El mono"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 83,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/fra/question-four/l-ours.mp3",
        correct: false,
        text: "l'ours",
      },
      {
        challengeId: 83,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/fra/question-four/le-singe.mp3",
        correct: true,
        text: "le singe",
      },
      {
        challengeId: 83,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/fra/question-four/le-chien.mp3",
        correct: false,
        text: "le chien",
      },
    ])

    // Options French "L'ours"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 84,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/fra/question-four/l-ours.mp3",
        correct: true,
        text: "l'ours",
      },
      {
        challengeId: 84,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/fra/question-four/le-singe.mp3",
        correct: false,
        text: "le singe",
      },
      {
        challengeId: 84,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/fra/question-four/le-chien.mp3",
        correct: false,
        text: "le chien",
      },
    ])




    // Challenges French "Le chat"
    await db.insert(schema.challenges).values([
      {
        id: 85,
        order: 85,
        lessonId: 29,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o gato"?',
      },
      {
        id: 86,
        order: 86,
        lessonId: 29,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sapo"',
      },
      {
        id: 87,
        order: 87,
        lessonId: 29,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o coelho"?',
      },
    ])

    // Options French "Le chat"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 85,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/fra/question-five/la-grenouille.mp3",
        correct: false,
        text: "la grenouille",
      },
      {
        challengeId: 85,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/fra/question-five/le-lapin.mp3",
        correct: false,
        text: "le lapin",
      },
      {
        challengeId: 85,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/fra/question-five/le-chat.mp3",
        correct: true,
        text: "le chat",
      },
    ])

    // Options French "La grenouille"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 86,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/fra/question-five/la-grenouille.mp3",
        correct: true,
        text: "la grenouille",
      },
      {
        challengeId: 86,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/fra/question-five/le-lapin.mp3",
        correct: false,
        text: "le lapin",
      },
      {
        challengeId: 86,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/fra/question-five/le-chat.mp3",
        correct: false,
        text: "le chat",
      },
    ])

    // Options French "Le lapin"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 87,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/fra/question-five/la-grenouille.mp3",
        correct: false,
        text: "la grenouille",
      },
      {
        challengeId: 87,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/fra/question-five/le-lapin.mp3",
        correct: true,
        text: "le lapin",
      },
      {
        challengeId: 87,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/fra/question-five/le-chat.mp3",
        correct: false,
        text: "le chat",
      },
    ])




    // Challenges French "Le poisson"
    await db.insert(schema.challenges).values([
      {
        id: 88,
        order: 88,
        lessonId: 30,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o peixe"?',
      },
      {
        id: 89,
        order: 89,
        lessonId: 30,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a girafa"',
      },
      {
        id: 90,
        order: 90,
        lessonId: 30,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o leão"?',
      },
    ])

    // Options French "Le poisson"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 88,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/fra/question-six/le-lion.mp3",
        correct: false,
        text: "le lion",
      },
      {
        challengeId: 88,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/fra/question-six/le-poisson.mp3",
        correct: true,
        text: "le poisson",
      },
      {
        challengeId: 88,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/fra/question-six/la-girafe.mp3",
        correct: false,
        text: "la-girafe",
      },
    ])

    // Options French "La girafe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 89,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/fra/question-six/le-lion.mp3",
        correct: false,
        text: "le lion",
      },
      {
        challengeId: 89,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/fra/question-six/le-poisson.mp3",
        correct: false,
        text: "le poisson",
      },
      {
        challengeId: 89,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/fra/question-six/la-girafe.mp3",
        correct: true,
        text: "la-girafe",
      },
    ])

    // Options French "Le lion"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 90,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/fra/question-six/le-lion.mp3",
        correct: true,
        text: "le lion",
      },
      {
        challengeId: 90,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/fra/question-six/le-poisson.mp3",
        correct: false,
        text: "le poisson",
      },
      {
        challengeId: 90,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/fra/question-six/la-girafe.mp3",
        correct: false,
        text: "la-girafe",
      },
    ])
    



    // Challenges French "Je veux du cafe"
    await db.insert(schema.challenges).values([
      {
        id: 91,
        order: 91,
        lessonId: 31,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero café"?',
      },
      {
        id: 92,
        order: 92,
        lessonId: 31,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero leite"',
      },
      {
        id: 93,
        order: 93,
        lessonId: 31,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero água"?',
      },
    ])

    // Options French "Je veux du cafe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 91,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-lait.mp3",
        correct: false,
        text: "je veux du lait",
      },
      {
        challengeId: 91,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-cafe.mp3",
        correct: true,
        text: "je veux du cafe",
      },
      {
        challengeId: 91,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-leau.mp3",
        correct: false,
        text: "je veux du leau",
      },
    ])

    // Options French "Je veux du lait"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 92,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-lait.mp3",
        correct: true,
        text: "je veux du lait",
      },
      {
        challengeId: 92,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-cafe.mp3",
        correct: false,
        text: "je veux du cafe",
      },
      {
        challengeId: 92,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-leau.mp3",
        correct: false,
        text: "je veux du leau",
      },
    ])

    // Options French "Je veux du leau"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 93,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-lait.mp3",
        correct: false,
        text: "je veux du lait",
      },
      {
        challengeId: 93,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-cafe.mp3",
        correct: false,
        text: "je veux du cafe",
      },
      {
        challengeId: 93,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/fra/question-seven/je-veux-du-leau.mp3",
        correct: true,
        text: "je veux du leau",
      },
    ])




    // Challenges French "Le pain"
    await db.insert(schema.challenges).values([
      {
        id: 94,
        order: 94,
        lessonId: 32,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pão"?',
      },
      {
        id: 95,
        order: 95,
        lessonId: 32,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o queijo"',
      },
      {
        id: 96,
        order: 96,
        lessonId: 32,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a panqueca"?',
      },
    ])

    // Options French "Le pain"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 94,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/fra/question-eight/le-fromage.mp3",
        correct: false,
        text: "le fromage",
      },
      {
        challengeId: 94,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/fra/question-eight/le-pain.mp3",
        correct: true,
        text: "le pain",
      },
      {
        challengeId: 94,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/fra/question-eight/le-crepe.mp3",
        correct: false,
        text: "le crêpe",
      },
    ])

    // Options French "Le fromage"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 95,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/fra/question-eight/le-fromage.mp3",
        correct: true,
        text: "le fromage",
      },
      {
        challengeId: 95,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/fra/question-eight/le-pain.mp3",
        correct: false,
        text: "le pain",
      },
      {
        challengeId: 95,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/fra/question-eight/le-crepe.mp3",
        correct: false,
        text: "le crêpe",
      },
    ])

    // Options French "Le crêpe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 96,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/fra/question-eight/le-fromage.mp3",
        correct: false,
        text: "le fromage",
      },
      {
        challengeId: 96,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/fra/question-eight/le-pain.mp3",
        correct: false,
        text: "le pain",
      },
      {
        challengeId: 96,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/fra/question-eight/le-crepe.mp3",
        correct: true,
        text: "le crêpe",
      },
    ])





    // Challenges French "Le gâteau"
    await db.insert(schema.challenges).values([
      {
        id: 97,
        order: 97,
        lessonId: 33,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bolo"?',
      },
      {
        id: 98,
        order: 98,
        lessonId: 33,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "os biscoitos"',
      },
      {
        id: 99,
        order: 99,
        lessonId: 33,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o hambúrguer"?',
      },
    ])

    // Options French "Le gâteau"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 97,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/fra/question-nine/les-cookies.mp3",
        correct: false,
        text: "les cookies",
      },
      {
        challengeId: 97,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/fra/question-nine/le-gateau.mp3",
        correct: true,
        text: "le gâteau",
      },
      {
        challengeId: 97,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/fra/question-nine/l-hamburger.mp3",
        correct: false,
        text: "l'hamburger",
      },
    ])

    // Options French "Les cookies"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 98,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/fra/question-nine/les-cookies.mp3",
        correct: true,
        text: "les cookies",
      },
      {
        challengeId: 98,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/fra/question-nine/le-gateau.mp3",
        correct: false,
        text: "le gâteau",
      },
      {
        challengeId: 98,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/fra/question-nine/l-hamburger.mp3",
        correct: false,
        text: "l'hamburger",
      },
    ])

    // Options French "L'hamburger"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 99,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/fra/question-nine/les-cookies.mp3",
        correct: false,
        text: "les cookies",
      },
      {
        challengeId: 99,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/fra/question-nine/le-gateau.mp3",
        correct: false,
        text: "le gâteau",
      },
      {
        challengeId: 99,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/fra/question-nine/l-hamburger.mp3",
        correct: true,
        text: "l'hamburger",
      },
    ])




    // Challenges French "Le canapé"
    await db.insert(schema.challenges).values([
      {
        id: 100,
        order: 100,
        lessonId: 34,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sofá"?',
      },
      {
        id: 101,
        order: 101,
        lessonId: 34,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cama"',
      },
      {
        id: 102,
        order: 102,
        lessonId: 34,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cadeira"?',
      },
    ])

    // Options French "Le canapé"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 100,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/fra/question-ten/le-lit.mp3",
        correct: false,
        text: "le lit",
      },
      {
        challengeId: 100,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/fra/question-ten/le-canape.mp3",
        correct: true,
        text: "le canapé",
      },
      {
        challengeId: 100,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/fra/question-ten/la-chaise.mp3",
        correct: false,
        text: "la chaise",
      },
    ])

    // Options French "Le lit"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 101,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/fra/question-ten/le-lit.mp3",
        correct: true,
        text: "le lit",
      },
      {
        challengeId: 101,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/fra/question-ten/le-canape.mp3",
        correct: false,
        text: "le canapé",
      },
      {
        challengeId: 101,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/fra/question-ten/la-chaise.mp3",
        correct: false,
        text: "la chaise",
      },
    ])

    // Options French "La chaise"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 102,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/fra/question-ten/le-lit.mp3",
        correct: false,
        text: "le lit",
      },
      {
        challengeId: 102,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/fra/question-ten/le-canape.mp3",
        correct: false,
        text: "le canapé",
      },
      {
        challengeId: 102,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/fra/question-ten/la-chaise.mp3",
        correct: true,
        text: "la chaise",
      },
    ])




    // Challenges French "La lampe"
    await db.insert(schema.challenges).values([
      {
        id: 103,
        order: 103,
        lessonId: 35,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o abajur"?',
      },
      {
        id: 104,
        order: 104,
        lessonId: 35,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lustre"',
      },
      {
        id: 105,
        order: 105,
        lessonId: 35,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lampião"?',
      },
    ])

    // Options French "La lampe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 103,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/fra/question-eleven/le-lustre.mp3",
        correct: false,
        text: "le lustre",
      },
      {
        challengeId: 103,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/fra/question-eleven/la-lampe.mp3",
        correct: true,
        text: "la lampe",
      },
      {
        challengeId: 103,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/fra/question-eleven/la-lampe-a-feu.mp3",
        correct: false,
        text: "la lampe à feu",
      },
    ])

    // Options French "Le lustre"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 104,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/fra/question-eleven/le-lustre.mp3",
        correct: true,
        text: "le lustre",
      },
      {
        challengeId: 104,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/fra/question-eleven/la-lampe.mp3",
        correct: false,
        text: "la lampe",
      },
      {
        challengeId: 104,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/fra/question-eleven/la-lampe-a-feu.mp3",
        correct: false,
        text: "la lampe à feu",
      },
    ])

    // Options French "la lampe à feu"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 105,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/fra/question-eleven/le-lustre.mp3",
        correct: false,
        text: "le lustre",
      },
      {
        challengeId: 105,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/fra/question-eleven/la-lampe.mp3",
        correct: false,
        text: "la lampe",
      },
      {
        challengeId: 105,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/fra/question-eleven/la-lampe-a-feu.mp3",
        correct: true,
        text: "la lampe à feu",
      },
    ])




    // Challenges French "La douche"
    await db.insert(schema.challenges).values([
      {
        id: 106,
        order: 106,
        lessonId: 36,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o chuveiro"?',
      },
      {
        id: 107,
        order: 107,
        lessonId: 36,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a pia"',
      },
      {
        id: 108,
        order: 108,
        lessonId: 36,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o espelho"?',
      },
    ])

    // Options French "La douche"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 106,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/fra/question-twelve/le-lavabo.mp3",
        correct: false,
        text: "le lavabo",
      },
      {
        challengeId: 106,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/fra/question-twelve/la-douche.mp3",
        correct: true,
        text: "la douche",
      },
      {
        challengeId: 106,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/fra/question-twelve/le-miroir.mp3",
        correct: false,
        text: "le miroir",
      },
    ])

    // Options French "Le lavabo"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 107,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/fra/question-twelve/le-lavabo.mp3",
        correct: true,
        text: "le lavabo",
      },
      {
        challengeId: 107,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/fra/question-twelve/la-douche.mp3",
        correct: false,
        text: "la douche",
      },
      {
        challengeId: 107,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/fra/question-twelve/le-miroir.mp3",
        correct: false,
        text: "le miroir",
      },
    ])

    // Options French "Le miroir"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 108,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/fra/question-twelve/le-lavabo.mp3",
        correct: false,
        text: "le lavabo",
      },
      {
        challengeId: 108,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/fra/question-twelve/la-douche.mp3",
        correct: false,
        text: "la douche",
      },
      {
        challengeId: 108,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/fra/question-twelve/le-miroir.mp3",
        correct: true,
        text: "le miroir",
      },
    ])


    
    // Italian


    // Challenges Italian "El hombre"
    await db.insert(schema.challenges).values([
      {
        id: 109,
        order: 109,
        lessonId: 37,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o homem"?',
      },
      {
        id: 110,
        order: 110,
        lessonId: 37,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a mulher"',
      },
      {
        id: 111,
        order: 111,
        lessonId: 37,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a criança"?',
      },
    ])

    // Options Italian "L-homme"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 109,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/ita/question-one/moglie.mp3",
        correct: false,
        text: "moglie",
      },
      {
        challengeId: 109,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-one/il-bambino.mp3",
        correct: false,
        text: "il bambino",
      },
      {
        challengeId: 109,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/ita/question-one/l-uomo.mp3",
        correct: true,
        text: "l'uomo",
      },
    ])  

    // Options Italian "La femme"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 110,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/ita/question-one/moglie.mp3",
        correct: true,
        text: "moglie",
      },
      {
        challengeId: 110,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-one/il-bambino.mp3",
        correct: false,
        text: "il bambino",
      },
      {
        challengeId: 110,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/ita/question-one/l-uomo.mp3",
        correct: false,
        text: "l'uomo",
      },
    ]);

    // Options Italian "L-enfant"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 111,
        imageSrc: "/svg/woman.svg",
        audioSrc: "/audios/ita/question-one/moglie.mp3",
        correct: false,
        text: "moglie",
      },
      {
        challengeId: 111,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-one/il-bambino.mp3",
        correct: true,
        text: "il bambino",
      },
      {
        challengeId: 111,
        imageSrc: "/svg/man.svg",
        audioSrc: "/audios/ita/question-one/l-uomo.mp3",
        correct: false,
        text: "l'uomo",
      },
    ]);

    



    // Challenges Italian "Il giovane"
    await db.insert(schema.challenges).values([
      {
        id: 112,
        order: 112,
        lessonId: 38,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bebê"?',
      },
      {
        id: 113,
        order: 113,
        lessonId: 38,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adolescente"',
      },
      {
        id: 114,
        order: 114,
        lessonId: 38,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a adulta"?',
      },
    ])

    // Options Italian "Il bambino"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 112,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/ita/question-two/l-adolescente.mp3",
        correct: false,
        text: "l'adolescente",
      },
      {
        challengeId: 112,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-two/il-bambino.mp3",
        correct: true,
        text: "il bambino",
      },
      {
        challengeId: 112,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/ita/question-two/l-adulto.mp3",
        correct: false,
        text: "l'adulto",
      },
    ])

    // Options Italian "L'adolescente"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 113,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/ita/question-two/l-adolescente.mp3",
        correct: true,
        text: "l'adolescente",
      },
      {
        challengeId: 113,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-two/il-bambino.mp3",
        correct: false,
        text: "il bambino",
      },
      {
        challengeId: 113,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/ita/question-two/l-adulto.mp3",
        correct: false,
        text: "l'adulto",
      },
    ])

    // Options Italian "L'adulto"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 114,
        imageSrc: "/svg/teenager.svg",
        audioSrc: "/audios/ita/question-two/l-adolescente.mp3",
        correct: false,
        text: "l'adolescente",
      },
      {
        challengeId: 114,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-two/il-bambino.mp3",
        correct: false,
        text: "il bambino",
      },
      {
        challengeId: 114,
        imageSrc: "/svg/adult.svg",
        audioSrc: "/audios/ita/question-two/l-adulto.mp3",
        correct: true,
        text: "l'adulto",
      },
    ])





    // Challenges Italian "Nonna"
    await db.insert(schema.challenges).values([
      {
        id: 115,
        order: 115,
        lessonId: 39,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o filho"?',
      },
      {
        id: 116,
        order: 116,
        lessonId: 39,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pai"',
      },
      {
        id: 117,
        order: 117,
        lessonId: 39,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a avó"?',
      },
    ])

    // Options Italian "Il figlio"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 115,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/ita/question-three/il-padre.mp3",
        correct: false,
        text: "il padre",
      },
      {
        challengeId: 115,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-three/il-figlio.mp3",
        correct: true,
        text: "il figlio",
      },
      {
        challengeId: 115,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/ita/question-three/nonna.mp3",
        correct: false,
        text: "nonna",
      },
    ])

    // Options Italian "Il padre"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 116,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/ita/question-three/il-padre.mp3",
        correct: true,
        text: "il padre",
      },
      {
        challengeId: 116,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-three/il-figlio.mp3",
        correct: false,
        text: "il figlio",
      },
      {
        challengeId: 116,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/ita/question-three/nonna.mp3",
        correct: false,
        text: "nonna",
      },
    ])

    // Options Italian "Nonna"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 117,
        imageSrc: "/svg/father.svg",
        audioSrc: "/audios/ita/question-three/il-padre.mp3",
        correct: false,
        text: "il padre",
      },
      {
        challengeId: 117,
        imageSrc: "/svg/son.svg",
        audioSrc: "/audios/ita/question-three/il-figlio.mp3",
        correct: false,
        text: "il figlio",
      },
      {
        challengeId: 117,
        imageSrc: "/svg/grandma.svg",
        audioSrc: "/audios/ita/question-three/nonna.mp3",
        correct: true,
        text: "nonna",
      },
    ])





    // Challenges Italian "Il cane"
    await db.insert(schema.challenges).values([
      {
        id: 118,
        order: 118,
        lessonId: 40,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o cachorro"?',
      },
      {
        id: 119,
        order: 119,
        lessonId: 40,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o macaco"',
      },
      {
        id: 120,
        order: 120,
        lessonId: 40,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a urso"?',
      },
    ])

    // Options Italian "Il cane"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 118,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/ita/question-four/l-orso.mp3",
        correct: false,
        text: "l'orso",
      },
      {
        challengeId: 118,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/ita/question-four/le-scimmia.mp3",
        correct: false,
        text: "le scimmia",
      },
      {
        challengeId: 118,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/ita/question-four/il-cane.mp3",
        correct: true,
        text: "il cane",
      },
    ])

    // Options Italian "La scimmia"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 119,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/ita/question-four/l-orso.mp3",
        correct: false,
        text: "l'orso",
      },
      {
        challengeId: 119,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/ita/question-four/le-scimmia.mp3",
        correct: true,
        text: "le scimmia",
      },
      {
        challengeId: 119,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/ita/question-four/il-cane.mp3",
        correct: false,
        text: "il cane",
      },
    ])

    // Options Italian "L'orso"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 120,
        imageSrc: "/svg/bear.svg",
        audioSrc: "/audios/ita/question-four/l-orso.mp3",
        correct: true,
        text: "l'orso",
      },
      {
        challengeId: 120,
        imageSrc: "/svg/monkey.svg",
        audioSrc: "/audios/ita/question-four/le-scimmia.mp3",
        correct: false,
        text: "le scimmia",
      },
      {
        challengeId: 120,
        imageSrc: "/svg/dog.svg",
        audioSrc: "/audios/ita/question-four/il-cane.mp3",
        correct: false,
        text: "il cane",
      },
    ])




    // Challenges Italian "Gatto"
    await db.insert(schema.challenges).values([
      {
        id: 121,
        order: 121,
        lessonId: 41,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o gato"?',
      },
      {
        id: 122,
        order: 122,
        lessonId: 41,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sapo"',
      },
      {
        id: 123,
        order: 123,
        lessonId: 41,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o coelho"?',
      },
    ])

    // Options Italian "Gatto"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 121,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/ita/question-five/rana.mp3",
        correct: false,
        text: "rana",
      },
      {
        challengeId: 121,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/ita/question-five/il-coniglio.mp3",
        correct: false,
        text: "il coniglio",
      },
      {
        challengeId: 121,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/ita/question-five/gatto.mp3",
        correct: true,
        text: "gatto",
      },
    ])

    // Options Italian "Rana"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 122,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/ita/question-five/rana.mp3",
        correct: true,
        text: "rana",
      },
      {
        challengeId: 122,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/ita/question-five/il-coniglio.mp3",
        correct: false,
        text: "il coniglio",
      },
      {
        challengeId: 122,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/ita/question-five/gatto.mp3",
        correct: false,
        text: "gatto",
      },
    ])

    // Options Italian "Il coniglio"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 123,
        imageSrc: "/svg/frog.svg",
        audioSrc: "/audios/ita/question-five/rana.mp3",
        correct: false,
        text: "rana",
      },
      {
        challengeId: 123,
        imageSrc: "/svg/rabbit.svg",
        audioSrc: "/audios/ita/question-five/il-coniglio.mp3",
        correct: true,
        text: "il coniglio",
      },
      {
        challengeId: 123,
        imageSrc: "/svg/cat.svg",
        audioSrc: "/audios/ita/question-five/gatto.mp3",
        correct: false,
        text: "gatto",
      },
    ])




    // Challenges Italian "Pescare"
    await db.insert(schema.challenges).values([
      {
        id: 124,
        order: 124,
        lessonId: 42,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o peixe"?',
      },
      {
        id: 125,
        order: 125,
        lessonId: 42,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a girafa"',
      },
      {
        id: 126,
        order: 126,
        lessonId: 42,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o leão"?',
      },
    ])

    // Options Italian "Pescare"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 124,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/ita/question-six/leone.mp3",
        correct: false,
        text: "leone",
      },
      {
        challengeId: 124,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/ita/question-six/pescare.mp3",
        correct: true,
        text: "pescare",
      },
      {
        challengeId: 124,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/ita/question-six/la-girafe.mp3",
        correct: false,
        text: "la girafe",
      },
    ])

    // Options Italian "La girafe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 125,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/ita/question-six/leone.mp3",
        correct: false,
        text: "leone",
      },
      {
        challengeId: 125,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/ita/question-six/pescare.mp3",
        correct: false,
        text: "pescare",
      },
      {
        challengeId: 125,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/ita/question-six/la-girafe.mp3",
        correct: true,
        text: "la girafe",
      },
    ])

    // Options Italian "Leone"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 126,
        imageSrc: "/svg/lion.svg",
        audioSrc: "/audios/ita/question-six/leone.mp3",
        correct: true,
        text: "leone",
      },
      {
        challengeId: 126,
        imageSrc: "/svg/fish.svg",
        audioSrc: "/audios/ita/question-six/pescare.mp3",
        correct: false,
        text: "pescare",
      },
      {
        challengeId: 126,
        imageSrc: "/svg/giraffe.svg",
        audioSrc: "/audios/ita/question-six/la-girafe.mp3",
        correct: false,
        text: "la girafe",
      },
    ])
    



    // Challenges Italian "Voglio un caffè"
    await db.insert(schema.challenges).values([
      {
        id: 127,
        order: 127,
        lessonId: 43,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero café"?',
      },
      {
        id: 128,
        order: 128,
        lessonId: 43,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero leite"',
      },
      {
        id: 129,
        order: 129,
        lessonId: 43,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "eu quero água"?',
      },
    ])

    // Options Italian "Voglio un caffè"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 127,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/ita/question-seven/voglio-un-po-di-latte.mp3",
        correct: false,
        text: "voglio un po' di latte",
      },
      {
        challengeId: 127,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/ita/question-seven/voglio-un-caffe.mp3",
        correct: true,
        text: "voglio un caffè",
      },
      {
        challengeId: 127,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/ita/question-seven/voglio-dell-acqua.mp3",
        correct: false,
        text: "voglio dell'acqua",
      },
    ])

    // Options Italian "Voglio un po' di latte"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 128,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/ita/question-seven/voglio-un-po-di-latte.mp3",
        correct: true,
        text: "voglio un po' di latte",
      },
      {
        challengeId: 128,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/ita/question-seven/voglio-un-caffe.mp3",
        correct: false,
        text: "voglio un caffè",
      },
      {
        challengeId: 128,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/ita/question-seven/voglio-dell-acqua.mp3",
        correct: false,
        text: "voglio dell'acqua",
      },
    ])

    // Options Italian "Voglio dell'acqua"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 129,
        imageSrc: "/svg/milk.svg",
        audioSrc: "/audios/ita/question-seven/voglio-un-po-di-latte.mp3",
        correct: false,
        text: "voglio un po' di latte",
      },
      {
        challengeId: 129,
        imageSrc: "/svg/coffee.svg",
        audioSrc: "/audios/ita/question-seven/voglio-un-caffe.mp3",
        correct: false,
        text: "voglio un caffè",
      },
      {
        challengeId: 129,
        imageSrc: "/svg/water.svg",
        audioSrc: "/audios/ita/question-seven/voglio-dell-acqua.mp3",
        correct: true,
        text: "voglio dell'acqua",
      },
    ])



    // Challenges Italian "Pane"
    await db.insert(schema.challenges).values([
      {
        id: 130,
        order: 130,
        lessonId: 44,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o pão"?',
      },
      {
        id: 131,
        order: 131,
        lessonId: 44,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o queijo"',
      },
      {
        id: 132,
        order: 132,
        lessonId: 44,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a panqueca"?',
      },
    ])

    // Options Italian "Pane"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 130,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/ita/question-eight/formaggio.mp3",
        correct: false,
        text: "formaggio",
      },
      {
        challengeId: 130,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/ita/question-eight/pane.mp3",
        correct: true,
        text: "pane",
      },
      {
        challengeId: 130,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/ita/question-eight/la-crepe.mp3",
        correct: false,
        text: "la crêpe",
      },
    ])

    // Options Italian "Formaggio"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 131,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/ita/question-eight/formaggio.mp3",
        correct: true,
        text: "formaggio",
      },
      {
        challengeId: 131,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/ita/question-eight/pane.mp3",
        correct: false,
        text: "pane",
      },
      {
        challengeId: 131,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/ita/question-eight/la-crepe.mp3",
        correct: false,
        text: "la crêpe",
      },
    ])

    // Options Italian "La crêpe"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 132,
        imageSrc: "/svg/cheese.svg",
        audioSrc: "/audios/ita/question-eight/formaggio.mp3",
        correct: false,
        text: "formaggio",
      },
      {
        challengeId: 132,
        imageSrc: "/svg/bread.svg",
        audioSrc: "/audios/ita/question-eight/pane.mp3",
        correct: false,
        text: "pane",
      },
      {
        challengeId: 132,
        imageSrc: "/svg/pancake.svg",
        audioSrc: "/audios/ita/question-eight/la-crepe.mp3",
        correct: true,
        text: "la crêpe",
      },
    ])





    // Challenges Italian "La torta"
    await db.insert(schema.challenges).values([
      {
        id: 133,
        order: 133,
        lessonId: 45,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o bolo"?',
      },
      {
        id: 134,
        order: 134,
        lessonId: 45,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "os biscoitos"',
      },
      {
        id: 135,
        order: 135,
        lessonId: 45,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o hambúrguer"?',
      },
    ])

    // Options Italian "La torta"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 133,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/ita/question-nine/biscotti.mp3",
        correct: false,
        text: "biscotti",
      },
      {
        challengeId: 133,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/ita/question-nine/la-torta.mp3",
        correct: true,
        text: "la torta",
      },
      {
        challengeId: 133,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/ita/question-nine/l-hamburger.mp3",
        correct: false,
        text: "l'hamburger",
      },
    ])

    // Options Italian "Biscotti"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 134,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/ita/question-nine/biscotti.mp3",
        correct: true,
        text: "biscotti",
      },
      {
        challengeId: 134,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/ita/question-nine/la-torta.mp3",
        correct: false,
        text: "la torta",
      },
      {
        challengeId: 134,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/ita/question-nine/l-hamburger.mp3",
        correct: false,
        text: "l'hamburger",
      },
    ])

    // Options Italian "L'hamburger"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 135,
        imageSrc: "/svg/cookies.svg",
        audioSrc: "/audios/ita/question-nine/biscotti.mp3",
        correct: false,
        text: "biscotti",
      },
      {
        challengeId: 135,
        imageSrc: "/svg/cake.svg",
        audioSrc: "/audios/ita/question-nine/la-torta.mp3",
        correct: false,
        text: "la torta",
      },
      {
        challengeId: 135,
        imageSrc: "/svg/burguer.svg",
        audioSrc: "/audios/ita/question-nine/l-hamburger.mp3",
        correct: true,
        text: "l'hamburger",
      },
    ])




    // Challenges Italian "Il divano"
    await db.insert(schema.challenges).values([
      {
        id: 136,
        order: 136,
        lessonId: 46,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o sofá"?',
      },
      {
        id: 137,
        order: 137,
        lessonId: 46,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cama"',
      },
      {
        id: 138,
        order: 138,
        lessonId: 46,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a cadeira"?',
      },
    ])

    // Options Italian "Il divano"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 136,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/ita/question-ten/il-letto.mp3",
        correct: false,
        text: "il letto",
      },
      {
        challengeId: 136,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/ita/question-ten/il-divano.mp3",
        correct: true,
        text: "il divano",
      },
      {
        challengeId: 136,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/ita/question-ten/la-sedia.mp3",
        correct: false,
        text: "la sedia",
      },
    ])

    // Options Italian "Il letto"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 137,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/ita/question-ten/il-letto.mp3",
        correct: true,
        text: "il letto",
      },
      {
        challengeId: 137,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/ita/question-ten/il-divano.mp3",
        correct: false,
        text: "il divano",
      },
      {
        challengeId: 137,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/ita/question-ten/la-sedia.mp3",
        correct: false,
        text: "la sedia",
      },
    ])

    // Options Italian "La sedia"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 138,
        imageSrc: "/svg/bed.svg",
        audioSrc: "/audios/ita/question-ten/il-letto.mp3",
        correct: false,
        text: "il letto",
      },
      {
        challengeId: 138,
        imageSrc: "/svg/sofa.svg",
        audioSrc: "/audios/ita/question-ten/il-divano.mp3",
        correct: false,
        text: "il divano",
      },
      {
        challengeId: 138,
        imageSrc: "/svg/chair.svg",
        audioSrc: "/audios/ita/question-ten/la-sedia.mp3",
        correct: true,
        text: "la sedia",
      },
    ])




    // Challenges Italian "La lampada"
    await db.insert(schema.challenges).values([
      {
        id: 139,
        order: 139,
        lessonId: 47,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o abajur"?',
      },
      {
        id: 140,
        order: 140,
        lessonId: 47,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lustre"',
      },
      {
        id: 141,
        order: 141,
        lessonId: 47,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o lampião"?',
      },
    ])

    // Options Italian "La lampada"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 139,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/ita/question-eleven/il-lampadario.mp3",
        correct: false,
        text: "il lampadario",
      },
      {
        challengeId: 139,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/ita/question-eleven/la-lampada.mp3",
        correct: true,
        text: "la lampada",
      },
      {
        challengeId: 139,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/ita/question-eleven/la-lampada-a-fuoco.mp3",
        correct: false,
        text: "la lampada a fuoco",
      },
    ])

    // Options Italian "Il lampadario"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 140,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/ita/question-eleven/il-lampadario.mp3",
        correct: true,
        text: "il lampadario",
      },
      {
        challengeId: 140,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/ita/question-eleven/la-lampada.mp3",
        correct: false,
        text: "la lampada",
      },
      {
        challengeId: 140,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/ita/question-eleven/la-lampada-a-fuoco.mp3",
        correct: false,
        text: "la lampada a fuoco",
      },
    ])

    // Options Italian "La lampada a fuoco"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 141,
        imageSrc: "/svg/chandelier.svg",
        audioSrc: "/audios/ita/question-eleven/il-lampadario.mp3",
        correct: false,
        text: "il lampadario",
      },
      {
        challengeId: 141,
        imageSrc: "/svg/lamp.svg",
        audioSrc: "/audios/ita/question-eleven/la-lampada.mp3",
        correct: false,
        text: "la lampada",
      },
      {
        challengeId: 141,
        imageSrc: "/svg/lamp-oil.svg",
        audioSrc: "/audios/ita/question-eleven/la-lampada-a-fuoco.mp3",
        correct: true,
        text: "la lampada a fuoco",
      },
    ])




    // Challenges Italian "La doccia"
    await db.insert(schema.challenges).values([
      {
        id: 142,
        order: 142,
        lessonId: 48,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o chuveiro"?',
      },
      {
        id: 143,
        order: 143,
        lessonId: 48,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "a pia"',
      },
      {
        id: 144,
        order: 144,
        lessonId: 48,
        type: "SELECT",
        question: 'Qual destas opções corresponde a expressão "o espelho"?',
      },
    ])

    // Options Italian "La doccia"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 142,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/ita/question-twelve/il-lavandino.mp3",
        correct: false,
        text: "il lavandino",
      },
      {
        challengeId: 142,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/ita/question-twelve/la-doccia.mp3",
        correct: true,
        text: "la doccia",
      },
      {
        challengeId: 142,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/ita/question-twelve/lo-specchio.mp3",
        correct: false,
        text: "lo specchio",
      },
    ])

    // Options Italian "Il lavandino"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 143,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/ita/question-twelve/il-lavandino.mp3",
        correct: true,
        text: "il lavandino",
      },
      {
        challengeId: 143,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/ita/question-twelve/la-doccia.mp3",
        correct: false,
        text: "la doccia",
      },
      {
        challengeId: 143,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/ita/question-twelve/lo-specchio.mp3",
        correct: false,
        text: "lo specchio",
      },
    ])

    // Options Italian "Lo specchio"
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 144,
        imageSrc: "/svg/sink.svg",
        audioSrc: "/audios/ita/question-twelve/il-lavandino.mp3",
        correct: false,
        text: "il lavandino",
      },
      {
        challengeId: 144,
        imageSrc: "/svg/shower.svg",
        audioSrc: "/audios/ita/question-twelve/la-doccia.mp3",
        correct: false,
        text: "la doccia",
      },
      {
        challengeId: 144,
        imageSrc: "/svg/mirror.svg",
        audioSrc: "/audios/ita/question-twelve/lo-specchio.mp3",
        correct: true,
        text: "lo specchio",
      },
    ])

    console.log("Seeding finished.")
    } catch (error) {
      console.error(error)
      throw new Error("Failed to seed the database.")
    }
}

main()