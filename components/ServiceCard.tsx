import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon?: LucideIcon
  iconImage?: string
  number?: string
  title: string
  description: string
  href: string
}

export default function ServiceCard({ icon: Icon, iconImage, number, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-brand-white rounded-[10px] border border-brand-gray border-t-4 border-t-brand-orange p-8 hover:-translate-y-1 hover:border-brand-orange transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        {number && (
          <span className="font-mono text-xs tracking-[0.2em] text-brand-darkgray uppercase">
            {number}
          </span>
        )}
        {iconImage ? (
          <img
            src={iconImage}
            alt={title}
            width={56}
            height={56}
            className="object-contain w-[56px] h-[56px] group-hover:scale-110 transition-transform duration-300"
          />
        ) : Icon ? (
          <div className="w-12 h-12 bg-brand-orange/10 rounded-[6px] flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
            <Icon size={24} className="text-brand-orange" />
          </div>
        ) : null}
      </div>
      <h3 className="font-bold text-brand-black text-xl mb-3">{title}</h3>
      <p className="text-brand-darkgray text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-6 pt-4 border-t border-brand-gray flex items-center gap-2 text-brand-orange font-bold text-sm">
        Les mer
        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
      </div>
    </Link>
  )
}
