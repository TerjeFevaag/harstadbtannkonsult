import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Pipebrann om vinteren — slik unngår du det | Brannkonsult AS',
  description:
    'Lange fyringssesonger i Nord-Norge øker risikoen for pipebrann. Råd om ved, fyring og feiing fra sentralt godkjente brannrådgivere i Harstad.',
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
            Pipebrann om vinteren — slik unngår du det
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
                  Med lange, kalde vintre og korte dager er vedfyring den vanligste oppvarmingskilden i mange hjem i Harstad og resten av Nord-Norge — noen ganger fra tidlig oktober til langt ut i mai. Det betyr også flere timer med ovnen i gang, og dermed større risiko for pipebrann enn i landsdeler med kortere fyringssesong. Gode vaner koster ingenting og reduserer risikoen betydelig.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva er det egentlig som brenner?</h2>
                <p className="leading-relaxed mb-6">
                  Det er ikke pipa selv som tar fyr, men beksoten (kreosoten) som legger seg på innsiden av den — et svart, tjæreaktig belegg som dannes når veden ikke forbrenner fullstendig. Fuktig ved, lav temperatur i ildstedet og dårlig trekk gir mer beksot. Blir laget tykt nok, og temperaturen i pipa stiger, kan det antennes.
                </p>
                <p className="leading-relaxed mb-6">
                  En pipebrann er ekstremt varm — over 1000 grader er ikke uvanlig — og kan spre seg til bjelkelag og takkonstruksjon på minutter. Noen pipebranner slukner av seg selv, men risikoen for spredning til resten av huset er reell nok til at det aldri bør ignoreres.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Hva øker risikoen?</h2>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  {[
                    'Fuktig eller useasongert ved — gir røykere, kaldere forbrenning og mer beksot',
                    'Lang, ulmende fyring på lavt bluss for å spare ved',
                    'Sjelden feiing, slik at beksot og sot bygger seg opp over flere sesonger',
                    'Gamle skorsteiner med sprekker eller skader i pipeløpet',
                    'Feil brensel — behandlet trevirke, hageavfall eller plast produserer mer sot enn ren ved',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <span className="text-brand-orange mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4 mt-10">Fire vaner som faktisk hjelper</h2>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Kjøp ved tidlig, og la den tørke lenge</h3>
                <p className="leading-relaxed mb-6">
                  Sesongert ved med under 20 % fuktinnhold gir langt renere forbrenning enn fersk ved. Kjøp gjerne inn til neste vinter allerede nå, og lagre den under tak med luft på alle sider — minst ett år er en fornuftig tommelfingerregel i et klima med korte, fuktige somre.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Fyr varmt, ikke svakt</h3>
                <p className="leading-relaxed mb-6">
                  Et bål med synlige flammer og god lufttilgang produserer vesentlig mindre beksot enn en ovn som ulmer på lavt bluss over lang tid. Det er fristende å dempe ned for å strekke veden, men det er nettopp den slags fyring som bygger opp mest belegg i pipa.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Bestill feiing — og ikke skyv på den</h3>
                <p className="leading-relaxed mb-6">
                  Brannloven krever at ildsteder og skorsteiner feies og kontrolleres jevnlig av kommunens feietjeneste. Fyrer du mye i vintersesongen, kan det være grunn til å be om hyppigere feiing enn det kommunen legger opp til som standard — særlig i eldre pipeløp.
                </p>
                <h3 className="text-brand-black text-xl font-bold mb-3 mt-6">Se etter tegn på skade</h3>
                <p className="leading-relaxed mb-8">
                  Sprekker i pipeløpet, lukt av røyk inne i huset utenom fyring, eller synlig skade utvendig er alle tegn på at pipa bør sjekkes av en fagperson før neste fyringssesong.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border border-brand-gray rounded-[10px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black text-lg mb-2">Det tar fyr i pipa — hva gjør du?</h3>
                  <ol className="space-y-2 text-brand-darkgray text-sm list-decimal list-inside">
                    <li>Ring 110 med én gang</li>
                    <li>Steng trekkspjeldet og alle luftventiler på ovnen</li>
                    <li>Få alle ut av huset</li>
                    <li>Følg med på pipa utenfra — se etter gnister eller flammer ut av toppen</li>
                    <li>Aldri hell vann i en varm pipe — det kan sprenge den</li>
                  </ol>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="leading-relaxed">
                  Vurderer du samtidig brannsikkerheten i resten av bygget — enten det er en enebolig eller et bygg med flere boenheter? Brannkonsult AS er sentralt godkjente brannrådgivere og bistår med brannkonsept, brannprosjektering og branninspeksjon i Harstad og resten av Nord-Norge.{' '}
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
              Lurer du på brannsikkerheten i bygget ditt?
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
