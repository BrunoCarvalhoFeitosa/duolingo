import { Suspense } from "react"
import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import { Toaster } from "./_components/ui/sonner"
import { Loader } from "@/app/_components/common/globals/loader"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Duolingo - A melhor forma do mundo de aprender um idioma",
  description: "Duolingo, o melhor app para aprender todos os idiomas",
  authors: {
    name: "Bruno Carvalho Feitosa",
    url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
  },
  icons: {
    icon: "./favicon/favicon.ico",
    shortcut: "./favicon/favicon.ico"
  }
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ClerkProvider>
            <Suspense fallback={<Loader />}>
                <Toaster />
                {children}
            </Suspense>
        </ClerkProvider>
      </body>
    </html>
  )
}