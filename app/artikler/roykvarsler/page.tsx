import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Røykvarsler og mørketid i Nord-Norge | Brannkonsult AS',
  description:
    'I mørketiden brenner flere lys og stearinlys enn ellers i året. Krav til røykvarslere, riktig type og plassering. Råd fra sentralt godkjente brannrådgivere i Harstad.',
  path: '/artikler/roykvarsler',
  ogImage: '/images/article-roykvarsler.jpg',
})

export default function RoykVarslerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Artikler', path: '/artikler' },
        { name: 'Riktig røykvarsler', path: '/artikler/roykvarsler' },
      ])} />

      <section className="bg-brand-lightgray py-12 lg:py-16 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-4">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/artikler" className="hover:text-brand-orange transition-colors">Artikler</Link>
            <span>/</span>
            <span>Riktig røykvarsler</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
            Røykvarsler og mørketid i Nord-Norge
          </h1>
        </div>
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[10px] overflow-hidden h-72 lg:h-96 mb-10 border border-brand-gray">
                <Image
                  src="/images/article-roykvarsler.jpg"
                  alt="Røykvarsler"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Fra førjulstiden og et godt stykke ut i januar er det knapt lyst i Harstad. I mørketiden kompenserer de fleste av oss med flere lys i vinduene og mer stearinlys enn ellers i året — og det er nettopp den kombinasjonen av levende lys og lange, mørke kvelder som gjør en fungerende røykvarsler ekstra viktig. De fleste dødsbranner skjer om natten mens folk sover, og varsleren er ofte det eneste som gir deg tid nok til å komme deg ut.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva krever regelverket?</h2>
                <p className="leading-relaxed mb-6">
                  Forskrift om brannforebygging krever minst én røykvarsler per etasje, i tillegg til én utenfor hvert soverom. I praksis bør du ha varsler i alle rom med naturlig opphold, samt i korridorer og trapper.
                </p>
                <p className="leading-relaxed mb-6">
                  Lydsignalet skal være på minst 85 dB(A) målt ved soveromsdøren — sterkt nok til å vekke noen som sover tungt.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">To typer, én klar anbefaling</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Ionisasjonsvarsler</h3>
                <p className="leading-relaxed mb-6">
                  Bruker en liten mengde radioaktivt materiale til å oppdage røykpartikler, og reagerer raskt på flammebranner med lite synlig røyk. Ulempen er hyppige falske alarmer fra matos og damp — derfor er denne typen ikke lenger det norske myndigheter anbefaler, selv om den fortsatt finnes i mange eldre boliger.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Optisk (fotoelektrisk) varsler</h3>
                <p className="leading-relaxed mb-6">
                  Bruker lysstråler til å oppdage røykpartikler, og er vesentlig bedre på ulmebranner — den klart vanligste typen boligbrann, og den som ofte oppstår fra et stearinlys som velter eller glemmes. Færre falske alarmer fra matlaging gjør den også mer praktisk i hverdagen. Dette er typen Direktoratet for samfunnssikkerhet og beredskap (DSB) anbefaler.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border border-brand-gray rounded-[10px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Vår anbefaling</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">
                    Velg optiske røykvarslere, og koble dem sammen — via kabel eller radio — slik at alle utløses samtidig uansett hvor i boligen de henger. Det er den kombinasjonen som gir deg mest tid når det gjelder.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hvor bør varsleren henge?</h2>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'I taket, minst 50 cm fra vegger og hjørner',
                    'Utenfor hvert soverom, i gangen',
                    'I alle etasjer, inkludert kjeller',
                    'I stue og andre oppholdsrom',
                    'Ikke rett over komfyren — bruk komfyrvakt der i stedet, ellers får du stadige falske alarmer',
                    'Ikke i fuktige rom som bad, eller i garasjen',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Test den før mørketiden, ikke etterpå</h2>
                <p className="leading-relaxed mb-6">
                  Trykk testknappen minst én gang i måneden, og bytt batteri én gang i året — gjerne når klokka stilles tilbake i oktober, før den mørkeste og mest lysavhengige delen av året. De fleste varslere har en levetid på 8–10 år og bør byttes ut selv om de fremdeles piper når du tester dem.
                </p>
                <p className="leading-relaxed">
                  Vurderer du brannsikkerheten i en eiendom i Harstad, enten det er en enkelt bolig eller et bygg med flere enheter?{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Ta kontakt med Brannkonsult AS
                  </Link>{' '}
                  for en uforpliktende prat.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </article>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14 border-t-2 border-brand-orange">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl font-black mb-4">
              Skal bygget ditt brannvurderes?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Ta kontakt
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
