import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kontakt Harstad Brannkonsult | Få uforpliktende tilbud',
  description:
    'Kontakt Harstad Brannkonsult for uforpliktende tilbud på brannkonsept og brannprosjektering i Harstad. Vi svarer innen 24 timer. Ring +47 400 51 437.',
  alternates: { canonical: 'https://www.harstadbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
      <section className="bg-brand-lightgray py-16 lg:py-20 border-b border-brand-gray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-darkgray text-sm mb-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Hjem</Link>
            <span>/</span>
            <span>Kontakt oss</span>
          </div>
          <div className="hero-2 bg-brand-white border border-brand-gray rounded-[10px] p-8 lg:p-10 flex gap-6">
            <div className="w-1 bg-brand-orange rounded-full shrink-0" />
            <div>
              <h1 className="text-brand-black text-4xl lg:text-5xl font-black max-w-2xl">
                Kontakt Harstad Brannkonsult
              </h1>
              <p className="hero-3 text-brand-darkgray text-lg mt-4 max-w-xl leading-relaxed">
                Ta kontakt for et uforpliktende tilbud. Vi svarer innen 24 timer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <ScrollReveal className="lg:w-[60%] border border-brand-gray rounded-[10px] p-8">
              <h2 className="text-brand-black text-2xl font-black mb-6">Send oss en forespørsel</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={150} className="lg:w-[40%]">
              <div className="border border-brand-gray rounded-[10px] p-8 mb-6">
                <h3 className="font-bold text-brand-black text-lg mb-6">Kontaktinformasjon</h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: 'Telefon', value: '+47 400 51 437', href: 'tel:+4740051437' },
                    { icon: Mail, label: 'E-post', value: 'post@harstadbrannkonsult.no', href: 'mailto:post@harstadbrannkonsult.no' },
                    { icon: MapPin, label: 'Adresse', value: '[Gateadresse], Harstad', href: null },
                    { icon: Clock, label: 'Åpningstider', value: 'Man–Fre 08:00–16:00', href: null },
                  ].map(({ icon: Icon, label, value, href }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-brand-gray rounded-[8px] flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-brand-darkgray text-xs mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="font-bold text-brand-black hover:text-brand-orange transition-colors text-sm">
                            {value}
                          </a>
                        ) : (
                          <p className="font-bold text-brand-black text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-brand-gray rounded-[10px] h-52 flex items-center justify-center">
                <p className="text-brand-darkgray text-sm">Kart kommer snart</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
