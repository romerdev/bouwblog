import Image from "next/image"
import Wrapper from "@/components/wrapper"

export default function Home() {
  return (
    <main className="min-h-screen py-12 md:py-24">
      <Wrapper>
        <h1 className="text-5xl md:text-7xl xl:text-9xl mb-4">Romer&apos;s Bouwblog</h1>
        <div className="relative max-w-4xl md:mx-14 mb-24 md:mb-40">
          <Image
              src="/jakoba-mulderhuis.webp"
              alt="Exterior of the Jakoba Mulderhuis in Amsterdam"
              width={900}
              height={450}
              priority
            />
            <div className="md:absolute md:bottom-0 right-0 xl:translate-x-1/4 md:translate-y-1/4 md:h-80 md:w-80 md:bg-stone-100 pt-4 md:p-14 md:flex justify-center items-center md:rounded-full font-light text-lg">
              <p>In september start ik met de opleiding <strong>Built Environment</strong> op de Hogeschool van Amsterdam. Op deze website hou ik bij wat ik allemaal leer.</p>
            </div>
        </div>

        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          <li className="bg-amber-100 p-8 md:p-12 flex flex-col justify-end">
            <h2 className="text-light text-3xl md:text-4xl mb-4">It&apos;s official!</h2>
            <p className="md:text-lg">De inschrijving is rond! 🍾 In september 2023 kan ik officieel beginnen met de opleiding!</p>
          </li>
          <li className="bg-blue-100 p-8 md:p-12">
            <h2 className="text-light text-3xl md:text-4xl mb-4">Open dag bijgewoond</h2>
            <p className="md:text-lg">Als onderdeel van de studiekeuzecheck moesten we in groepsverband werken aan een oplossing op het vraagstuk: &lsquo;Amsterdam moet in 2050 volledig autovrij zijn&rsquo;. </p>
          </li>
        </ul>
      </Wrapper>
    </main>
  )
}
