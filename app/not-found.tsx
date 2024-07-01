import Link from "next/link"
import { Button } from "./_components/ui/button"
import { DuolingoMouthImageSvg } from "@/public/svgs/duolingo-mouth-image-svg"

const NotFoundPage = () => {
  return (
    <section className="relative p-5 w-full h-[100dvh] bg-lime-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="mx-auto w-3/4 flex justify-center items-center">
          <div className="mr-3 text-[80px] xl:text-[180px] leading-none font-extrabold text-lime-700">
            4
          </div>
          <div className="animate-[bounce_3s_infinite]">
            <DuolingoMouthImageSvg width="180" height="180" />
          </div>
          <div className="text-[80px] xl:text-[180px] leading-none font-extrabold text-lime-700">
            4
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full">
        <div className="p-5 w-80 md:w-96">
          <h1 className="text-base xl:text-xl font-bold leading-none">
            Página não encontrada
          </h1>
          <p className="mb-1 text-sm">
            A página que você procurava não existe.
          </p>
          <Link href="/">
            <Button
              type="button"
              variant="default"
              size="lg"
              className="pl-4 w-full h-10"
            >
              Voltar e aprender um idioma
            </Button>
          </Link>
        </div>
        <div className="w-full flex items-center">
            <div className="flex-1 h-3 bg-lime-600" />
            <div className="flex-1 h-3 bg-lime-700" />
            <div className="flex-1 h-3 bg-lime-800" />
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage