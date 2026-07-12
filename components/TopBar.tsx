import { Phone, Mail } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-brand-white text-sm py-2 border-b border-brand-orange/30">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:+4740051437"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Phone size={13} />
            <span>+47 400 51 437</span>
          </a>
          <a
            href="mailto:post@harstadbrannkonsult.no"
            className="hidden sm:flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Mail size={13} />
            <span>post@harstadbrannkonsult.no</span>
          </a>
        </div>
      </div>
    </div>
  )
}
