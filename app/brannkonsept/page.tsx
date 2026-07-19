import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Brannkonsept i Harstad | Brannkonsult AS',
  description:
    'Brannkonsult AS utarbeider brannkonsept i Harstad og Sør-Troms. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr inkl. branntegninger. Fastpris alltid.',
  path: '/brannkonsept',
})

const faqItems = [
  {
    question: 'Trenger jeg et fullt brannkonsept, eller holder det med et enklere notat?',
    answer:
      'Det kommer an på hvor omfattende tiltaket er. Et brannkonsept dekker brannsikkerheten til hele byggverket, mens et brannteknisk notat er tilstrekkelig for mindre endringer. Send oss noen linjer om prosjektet, så sier vi hva som faktisk kreves før du bestiller noe.',
  },
  {
    question: 'Må dere befare bygget for å lage et brannkonsept?',
    answer:
      'Sjelden, i praksis. Med gode tegninger og digitale kartdata klarer vi de fleste nybygg og enklere tiltak uten befaring. Er bygget uoversiktlig, eller mangler det oppdaterte tegninger, sier vi ifra i forkant — det er i så fall inkludert i tilbudet.',
  },
  {
    question: 'Hva koster et brannkonsept?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger, og du får alltid fastpris skriftlig før vi begynner. Send oss adresse og en kort beskrivelse, så regner vi ut et nøyaktig tilbud.',
  },
  {
    question: 'Selger dere også håndverkertjenester eller brannteknisk utstyr?',
    answer:
      'Nei. Vi er en ren rådgivningsvirksomhet uten egne produkter eller utførende tjenester å selge — det holder anbefalingene våre uavhengige av hva som lønner seg for oss.',
  },
  {
    question: 'Hva må jeg sende dere for å få et tilbud?',
    answer:
      'Adresse eller matrikkelnummer, plantegninger (situasjonsplan og planløsning) og noen ord om hva prosjektet går ut på. Med det på plass svarer vi normalt med fastpris innen 24 timer.',
  },
  {
    question: 'Hvor raskt kan dere levere et ferdig brannkonsept?',
    answer:
      'Vanligvis 5–10 virkedager fra vi har mottatt bestilling og komplett underlag, avhengig av omfang og hvor mye vi har på gang. Har du en frist å forholde deg til, si ifra ved bestilling så prioriterer vi deretter.',
  },
  {
    question: 'Tilbyr dere brannkonsept utenfor Harstad?',
    answer:
      'Ja — foruten Harstad tilbyr vi brannkonsept i store deler av Nordland og Helgeland, blant annet Mo i Rana, Sandnessjøen, Bodø og Narvik, samt øvrige deler av Nord-Norge. Ta kontakt for et uforpliktende tilbud uansett hvor i landsdelen prosjektet ditt ligger.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Brannkonsept', path: '/brannkonsept' },
      ])} />
      <JsonLd data={serviceSchema({
        name: 'Brannkonsept',
        description: 'Utarbeidelse av brannkonsept for byggesaker i Harstad og Sør-Troms.',
        path: '/brannkonsept',
      })} />
      <JsonLd data={faqSchema(faqItems)} />

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
                Brannkonsept for byggesaker i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Skal kommunen behandle byggesøknaden din, trenger den som regel et brannkonsept i bunnen.
                Vi utarbeider det til fastpris, enten det gjelder et nybygg eller et tilbygg til et eldre hus.
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
                  Et brannkonsept er en skriftlig rapport som viser hvordan bygget ditt ivaretar kravene til brannsikkerhet — både for det du skal bygge og for resten av bygningsmassen det inngår i. De fleste byggesaker i Harstad kommune krever et slikt dokument før søknaden kan behandles. Vi utarbeider brannkonsept for private, arkitekter, entreprenører og utbyggere, enten prosjektet er et nybygg eller en ombygging av et eldre hus i sentrum.
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
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
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
              Skal du søke kommunen om byggetillatelse?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud på brannkonsept
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
