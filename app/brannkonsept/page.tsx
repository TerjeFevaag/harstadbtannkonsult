import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannkonsept i Harstad | Brannkonsult AS',
  description:
    'Brannkonsult AS utarbeider brannkonsept i Harstad og Sør-Troms. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr inkl. branntegninger. Fastpris alltid.',
  alternates: { canonical: 'https://www.harstadbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva trenger jeg til mitt prosjekt — brannkonsept eller brannteknisk notat?',
    answer:
      'Et brannkonsept er en mer helhetlig rapport som beskriver brannsikkerhetsnivået til hele byggverket. Et brannteknisk notat er enklere og brukes for mindre tiltak. Vi veileder deg til riktig løsning for ditt prosjekt — ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig for brannkonsept?',
    answer:
      'For nybygg og enklere saker er det sjelden nødvendig med befaring. Takket være digitale kartdata og gode tegningsunderlag kan vi i mange tilfeller utarbeide brannkonseptet uten fysisk befaring. Vi gir beskjed dersom vi ser behov for det.',
  },
  {
    question: 'Hva koster et brannkonsept i Harstad?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris slik at du slipper ubehagelige overraskelser. Send oss informasjon om prosjektet for et nøyaktig tilbud.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral rådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen vår alltid er uavhengig og i ditt beste interesse.',
  },
  {
    question: 'Hva trengs for å få et pristilbud?',
    answer:
      'For å gi et nøyaktig tilbud trenger vi: adresse/matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger) og en kort prosjektbeskrivelse. Send dette til oss så sender vi tilbud innen 24 timer.',
  },
  {
    question: 'Hvor lang tid tar det å utarbeide et brannkonsept?',
    answer:
      'Leveringstid avhenger av prosjektets omfang og vår arbeidsbelastning. For de fleste prosjekter leverer vi innen 5–10 virkedager etter mottatt bestilling og komplett underlag. Har du tidsfrist, oppgi dette i forespørselen.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      {/* Header — bordered spec-sheet banner */}
      <section className="bg-brand-lightgray py-16 lg:py-20 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <div className="hero-2 bg-brand-white border border-brand-gray rounded-[10px] p-8 lg:p-10 flex gap-6">
            <div className="w-1 bg-brand-orange rounded-full shrink-0" />
            <div>
              <h1 className="text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
                Brannkonsept i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Vi utarbeider helhetlige brannkonsept for byggesaker i Harstad og Sør-Troms. Fastpris, rask levering og sentral godkjenning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Et brannkonsept er en skriftlig rapport som oppsummerer bygningens brannsikkerhetsnivå. Ved byggesaker krever kommunen som regel prosjekteringsdokumentasjon på brannkonseptnivå — en helhetlig overordnet plan som ivaretar brannsikkerheten både for det omsøkte tiltaket og den øvrige bygningsmassen. Vi hjelper private, arkitekter, entreprenører og utbyggere i Harstad og omegn med å utarbeide komplette brannkonsept til fast pris.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva inneholder et brannkonsept?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-6">
                  Et komplett brannkonsept fra Brannkonsult AS inneholder:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Fastsettelse av risikoklasse (RKL) for alle bygningsdeler',
                    'Fastsettelse av brannklasse (BKL)',
                    'Oppdeling i brannceller og brannseksjoner',
                    'Beskrivelse av rømningsveier og røykventilasjon',
                    'Branntekniske tegninger (plantegninger med brannceller, rømning m.m.)',
                    'Vurdering av bærende og skille konstruksjoner',
                    'Krav til branntekniske installasjoner',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal variant="scale" className="mb-10">
                <div className="relative h-64 lg:h-80 rounded-[10px] overflow-hidden border border-brand-gray">
                  <Image
                    src="/images/service-brannkonsept.jpg"
                    alt="Brannkonsept og branntegninger under utarbeidelse"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Brannklasser og risikoklasser</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Alle bygninger i Norge klassifiseres etter risikoklasse (RKL 1–6) og brannklasse (BKL 1–4). Risikoklassen bestemmes av hva bygget brukes til og hvilke konsekvenser en brann kan ha. Brannklassen fastsettes ut fra risikoklasse og antall etasjer.
                </p>
                <div className="border border-brand-gray rounded-[10px] p-6 mb-8">
                  <h3 className="font-bold text-brand-black mb-3">Eksempler på risikoklasser:</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm">
                    <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                    <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                    <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                    <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                    <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Utarbeidelse av komplett brannkonsept',
                    'Branntekniske tegninger (brannceller, rømningsveier)',
                    'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris — ingen skjulte kostnader',
                    'Levering innen 5–10 virkedager',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border border-brand-gray rounded-[10px] p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                      <p className="text-brand-darkgray">
                        Fra ca. <strong className="text-brand-black">15 000 kr</strong> i tiltaksklasse 2, inkl. branntegninger og ekskl. mva. Alltid fastpris.
                      </p>
                    </div>
                  </div>
                </div>
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

            {/* Sidebar — static bordered card, not sticky */}
            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="border border-brand-gray rounded-[10px] p-8">
                  <h3 className="font-bold text-brand-black text-xl mb-3">Få uforpliktende tilbud</h3>
                  <p className="text-brand-darkgray text-sm mb-6 leading-relaxed">
                    Kontakt oss for en gratis vurdering av ditt brannkonseptbehov. Vi svarer innen 24 timer.
                  </p>
                  <Link
                    href="/kontakt-oss"
                    className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6"
                  >
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
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/branntilsyn', label: 'Branntilsyn' },
                      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">
                          → {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14 border-t-2 border-brand-orange">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-4">
              Kontakt oss for uforpliktende tilbud på brannkonsept i Harstad
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
