import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll av brann i Harstad | Brannkonsult AS',
  description:
    'Uavhengig kontroll (UK) av brannkonsept i Harstad. Sentralt godkjent foretak. Vi gjennomgår brannkonsept, branntegninger og løsningsvalg mot TEK17. Fast pris.',
  alternates: { canonical: 'https://www.harstadbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll (UK) er en obligatorisk kvalitetssikring der en uavhengig part kontrollerer at brannprosjekteringen er utført i henhold til gjeldende forskrifter. Kontrollen utføres av et firma uten tilknytning til det som har prosjektert.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om UK brann når prosjekteringen av brann utføres i tiltaksklasse 2 (TKL 2) eller høyere, i henhold til SAK10. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med mer enn 2 etasjer.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Kostnaden avhenger av prosjektets omfang og kompleksitet. Vi gir fastpristilbud etter gjennomgang av brannkonseptet. Ta kontakt med oss for et uforpliktende estimat.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja — det er faktisk et krav at den som utfører UK ikke er den samme som har prosjektert. Vi kan ta på oss uavhengig kontroll av brannkonsept utarbeidet av andre rådgivere.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
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
                Uavhengig kontroll av brannkonsept i Harstad
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Krav om UK brann? Vi gjennomgår brannkonseptet og utfører uavhengig kontroll for byggesaker i Harstad og Sør-Troms.
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
                  I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet. Dette gir økt trygghet, reduserer risiko for feil og bidrar til en mer forutsigbar byggeprosess.
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
                    Ta kontakt for uforpliktende tilbud på uavhengig kontroll av brannkonsept i Harstad.
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
              Kontakt oss for uavhengig kontroll i Harstad
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
