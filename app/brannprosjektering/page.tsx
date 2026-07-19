import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Brannprosjektering i Harstad | Brannkonsult AS',
  description:
    'Profesjonell brannprosjektering i Harstad og Sør-Troms. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Tilbygg, bruksendring, nybygg.',
  path: '/brannprosjektering',
})

const faqItems = [
  {
    question: 'Hva koster brannprosjektering?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger, og prisen er alltid fast — ingen timepris som løper. Send oss tegninger og en kort prosjektbeskrivelse, så regner vi ut et nøyaktig tilbud.',
  },
  {
    question: 'Må jeg ha brannprosjektering for et tilbygg eller en bruksendring?',
    answer:
      'I de aller fleste tilfeller, ja. Alt som krever søknad til kommunen — tilbygg, påbygg, bruksendring, ny boenhet i et eksisterende hus eller bytte av vinduer i en brannvegg — utløser normalt krav om brannteknisk dokumentasjon. Usikker på ditt tilfelle? Bare spør.',
  },
  {
    question: 'Trenger dere å komme og se på bygget?',
    answer:
      'Sjelden. Med kartdata, tegningsunderlag og noen bilder kommer vi som regel i mål uten fysisk befaring. Dukker det opp noe vi trenger å se med egne øyne, avtaler vi det underveis.',
  },
  {
    question: 'Har dere egne håndverkere eller produkter dere anbefaler?',
    answer:
      'Nei. Vi lever av rådgivningen alene, ikke av å selge tjenester eller produkter videre — det er det som gjør at anbefalingene våre er upåvirket av hva som lønner seg for oss.',
  },
  {
    question: 'Hva må jeg sende for å få et fastpristilbud?',
    answer:
      'Adresse, plantegninger og en kort beskrivelse av hva som skal gjøres er nok til å komme i gang. Jo mer vi får, jo mer presist blir tilbudet — send det på e-post eller via skjemaet under.',
  },
  {
    question: 'Tilbyr dere brannprosjektering utenfor Harstad?',
    answer:
      'Ja — foruten Harstad tar vi oppdrag i hele Nordland og Helgeland, blant annet Mo i Rana, Bodø, Sandnessjøen og Narvik, samt øvrige deler av Nord-Norge.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Brannprosjektering', path: '/brannprosjektering' },
      ])} />
      <JsonLd data={serviceSchema({
        name: 'Brannprosjektering',
        description: 'Brannprosjektering for tilbygg, bruksendring og nybygg i Harstad og Sør-Troms.',
        path: '/brannprosjektering',
      })} />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-brand-lightgray py-16 lg:py-20 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <span>Brannprosjektering</span>
          </div>
          <div className="hero-2 bg-brand-white border border-brand-gray rounded-[10px] p-8 lg:p-10 flex gap-6">
            <div className="w-1 bg-brand-orange rounded-full shrink-0" />
            <div>
              <h1 className="text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
                Brannprosjektering for byggeprosjekter i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Enten det gjelder et nybygg på Stangnes eller et tilbygg til et eldre hus i sentrum —
                vi finner brannløsningen som holder i byggesaken, til fastpris.
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
                  Brannprosjektering er det skriftlige grunnlaget som viser hvordan bygget ditt oppfyller kravene i plan- og bygningsloven og brann- og eksplosjonsvernloven. Vi utarbeider dette til fastpris, uansett om det er snakk om et nybygg, en ombygging av et eldre hus, eller en næringseiendom i et av industriområdene rundt Harstad.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bytte av vinduer eller dører i brannvegg/seksjoneringsvegg',
                    'Tilbygg eller påbygg på eksisterende bygg',
                    'Bruksendring (f.eks. garasje til boenhet)',
                    'Etablering av ny selvstendig boenhet (utleieenhet)',
                    'Nybygg — boliger, næringsbygg, fritidsboliger',
                    'Rehabilitering av eldre bygg med branntekniske mangler',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <ScrollReveal variant="scale" className="!block mb-10">
                  <div className="relative h-64 lg:h-80 rounded-[10px] overflow-hidden border border-brand-gray">
                    <Image
                      src="/images/service-brannprosjektering.jpg"
                      alt="Brannrådgiver ser gjennom branntegninger"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                  </div>
                </ScrollReveal>

                <h2 className="text-brand-black text-2xl font-black mb-4">Start tidlig — spar penger</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Jo tidligere i prosjektet du involverer en brannrådgiver, desto enklere og billigere er det å finne gode løsninger. Brannkrav som oppdages sent i prosessen kan kreve dyre konstruksjonsendringer. Vi anbefaler å ta kontakt allerede i skissefasen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonsept og brannteknisk notat',
                    'Branntegninger (brannceller, rømningsveier, seksjoneringer)',
                    'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris — ingen overraskelser',
                    'Levering innen 5–10 virkedager',
                    'God oppfølging gjennom hele byggesaken',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi trenger fra deg</h2>
                <ul className="space-y-3 mb-10">
                  {[
                    'Situasjonsplan / adresse',
                    'Byggesakstegninger (plan, snitt, fasade)',
                    'Kort prosjektbeskrivelse',
                    'Eventuelle forhåndsuttalelser fra kommunen',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <h3 className="font-bold text-brand-black text-xl mb-3">Be om tilbud</h3>
                  <p className="text-brand-darkgray text-sm mb-6 leading-relaxed">
                    Send oss tegningene og vi sender deg et fastpristilbud innen 24 timer.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Kontakt oss
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-brand-gray">
                    <a href="tel:+4740051437" className="flex items-center gap-2 text-brand-darkgray hover:text-brand-orange transition-colors text-sm">
                      <Phone size={14} /> +47 400 51 437
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
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
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
              Skal du i gang med et byggeprosjekt?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud på brannprosjektering
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
