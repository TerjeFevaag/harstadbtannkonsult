interface ReviewCardProps {
  quote: string
  author: string
  company?: string
  date?: string
}

export default function ReviewCard({ quote, author, company, date }: ReviewCardProps) {
  return (
    <div className="border-b border-brand-gray py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
      <div className="text-brand-orange text-3xl font-serif leading-none select-none shrink-0">&ldquo;</div>
      <p className="text-brand-darkgray leading-relaxed flex-1">{quote}</p>
      <div className="shrink-0 sm:w-48 sm:text-right">
        <p className="font-bold text-brand-black text-sm">{author}</p>
        {company && <p className="text-brand-darkgray text-xs">{company}</p>}
        {date && <p className="text-brand-darkgray text-xs mt-1">{date}</p>}
      </div>
    </div>
  )
}
