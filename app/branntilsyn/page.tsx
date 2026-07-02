import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, AlertTriangle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Branntilsyn og branninspeksjon i Harstad | Harstad Brannkonsult',
  description:
    'Branntilsyn og branninspeksjon i Harstad. Fått pålegg fra brannvesenet? Vi inspiserer bygningen og utarbeider tilstandsrapport og handlingsplan. Kontakt oss i dag.',
  alternates: { canonical: 'https://www.harstadbrannkonsult.no/branntilsyn' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer:
      'Branntilsyn er en kontroll utført av kommunens brann- og redningsetat. Branninspeksjon er en frivillig, grundigere gjennomgang du kan bestille fra en privat brannrådgiver som oss. Vi gir en uavhengig vurdering av byggets brannsikkerhet og konkrete anbefalinger.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer:
      'Styret i sameiet er ansvarlig for at fellesarealene oppfyller brannkravene. Beboere er ansvarlige for sine egne enheter. Vi hjelper sameier og borettslag med å kartlegge status og utarbeide en handlingsplan for nødvendige utbedringer.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer:
      'Brannvesenet kan gi pålegg om utbedring med frist. Dersom pålegg ikke etterkommes, kan brannvesenet i ytterste konsekvens stenge bygget. Vi hjelper deg med å forstå pålegget og utarbeide en kostnadseffektiv plan for å lukke avvikene.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Kostnaden avhenger av byggets størrelse og kompleksitet. Vi gir et fastpristilbud etter å ha mottatt informasjon om bygget. Ta kontakt for en uforpliktende prat og estimat.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer:
      'Ja — alle eksisterende bygninger skal oppgraderes til et minimum tilsvarende det som gjaldt for nybygg i 1985 (BF85). For mange eldre bygg i Harstad betyr dette at det er behov for tiltak. Vi hjelper deg med å vurdere hva som er nødvendig.',
  },
]

export default function BranntilsynPage() {
  return (
    <>
      <section className="bg-brand-lightgray py-16 lg:py-20 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <span>Branntilsyn</span>
          </div>
          <div className="hero-2 bg-brand-white border border-brand-gray rounded-[10px] p-8 lg:p-10 flex gap-6">
            <div className="w-1 bg-brand-orange rounded-full shrink-0" />
            <div>
              <h1 className="text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
                Branntilsyn og branninspeksjon i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Har kommunen vært på branntilsyn, eller ønsker du å kartlegge brannsikkerheten i en eldre bygning i Harstad? Vi hjelper borettslag, sameier, næringsbygg og eiendomseiere med branninspeksjon og vurdering av byggets brannsikkerhet.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Krav til oppgradering</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Alle bygninger i Norge skal tilfredsstille et minimum brannsikkerhetsnivå tilsvarende det som gjaldt for nybygg i 1985 (BF85). Eldre bygg som ikke oppfyller dette kravet skal utbedres. Harstad har mange eldre bygninger, blant annet i sentrum og ved Trondenes, som kan ha behov for branntekniske tiltak.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i vår branninspeksjon?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Inspeksjon', desc: 'Grundig gjennomgang av hele bygningen — fellesarealer, rømningsveier, tekniske installasjoner og konstruksjoner.' },
                    { title: 'Tilstandsrapport', desc: 'Skriftlig rapport med oversikt over avvik og mangler, rangert etter alvorlighetsgrad.' },
                    { title: 'Handlingsplan', desc: 'Konkrete anbefalinger for utbedring, med kostnadsestimat og prioritering av tiltak.' },
                    { title: 'Internkontrollrutiner', desc: 'Hjelp til å etablere gode rutiner for løpende brannforebygging og dokumentasjon.' },
                  ].map((item, i) => (
                    <div key={i} className="border border-brand-gray rounded-[10px] p-5">
                      <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                      <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border-l-4 border-brand-orange border border-brand-gray rounded-[10px] p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">Typisk ordlyd fra brannvesenet ved pålegg</h3>
                      <p className="text-brand-darkgray text-sm italic leading-relaxed">
                        «Det er avdekket mangler ved brannsikkerheten i bygget. Eier pålegges å utbedre disse innen [dato]. Dokumentasjon på gjennomførte tiltak skal oversendes brannvesenet.»
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-brand-darkgray leading-relaxed mb-10">
                  Dersom du har mottatt et slikt pålegg, er det viktig å handle raskt. Vi hjelper deg med å forstå hva som kreves og utarbeider nødvendig dokumentasjon.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
              </ScrollReveal>
              <ScrollReveal delay={80} variant="fade">
                <div className="border border-brand-gray rounded-[10px]">
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="border border-brand-gray rounded-[10px] p-8">
                  <h3 className="font-bold text-brand-black text-xl mb-3">Fått pålegg?</h3>
                  <p className="text-brand-darkgray text-sm mb-6 leading-relaxed">
                    Ta kontakt så hjelper vi deg med tilstandsrapport og handlingsplan for å imøtekomme kravene.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Kontakt oss
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-brand-gray">
                    <a href="tel:+4700000000" className="flex items-center gap-2 text-brand-darkgray hover:text-brand-orange transition-colors text-sm">
                      <Phone size={14} /> +47 000 00 000
                    </a>
                    <a href="mailto:post@harstadbrannkonsult.no" className="flex items-center gap-2 text-brand-darkgray hover:text-brand-orange transition-colors text-sm">
                      <Mail size={14} /> post@harstadbrannkonsult.no
                    </a>
                  </div>
                </div>
                <div className="mt-6 border border-brand-gray rounded-[10px] p-8">
                  <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
                  <ul className="space-y-3">
                    {[
                      { href: '/brannkonsept', label: 'Brannkonsept' },
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">→ {link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14 border-t-2 border-brand-orange">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Kontakt oss for hjelp etter branntilsyn i Harstad
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
