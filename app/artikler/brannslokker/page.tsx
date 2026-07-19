import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Riktig brannslokker hjemme og på hytta | Brannkonsult AS',
  description:
    'Hvilken brannslokker trenger du — og hvorfor betyr det ekstra mye med lang vei til brannvesenet? Krav, apparattyper og riktig bruk. Råd fra Brannkonsult AS.',
  path: '/artikler/brannslokker',
  ogImage: '/images/article-brannslukker.jpg',
})

export default function BrannslokkePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Artikler', path: '/artikler' },
        { name: 'Riktig brannslokker', path: '/artikler/brannslokker' },
      ])} />

      <section className="bg-brand-lightgray py-12 lg:py-16 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-4">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/artikler" className="hover:text-brand-orange transition-colors">Artikler</Link>
            <span>/</span>
            <span>Riktig brannslokker</span>
          </div>
          <h1 className="hero-2 text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
            Riktig brannslokker hjemme og på hytta
          </h1>
        </div>
      </section>

      <article className="py-16 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="scale">
              <div className="relative rounded-[10px] overflow-hidden h-72 lg:h-96 mb-10 border border-brand-gray">
                <Image
                  src="/images/article-brannslukker.jpg"
                  alt="Brannslokkeapparat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <div className="prose prose-lg max-w-none text-brand-darkgray">
              <ScrollReveal>
                <p className="text-lg leading-relaxed mb-6">
                  De fleste boligbranner blir faktisk slukket av beboerne selv, lenge før brannvesenet rekker frem. Det gjelder ekstra mye med spredt bosetting og lang utrykningsvei — enten det er en hytte et stykke utenfor Harstad eller et hus lenger ute i distriktet. Her går vi gjennom hvilket slokkeutstyr du faktisk trenger, og hvordan du bruker det.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva krever regelverket?</h2>
                <p className="leading-relaxed mb-6">
                  Forskrift om brannforebygging krever at boliger har slokkeutstyr som dekker alle rom — i praksis minst ett lett tilgjengelig brannslokkeapparat eller en brannslange. Røykvarsler er et eget krav i tillegg, og skal finnes i alle etasjer og utenfor soverom.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hvilket apparat passer hvor?</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Pulverapparat</h3>
                <p className="leading-relaxed mb-4">
                  Det vanligste valget i norske hjem, og med god grunn — det slår ned de fleste typer branner (klasse A, B og C) og koster lite. Ulempen er opprydningen etterpå: pulveret trenger seg inn overalt og kan ødelegge elektronikk. Et apparat på 6 kg dekker de fleste boliger og hytter godt.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Skumapparat</h3>
                <p className="leading-relaxed mb-4">
                  Skumapparater (AFFF) tar branner i faste stoffer og væsker uten å etterlate samme rot som pulver, og passer derfor godt på kjøkken og i stue. Skal det også dekke fett- eller oljebranner på komfyren, må du sjekke at akkurat det apparatet er godkjent for det.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">CO₂-apparat</h3>
                <p className="leading-relaxed mb-6">
                  Etterlater ingen rester og er godt egnet rundt elektriske installasjoner og elektronikk, men mindre effektivt mot vanlige branner i tre og tekstiler. Mest aktuelt i tekniske rom, kontor eller hjemmekontor med mye utstyr.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Brannteppe</h3>
                <p className="leading-relaxed mb-6">
                  Enkel å bruke og svært effektiv mot mindre kjøkkenbranner i gryte og panne. Heng det synlig nær komfyren — men aldri rett over den, hvor det selv kan bli utsatt for varmen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border border-brand-gray rounded-[10px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Et fornuftig utgangspunkt</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm list-none pl-0">
                    {[
                      'Kjøkken: brannteppe + 6 kg pulver- eller skumapparat',
                      'Gang/entré: 6 kg pulverapparat, lett tilgjengelig på vei ut',
                      'Garasje eller uthus: eget 6 kg pulverapparat',
                      'Hytte eller fritidsbolig: samme oppsett som boligen — utrykningstiden er ofte lengre',
                      'Alle etasjer: røykvarsler',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-orange">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Bruk riktig teknikk</h2>
                <p className="leading-relaxed mb-4">Forkortelsen <strong>PASS</strong> er lett å huske under stress:</p>
                <ol className="space-y-3 mb-8 list-decimal list-inside text-brand-darkgray">
                  <li><strong>P</strong>inn — trekk ut sikringspinnen</li>
                  <li><strong>A</strong>im — rett dysen mot bunnen av flammen, ikke toppen</li>
                  <li><strong>S</strong>queeze — klem inn håndtaket jevnt</li>
                  <li><strong>S</strong>weep — sveip fra side til side til flammene er borte</li>
                </ol>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Et apparat du ikke har sjekket, kan du ikke stole på</h2>
                <p className="leading-relaxed mb-6">
                  Et brannslokkeapparat som svikter når det trengs, er verre enn ingen apparat — det gir en falsk trygghet. Ta en visuell sjekk minst én gang i året: trykkmåleren skal vise grønt, sikringspinnen skal sitte på plass, og dyse eller slange skal være uskadet. Hvert femte år bør apparatet gjennom service hos et godkjent firma.
                </p>
                <p className="leading-relaxed">
                  Vurderer du samtidig brannsikkerheten i selve bygget?{' '}
                  <Link href="/kontakt-oss" className="text-brand-orange font-bold hover:underline">
                    Ta kontakt med Brannkonsult AS
                  </Link>{' '}
                  for en uforpliktende vurdering.
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
              Vil du ha en fagperson til å se på bygget?
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
