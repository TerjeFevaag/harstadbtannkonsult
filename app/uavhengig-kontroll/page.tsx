import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Uavhengig kontroll av brann i Harstad | Brannkonsult AS',
  description:
    'Uavhengig kontroll (UK) av brannkonsept i Harstad. Sentralt godkjent foretak. Vi gjennomgår brannkonsept, branntegninger og løsningsvalg mot TEK17. Fast pris.',
  path: '/uavhengig-kontroll',
})

const faqItems = [
  {
    question: 'Hva vil det egentlig si at kontrollen er "uavhengig"?',
    answer:
      'At firmaet som kontrollerer brannkonseptet ikke har vært involvert i å utarbeide det. Det er et lovkrav, ikke bare god skikk — poenget er å få et ubundet blikk på om prosjekteringen faktisk holder mål.',
  },
  {
    question: 'Når utløses kravet om uavhengig kontroll?',
    answer:
      'Så snart brannprosjekteringen ligger i tiltaksklasse 2 eller høyere, jf. SAK10. I praksis treffer dette de fleste næringsbygg, boligblokker og andre bygninger med mer enn to etasjer.',
  },
  {
    question: 'Hva koster en uavhengig kontroll?',
    answer:
      'Det kommer an på hvor omfattende brannkonseptet er. Send oss det som finnes av dokumentasjon, så gir vi et fastpristilbud etter en rask gjennomgang.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja — det er faktisk et krav at den som utfører UK ikke er den samme som har prosjektert. Vi kan ta på oss uavhengig kontroll av brannkonsept utarbeidet av andre rådgivere.',
  },
  {
    question: 'Tilbyr dere uavhengig kontroll utenfor Harstad?',
    answer:
      'Ja — vi tar oppdrag i hele Helgeland og Nordland forøvrig, blant annet Mo i Rana, Bodø, Narvik og Sandnessjøen, samt resten av Nord-Norge.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Uavhengig kontroll', path: '/uavhengig-kontroll' },
      ])} />
      <JsonLd data={serviceSchema({
        name: 'Uavhengig kontroll av brann',
        description: 'Uavhengig kontroll (UK) av brannprosjektering i tiltaksklasse 2 og høyere for bygg i Harstad og Sør-Troms.',
        path: '/uavhengig-kontroll',
      })} />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-brand-lightgray py-16 lg:py-20 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <span>Uavhengig kontroll</span>
          </div>
          <div className="hero-2 bg-brand-white border border-brand-gray rounded-[10px] p-8 lg:p-10 flex gap-6">
            <div className="w-1 bg-brand-orange rounded-full shrink-0" />
            <div>
              <h1 className="text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
                Uavhengig kontroll (UK) for byggesaker i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Ligger prosjektet i tiltaksklasse 2 eller høyere, må noen andre enn den som prosjekterte
                kontrollere brannkonseptet. Vi tar den jobben — uavhengig av hvem som har utarbeidet det.
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
                  Uavhengig kontroll er en andre vurdering av brannkonseptet — utført av noen uten
                  bindinger til den opprinnelige prosjekteringen. Kontrollen fanger opp feil og mangler
                  før de blir dyre å rette, og er et krav kommunen sjekker før byggetillatelse gis.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Når er det krav om uavhengig kontroll?</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  I henhold til SAK10 § 14-2 er det krav om uavhengig kontroll av prosjektering av brann når tiltaket er i tiltaksklasse 2 (TKL 2) eller høyere. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med særskilte krav til brannsikkerhet.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="scale" className="mb-10">
                <div className="relative h-64 lg:h-80 rounded-[10px] overflow-hidden border border-brand-gray">
                  <Image
                    src="/images/service-uavhengig-kontroll.jpg"
                    alt="Uavhengig kontroll av brannkonsept på byggeplass"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonseptets overensstemmelse med TEK17 og Veiledning til TEK17',
                    'Valg av risikoklasse og brannklasse',
                    'Branncelleinndeling og seksjoneringer',
                    'Rømningsveier og røykventilasjon',
                    'Krav til branntekniske installasjoner',
                    'Branntegningenes nøyaktighet og fullstendighet',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, title: 'Uavhengig gjennomgang', desc: 'Grundig kontroll av hele brannkonseptet av en erfaren brannrådgiver.' },
                    { icon: CheckCircle, title: 'Skriftlig kontrollrapport', desc: 'Detaljert rapport med funn, avvik og anbefalinger.' },
                    { icon: ShieldCheck, title: 'Erklæring om ansvarsrett', desc: 'Vi erklærer ansvarsrett som uavhengig kontrollerende for brann.' },
                    { icon: CheckCircle, title: 'Nøytral part', desc: 'Vi selger ingen produkter og har ingen interesser i valg av løsning.' },
                  ].map((item, i) => (
                    <div key={i} className="border border-brand-gray rounded-[10px] p-5 flex items-start gap-3">
                      <item.icon size={20} className="text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-brand-black mb-1 text-sm">{item.title}</h3>
                        <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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

            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="border border-brand-gray rounded-[10px] p-8">
                  <h3 className="font-bold text-brand-black text-xl mb-3">Trenger du UK brann?</h3>
                  <p className="text-brand-darkgray text-sm mb-6 leading-relaxed">
                    Send oss brannkonseptet, så gir vi deg et fastpristilbud på kontrollen.
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
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
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
              Trenger prosjektet ditt UK brann?
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Send oss brannkonseptet
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
