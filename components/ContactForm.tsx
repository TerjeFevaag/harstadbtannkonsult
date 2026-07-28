'use client'

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { upload } from '@vercel/blob/client'
import { CheckCircle, Paperclip, X } from 'lucide-react'
import { ALLOWED_ATTACHMENT_TYPES, MAX_FILES, MAX_FILE_SIZE_BYTES, BLOB_PATH_PREFIX } from '@/lib/attachments'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function formatBytes(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function validateFiles(list: File[]): string {
  if (list.length > MAX_FILES) {
    return `Du kan laste opp maks ${MAX_FILES} filer.`
  }
  const invalidType = list.find((file) => !ALLOWED_ATTACHMENT_TYPES.includes(file.type))
  if (invalidType) {
    return `${invalidType.name} har et filformat vi ikke støtter. Bruk PDF, JPG, PNG eller WEBP.`
  }
  const tooLarge = list.find((file) => file.size > MAX_FILE_SIZE_BYTES)
  if (tooLarge) {
    return `${tooLarge.name} er for stor. Maks ${formatBytes(MAX_FILE_SIZE_BYTES)} per fil.`
  }
  return ''
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [uploadProgress, setUploadProgress] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function syncFileInput(list: File[]) {
    if (!fileInputRef.current) return
    const dataTransfer = new DataTransfer()
    list.forEach((file) => dataTransfer.items.add(file))
    fileInputRef.current.files = dataTransfer.files
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const list = Array.from(event.target.files ?? [])
    const error = validateFiles(list)
    setFileError(error)
    setFiles(error ? [] : list)
    if (error) {
      syncFileInput([])
    }
  }

  function removeFile(index: number) {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    setFileError('')
    syncFileInput(updated)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (fileError) return

    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const vedlegg: { url: string; filename: string }[] = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setUploadProgress(`Laster opp fil ${i + 1} av ${files.length}…`)
        const blob = await upload(`${BLOB_PATH_PREFIX}${Date.now()}-${file.name}`, file, {
          access: 'public',
          handleUploadUrl: '/api/vedlegg-upload',
        })
        vedlegg.push({ url: blob.url, filename: file.name })
      }
      setUploadProgress('')

      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          navn: formData.get('navn'),
          epost: formData.get('epost'),
          telefon: formData.get('telefon'),
          prosjekttype: formData.get('prosjekttype'),
          melding: formData.get('melding'),
          vedlegg,
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(data?.error || 'Noe gikk galt. Prøv igjen senere.')
        return
      }

      setStatus('success')
      form.reset()
      setFiles([])
    } catch {
      setStatus('error')
      setUploadProgress('')
      setErrorMessage('Kunne ikke sende meldingen. Sjekk nettforbindelsen og prøv igjen.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-brand-gray rounded-[10px] p-8 text-center">
        <CheckCircle size={40} className="text-brand-orange mx-auto mb-4" />
        <h3 className="font-bold text-brand-black text-lg mb-2">Takk for din henvendelse!</h3>
        <p className="text-brand-darkgray text-sm">
          Vi har mottatt meldingen din og svarer innen 24 timer.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="+47 000 00 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      <div>
        <label htmlFor="vedlegg" className="block text-sm font-bold text-brand-black mb-1.5">
          Vedlegg (valgfritt)
        </label>
        <label
          htmlFor="vedlegg"
          className="flex items-center gap-2 w-full px-4 py-3 border border-dashed border-brand-gray rounded-[10px] text-brand-darkgray text-sm cursor-pointer hover:border-brand-orange transition-colors"
        >
          <Paperclip size={16} className="shrink-0" />
          Last opp tegninger eller bilder (PDF, JPG, PNG)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          id="vedlegg"
          name="vedlegg"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="sr-only"
        />
        <p className="text-xs text-brand-darkgray mt-1.5">
          Maks {MAX_FILES} filer, {formatBytes(MAX_FILE_SIZE_BYTES)} per fil.
        </p>

        {fileError && (
          <p role="alert" className="text-sm text-brand-red mt-2">
            {fileError}
          </p>
        )}

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between gap-2 px-3 py-2 border border-brand-gray rounded-[8px] text-sm"
              >
                <span className="truncate text-brand-black">
                  {file.name}{' '}
                  <span className="text-brand-darkgray">({formatBytes(file.size)})</span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-brand-darkgray hover:text-brand-orange shrink-0"
                  aria-label={`Fjern ${file.name}`}
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-brand-red">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? uploadProgress || 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
