import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { faqSchema } from '@/lib/schema'

// Metadata for this route is inherited from app/layout.tsx (identical content for path '/')

const services = [
  {
    number: '01',
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'De fleste byggesaker i Harstad kommune krever et brannkonsept før søknaden kan behandles. Vi setter opp dokumentasjonen som viser at brannsikkerheten er ivaretatt, enten det gjelder en garasje eller et helt leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    number: '02',
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi finner løsninger som oppfyller brannkravene uten å komplisere byggeprosjektet unødvendig — med fastpris så du vet hva det koster før vi starter.',
    href: '/brannprosjektering',
  },
  {
    number: '03',
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description:
      'Fått pålegg fra brannvesenet, eller vil du vite hvor bygget faktisk står brannteknisk? Vi går gjennom bygningen og leverer en rapport du kan bruke til å prioritere utbedringer.',
    href: '/branninspeksjon',
  },
  {
    number: '04',
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'Krever prosjektet uavhengig kontroll av brannkonseptet? Vi kontrollerer at dokumentasjonen holder mål opp mot forskriftene, uavhengig av hvem som har prosjektert.',
    href: '/uavhengig-kontroll',
  },
]

const steps = [
  {
    step: '01',
    title: 'Ta kontakt',
    description: 'Fortell oss kort om prosjektet — adresse, byggetype og hva du trenger hjelp med.',
  },
  {
    step: '02',
    title: 'Du får et tilbud',
    description: 'Vi regner ut fastpris basert på omfang, og sender skriftlig tilbud innen 24 timer.',
  },
  {
    step: '03',
    title: 'Vi leverer',
    description: 'Etter bestilling utarbeider vi dokumentasjonen og leverer den klar til bruk i byggesaken.',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter gjennomført' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Der det er mulig' },
  { number: 'Nord-Norge', label: 'Og resten av landet ved behov' },
]

const reviews = [
  {
    quote:
      'På spørsmål om brannkonsept, og ansvarsrett for fagområdet, fikk vi raskt og proffesjonelt svar. Hyggelig, ryddig og konstruktiv oppfølging.',
    author: 'Sverre Krefting',
    company: 'Sivilarkitekt',
    date: '30. april 2026',
  },
  {
    quote:
      'Godt fornøyd med brannsikringsvurdering som ble gjort, og at firmaet tok ansvarsrett for brannsikkerhet i vår sak. Rapporten førte til ferdigattest hos kommunen for tilbygg til en dobbeltgarasje.',
    author: 'Harald Solberg',
    date: '8. februar 2023',
  },
  {
    quote:
      'Veldig fornøyd med utført prosjektering og profesjonalisme av Brannkonsult AS!',
    author: 'Wojtek Hryniewiecki',
    company: 'Front Arkitektur AS',
    date: '13. oktober 2024',
  },
  {
    quote:
      'Som privatperson i et eget ombyggingsprosjekt i gammel murgård, som ble fanget inn i TEK17, ble jeg overrasket av omfanget og nødvendigheten av å benytte eksterne konsulenter. Når det er sagt, så var jeg fornøyd med både kvaliteten og tigjengeligheten av tjenestene til Brannkonsult.',
    author: 'Helge Torp',
    date: '7. juni 2022',
  },
  {
    quote:
      'Jeg kontaktet Brannkonsult i forbindelse med et utbygningsprosjekt der jeg fryktet at det ville være komplisert å tilfredsstille brannkrav som ville komme som en følge av planene. Gjennom tidlige samtaler med Brannkonsult ble det tydelig at dette kunne la seg gjøre uten så omfattende tiltak som opprinnelig fryktet. En rapport med utfyllende info om krav og praktiske løsninger ble utarbeidet, og dette førte til at jeg valgte å realisere prosjektet.',
    author: 'Jan Arthur Grip Nilsen',
    date: '23. januar 2023',
  },
  {
    quote:
      'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Ble ikke tilbudt en dyr dokumentasjonspakke som var overdimensjonert i henhold til vårt prosjekt.',
    author: 'Heidi Spinnangr',
  },
]

