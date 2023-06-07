import Image from "next/image"
import Wrapper from "@/components/wrapper"
import Card from "@/components/card"

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
            <div className="md:absolute md:bottom-0 md:text-center right-0 xl:translate-x-1/4 md:translate-y-1/4 md:h-80 md:w-80 md:bg-stone-100 pt-4 md:p-14 md:flex justify-center items-center md:rounded-full font-light text-lg">
              <p>In september 2023 start ik met de opleiding <strong>Built Environment</strong> op de Hogeschool van Amsterdam. Op deze website hou ik bij wat ik allemaal leer.</p>
            </div>
        </div>

        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
          <li>
            <Card title={"It's official!"} date={"2023-06-07 11:13"} colors={["bg-amber-100", "bg-amber-200"]}>
              De inschrijving is rond! 🍾 In september 2023 kan ik officieel beginnen met de opleiding!
            </Card>
          </li>
          <li>
            <Card title={"Open dag bijgewoond"} date={"2023-04-06"} colors={["bg-blue-100", "bg-blue-200"]}>
              Moet Amsterdam in 2050 volledig autovrij zijn? Als onderdeel van de studiekeuzecheck moesten we in groepsverband werken aan een oplossing op dit vraagstuk.
            </Card>
          </li>
        </ul>
      </Wrapper>
    </main>
  )
}
