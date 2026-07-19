import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Om Brannkonsult AS | Sentralt godkjent brannrådgiver',
  description:
    'Sentralt godkjent brannrådgiverfirma i Harstad med over 1200 prosjekter siden 2013. Vi tilbyr brannkonsept, brannprosjektering og branninspeksjon i Sør-Troms.',
  path: '/om-oss',
})

const process = [
  { step: '1', title: 'Du tar kontakt', desc: 'Fortell oss om adressen, byggetypen og hva saken gjelder.' },
  { step: '2', title: 'Vi regner ut fastpris', desc: 'Skriftlig tilbud i hånden innen 24 timer — ingen timepris.' },
  { step: '3', title: 'Du bestiller', desc: 'Bekreft oppdraget, så setter vi i gang.' },
  { step: '4', title: 'Vi jobber med saken', desc: 'Brannrådgiverne våre utarbeider dokumentasjonen din.' },
  { step: '5', title: 'Du får leveransen', desc: 'Ferdig dokumentasjon, klar til bruk i byggesaken.' },
]

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Hjem', path: '/' },
        { name: 'Om oss', path: '/om-oss' },
      ])} />

      {/* Header */}
      <section className="bg-brand-lightgray py-16 lg:py-20 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <span>Om oss</span>
          </div>
          <div className="hero-2 bg-brand-white border border-brand-gray rounded-[10px] p-8 lg:p-10 flex gap-6">
            <div className="w-1 bg-brand-orange rounded-full shrink-0" />
            <div>
              <h1 className="text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
                Om Brannkonsult AS
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Sentralt godkjent brannrådgiverfirma med over 1200 prosjekter siden 2013.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-6">Vår bakgrunn</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Vi er et spesialisert brannprosjekteringsfirma representert i Harstad, og vi tar oppdrag over hele landet. Vår virksomhet har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Siden oppstart i 2013 har vi vært involvert i over 1200 forskjellige brannprosjekter — fra små garasjer og enkle tilbygg til store leilighetsbygg og næringseiendommer.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Harstad er Nord-Norges nest største by, historisk formet av skipsfart, fiskeri og sin rolle som servicebase for offshore olje- og gassvirksomhet. Bysentrum blander eldre trehusbebyggelse nær havnen med moderne industri- og næringsbygg, og nærliggende Trondenes har flere viktige kulturminner. Vi hjelper private, arkitekter, skipsfarts- og industribedrifter og utbyggere med brannkonsept og brannprosjektering i hele Harstad og Sør-Troms.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '2013', label: 'Etablert' },
                  { number: '1200+', label: 'Prosjekter' },
                  { number: 'TKL 1+2', label: 'Godkjenning' },
                  { number: '5', label: 'Brannrådgivere' },
                ].map((stat, i) => (
                  <div key={i} className="border border-brand-gray rounded-[10px] p-5 text-center">
                    <div className="text-brand-orange font-black text-2xl mb-1">{stat.number}</div>
                    <div className="text-brand-darkgray text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:w-1/2">
              <div className="relative rounded-[10px] overflow-hidden h-80 lg:h-96 border border-brand-gray">
                <Image
                  src="/images/om-oss.jpg"
                  alt="Brannkonsult AS team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-brand-black text-3xl font-black mb-5">Sentralt godkjent foretak</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Sentral godkjenning fra Direktoratet for byggkvalitet (DiBK) er en frivillig, nasjonal godkjenningsordning som dokumenterer at foretaket har tilstrekkelig kompetanse og kvalitetssystem for å utøve sine oppgaver i byggesaker.
              </p>
              <ul className="space-y-3">
                {[
                  'Dokumentert faglig kompetanse innen brannprosjektering',
                  'Ansvarsforsikring som gir deg trygghet',
                  'Godkjent kvalitetssystem',
                  'Referanseprosjekter evaluert av DiBK',
                  'Kan erklære ansvarsrett overfor kommunen',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                    <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150} variant="scale" className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/sentralt-godkjent.png"
                alt="Sentralt godkjent"
                width={250}
                height={100}
                className="object-contain"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nøytral rådgiver */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl border border-brand-gray rounded-[10px] p-8 lg:p-10">
            <h2 className="text-brand-black text-3xl font-black mb-5">Nøytral rådgiver</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Brannkonsult AS selger ingen produkter og tilbyr ingen håndverkertjenester. Vi er utelukkende en rådgivende part — det sikrer at rådet vi gir alltid er i ditt beste interesse, og ikke påvirket av salgsinteresser.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Mange av kundene våre er arkitekter og entreprenører som setter pris på at vi er lett tilgjengelige og raskt kan svare på spørsmål underveis i prosjektet — uten ekstra kostnad.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-brand-black text-3xl font-black">Vår prosess</h2>
          </ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100} className="flex-1 border border-brand-gray rounded-[10px] p-6 text-center relative bg-brand-white">
                <div className="w-12 h-12 rounded-[8px] bg-brand-orange text-brand-white font-black text-lg flex items-center justify-center mb-4 mx-auto">
                  {p.step}
                </div>
                <h3 className="font-bold text-brand-black mb-2">{p.title}</h3>
                <p className="text-brand-darkgray text-sm leading-relaxed">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact box */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand-dark rounded-[10px] border-t-2 border-brand-orange p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-3">
                  Ta kontakt med oss
                </h2>
                <div className="space-y-2 text-brand-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <a href="tel:+4740051437" className="hover:text-brand-orange transition-colors">+47 400 51 437</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <a href="mailto:post@harstadbrannkonsult.no" className="hover:text-brand-orange transition-colors">post@harstadbrannkonsult.no</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Harstad, Sør-Troms</span>
                  </div>
                </div>
              </div>
              <Link
                href="/kontakt-oss"
                className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200 whitespace-nowrap"
              >
                Send forespørsel
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