const faqItems = [
  {
    question: 'Hva koster det å få utarbeidet et brannkonsept i Harstad?',
    answer:
      'Det kommer an på hvor stort og komplisert prosjektet er. Som utgangspunkt starter et brannkonsept i tiltaksklasse 2 på rundt 15 000 kr eks. mva., inkludert branntegninger — og du får alltid fastpris før vi setter i gang.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'Sannsynligvis, ja. Så snart du søker kommunen om tilbygg, bruksendring, ny boenhet eller påbygg, følger det som regel med krav til brannteknisk dokumentasjon. Send oss noen ord om prosjektet, så sier vi ifra.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'Ikke alltid. Ved nybygg og de fleste tilbygg klarer vi oss med tegninger og kartdata. Er bygningen mer komplisert, eller snakker vi om en eldre bygning uten oppdaterte tegninger, avtaler vi en befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja. Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2 — dokumentasjon på at vi har kompetansen, forsikringen og kvalitetssystemet som kreves for å ta ansvarsrett i byggesaken.',
  },
  {
    question: 'Tar dere oppdrag utenfor Harstad?',
    answer:
      'Vi hjelper kunder i Harstad og Sør-Troms, og tar oppdrag i hele Nord-Norge — blant annet Tromsø, Narvik, Bodø, Mo i Rana og Sandnessjøen — samt resten av landet ved behov.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Pipebrann om vinteren — slik unngår du det',
    excerpt:
      'Lange fyringssesonger i Nord-Norge betyr høyere risiko for pipebrann. Les hvordan riktig ved, fyring og feiing reduserer faren.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Riktig brannslokker hjemme og på hytta',
    excerpt:
      'Med lang vei til brannvesenet betyr riktig slokkeutstyr ekstra mye. Vi gjennomgår hva du faktisk trenger, hjemme og på hytta.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Røykvarsler og mørketid i Nord-Norge',
    excerpt:
      'I mørketiden brenner vi mer stearinlys enn ellers. Vi forklarer krav til røykvarslere, riktig type og plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />

      {/* ── HERO — Maritime Grid: text left in bordered frame, image right ── */}
      <section className="bg-brand-dark grid-pattern">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[85vh]">
            {/* Text block */}
            <div className="flex items-center lg:pr-12 py-8 lg:py-24">
              <div className="hero-1 border border-brand-white/15 rounded-[10px] p-8 lg:p-10 w-full">
                <p className="hero-2 font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-4">
                  Brannkonsult AS — Sør-Troms
                </p>
                <h1 className="hero-3 text-brand-white text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Brannprosjektering tilpasset Harstads bygningsmasse
                </h1>
                <p className="hero-4 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8">
                  Fra trehusbebyggelsen ved havna til moderne leilighetsbygg og næringsbygg — vi kjenner
                  kravene som gjelder for byggeprosjekter i Harstad og Sør-Troms. Sentralt godkjent
                  foretak med over 1200 gjennomførte prosjekter og alltid fastpris.
                </p>
                <div className="hero-5 flex flex-wrap gap-4 mb-8">
                  <Link
                    href="/kontakt-oss"
                    className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
                  >
                    Få gratis tilbud
                  </Link>
                  <Link
                    href="/om-oss"
                    className="border border-brand-white/40 text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
                  >
                    Om oss
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm text-brand-white/70 pt-6 border-t border-brand-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-brand-orange shrink-0" />
                    Sentralt godkjent TKL 1+2
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-brand-orange shrink-0" />
                    Fast pris
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block h-full min-h-[85vh] border-l border-brand-white/10">
              <Image
                src="/images/hero.jpg"
                alt="Harstad by"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — spec-sheet grid ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-2">Hva vi gjør</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Fire tjenester, ett kontaktpunkt
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 80}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOKALKUNNSKAP ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-2">Lokalkunnskap</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-5">
              Bygningsmassen i Harstad stiller egne krav
            </h2>
            <p className="text-brand-darkgray leading-relaxed">
              Harstad sentrum har mye av sin opprinnelige trehusbebyggelse bevart, klemt inn mellom
              havna og fjellsidene — en bygningsmasse med antikvarisk preg som stiller andre krav til
              branntekniske løsninger enn nybygg. Samtidig vokser byen med nye leilighetsbygg,
              næringsbygg og anlegg knyttet til offshore- og verftsvirksomheten. Vi har prosjektert
              brannsikkerhet i begge typer bygg — fra tilbygg på gamle trehus til nye næringsbygg — og
              kjenner forskjellen på hva som kreves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-2">Fremdrift</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Fra henvendelse til ferdig dokumentasjon</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 120} className="border border-brand-gray rounded-[10px] p-8 text-center">
                <div className="w-14 h-14 rounded-[8px] bg-brand-orange flex items-center justify-center text-brand-white font-black text-lg mb-5 mx-auto">
                  {s.step}
                </div>
                <h3 className="font-bold text-brand-black text-xl mb-3">{s.title}</h3>
                <p className="text-brand-darkgray leading-relaxed">{s.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-brand-dark py-12 border-t border-b border-brand-orange/30">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal
                key={i}
                delay={i * 80}
                variant="scale"
                className={`text-center px-4 py-2 ${i > 0 ? 'border-l border-brand-white/20' : ''}`}
              >
                <div className="text-brand-orange font-black text-3xl lg:text-4xl mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-white text-sm lg:text-base">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS — bordered table-like list ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-2">Kundene våre sier</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva sier kundene?</h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <div className="bg-brand-white border border-brand-gray rounded-[10px] px-6">
              {reviews.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-10">
              Ofte stilte spørsmål
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <div className="border border-brand-gray rounded-[10px]">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group bg-brand-white rounded-[10px] overflow-hidden border border-brand-gray hover:border-brand-orange transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 border-t-4 border-brand-orange">
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-dark py-16 lg:py-20 border-t-2 border-brand-orange">
        <ScrollReveal variant="fade" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
            Har du et byggeprosjekt i Harstad?
          </h2>
          <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
            Send oss noen ord om hva du trenger, så har du et fastprisforslag i hånden
            innen 24 timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4740051437"
              className="border border-brand-white/40 text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
            >
              <Phone size={16} /> Ring oss
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
