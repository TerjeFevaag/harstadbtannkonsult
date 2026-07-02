import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Harstad | Harstad Brannkonsult',
  description:
    'Profesjonell brannprosjektering i Harstad og Sør-Troms. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Tilbygg, bruksendring, nybygg.',
  alternates: { canonical: 'https://www.harstadbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Harstad?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris. Send oss tegninger og prosjektbeskrivelse for et nøyaktig tilbud.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, de fleste tiltak som krever søknad til kommunen utløser også krav om brannprosjektering — dette gjelder tilbygg, påbygg, bruksendring, ny boenhet i eksisterende bygg og bytte av vinduer i brannvegg. Ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'I de fleste saker er befaring ikke nødvendig. Med digitale kartdata, tegningsunderlag og bilder kan vi utarbeide god brannprosjektering uten å besøke bygget. Vi gir beskjed hvis vi ser behov for befaring.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral brannrådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen alltid er i ditt beste interesse.',
  },
  {
    question: 'Hva trengs fra deg for å gi et pristilbud?',
    answer:
      'Vi trenger adresse, antall etasjer og bruksareal, plantegninger og en kort prosjektbeskrivelse. Jo mer informasjon vi får, jo mer presist kan vi prise oppdraget. Send det til oss på e-post eller via kontaktskjemaet.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
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
                Brannprosjektering i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet — til fast pris og med rask levering.
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
                  Brannprosjektering betyr skriftlig planlegging av nødvendig brannsikring i og rundt bygningen. Vi sørger for at ditt bygg i Harstad oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
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
                      { href: '/branntilsyn', label: 'Branntilsyn' },
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
              Be om tilbud på brannprosjektering i Harstad
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud nå
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
