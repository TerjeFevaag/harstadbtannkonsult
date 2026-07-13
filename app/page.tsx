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
      'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt — fra garasjer til leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    number: '02',
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    number: '03',
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description:
      'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branninspeksjon',
  },
  {
    number: '04',
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const steps = [
  {
    step: '01',
    title: 'Kontakt oss',
    description: 'Send oss en forespørsel med informasjon om ditt prosjekt. Vi svarer innen 24 timer.',
  },
  {
    step: '02',
    title: 'Vi sender tilbud',
    description: 'Du mottar et fastpristilbud med tydelig leveransebeskrivelse. Ingen overraskelser.',
  },
  {
    step: '03',
    title: 'Vi prosjekterer',
    description: 'Etter aksept leverer vi komplett brannprosjektering klar for kommunen.',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter gjennomført' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Der det er mulig' },
  { number: 'Hele landet', label: 'Vi tar oppdrag overalt' },
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
      'Jeg er veldig fornøyd. Alt er proff utført og veldig fort. Flott kontakt med Thomas Hansen.',
    author: 'Anders Sverdvik',
    date: '24. mai 2022',
  },
  {
    quote:
      'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Ble ikke tilbudt en dyr dokumentasjonspakke som var overdimensjonert i henhold til vårt prosjekt.',
    author: 'Heidi Spinnangr',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Harstad?',
    answer:
      'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Harstad?',
    answer:
      'Vi hjelper kunder i Harstad, Sør-Troms og hele Troms, og tar oppdrag over hele landet.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Er du i faresonen for å kunne få brann i skorsteinen? Les om hva som forårsaker pipebrann og enkle tiltak for å redusere risikoen.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og riktig plassering.',
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
                  Vi hjelper deg med brannprosjektering i Harstad og Sør-Troms
                </h1>
                <p className="hero-4 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8">
                  Sentralt godkjent foretak med over 1200 gjennomførte prosjekter. Fast pris, rask
                  levering og personlig oppfølging — fra enkle tilbygg til store leilighetsbygg.
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
            <p className="font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-2">Våre tjenester</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Hva kan vi hjelpe deg med?
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-mono text-brand-orange text-xs uppercase tracking-[0.25em] mb-2">Enkel prosess</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Slik jobber vi</h2>
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
            Klar for å komme i gang?
          </h2>
          <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
            Ta kontakt i dag for et uforpliktende tilbud på brannprosjektering i Harstad.
            Vi svarer innen 24 timer.
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
