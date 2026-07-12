import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Forebygg pipebrann med enkle grep | Brannkonsult AS',
  description:
    'Lær hvordan du forebygger pipebrann. Regelmessig feieservice, riktig ved og god trekk er nøkkelen. Råd fra sentralt godkjente brannrådgivere i Harstad.',
  path: '/artikler/pipebrann',
  ogImage: '/images/article-pipebrann.jpg',
})

export default function PipebrannPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Artikler', path: '/artikler' },
        { name: 'Forebygg pipebrann', path: '/artikler/pipebrann' },
      ])} />

      <section className="bg-brand-lightgray py-12 lg:py-16 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-4">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/artikler" className="hover:text-brand-orange transition-colors">Artikler</Link>
            <span>/</span>
            <span>Forebygg pipebrann</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
            Forebygg pipebrann med enkle grep
          </h1>
        </div>
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[10px] overflow-hidden h-72 lg:h-96 mb-10 border border-brand-gray">
                <Image
                  src="/images/article-pipebrann.jpg"
                  alt="Forebygg pipebrann"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  Er du i faresonen for å kunne få brann i skorsteinen? Hvert år oppstår det dessverre mange pipebranner i Norge, og de fleste av dem kunne vært unngått med enkle forebyggende tiltak. I denne artikkelen forklarer vi hva en pipebrann er, hva som forårsaker den, og hva du kan gjøre for å redusere risikoen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva er en pipebrann?</h2>
                <p className="leading-relaxed mb-6">
                  En pipebrann oppstår når beksot (kreosot) — et svart, tjæreaktig stoff som samler seg på innsiden av skorsteinen — antennes. Beksot er et biprodukt av ufullstendig forbrenning og dannes særlig ved bruk av fuktig ved, lav temperatur i ildstedet eller dårlig trekk i pipa. Når beksotlaget blir tykt nok og temperaturen stiger, kan det ta fyr.
                </p>
                <p className="leading-relaxed mb-6">
                  En pipebrann er svært varm — temperaturen i skorsteinen kan overstige 1000 grader — og kan raskt spre seg til omliggende konstruksjoner. Selv om mange pipebranner slukner av seg selv, er faren for at brannen sprer seg til resten av huset overhengende.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva forårsaker pipebrann?</h2>
                <p className="leading-relaxed mb-4">De vanligste årsakene til pipebrann er:</p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'Bruk av fuktig eller useasongert ved — dette gir røykere og kaldere forbrenning',
                    'For lav temperatur i ovnen — pyroteknisk forbrenning produserer mer beksot',
                    'Mangelfull feieservice — beksot og sot hoper seg opp over tid',
                    'Gamle eller skadede skorsteiner med sprekker',
                    'Feil type brensel (f.eks. behandlet tre, hageavfall, plast)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Slik forebygger du pipebrann</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">1. Bruk tørr ved</h3>
                <p className="leading-relaxed mb-6">
                  Bruk alltid tørr, sesongert ved med under 20% fuktinnhold. Fuktig ved gir dårligere forbrenning, mer røyk og langt mer beksotavleiring. Kjøp ved i god tid og la det tørke minst ett år under tak med god luftsirkulasjon.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">2. Fyr riktig</h3>
                <p className="leading-relaxed mb-6">
                  Fyr med høy temperatur og god lufttilgang, særlig ved opptenning. Unngå å dempe ned ilden for mye — langsom, ulmende ild gir mye beksot. En god tommelfingerregel er å alltid ha synlige flammer i ovnen.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">3. Regelmessig feieservice</h3>
                <p className="leading-relaxed mb-6">
                  Brannloven krever at alle ildsteder og skorsteiner i boligbygg feies og kontrolleres jevnlig av kommunens feietjeneste. Sørg for at du er registrert hos din kommune og at du ikke hindrer adkomst til skorsteinen. Dersom du fyrer mye, kan det være aktuelt med hyppigere feieservice enn det kommunen tilbyr.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">4. Kontroller pipa jevnlig</h3>
                <p className="leading-relaxed mb-6">
                  Sjekk at det ikke er sprekker eller skader i pipa, verken innvendig eller utvendig. Legg merke til om det lukter røyk i huset — dette kan indikere sprekker i røykkanalen. Ta kontakt med en fagperson dersom du er i tvil om tilstanden på pipa di.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">5. Monter røykvarsler</h3>
                <p className="leading-relaxed mb-8">
                  Norsk lov krever at alle boliger har røykvarsler. Sørg for at du har røykvarslere i alle etasjer og utenfor soverom. Test dem jevnlig og bytt batteri én gang i året.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border border-brand-gray rounded-[10px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-2">Hva gjør du hvis det begynner å brenne i pipa?</h3>
                  <ol className="space-y-2 text-brand-darkgray text-sm list-decimal list-inside">
                    <li>Ring brannvesenet (110) umiddelbart</li>
                    <li>Lukk trekkspjeldet og alle luftventiler på ovnen</li>
                    <li>Evakuer huset</li>
                    <li>Hold øye med pipa utenfra — sjekk om det er gnister</li>
                    <li>Ikke forsøk å slukke pipebrann selv med vann</li>
                  </ol>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="leading-relaxed">
                  Har du spørsmål om brannsikkerhet i din bolig eller ditt bygg? Brannkonsult AS er sentralt godkjente brannrådgivere og hjelper deg gjerne med brannkonsept, brannprosjektering og branninspeksjon.{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Ta kontakt med oss her.
                  </Link>
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
              Trenger du hjelp med brannsikkerheten?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
