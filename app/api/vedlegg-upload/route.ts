import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { ALLOWED_ATTACHMENT_TYPES, MAX_FILE_SIZE_BYTES, BLOB_PATH_PREFIX } from '@/lib/attachments'

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith(BLOB_PATH_PREFIX)) {
          throw new Error('Ugyldig opplastingssti.')
        }
        return {
          allowedContentTypes: ALLOWED_ATTACHMENT_TYPES,
          maximumSizeInBytes: MAX_FILE_SIZE_BYTES,
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {
        // Ingen database å logge mot — filen ryddes opp av den planlagte jobben i stedet.
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Opplasting feilet.' },
      { status: 400 }
    )
  }
}
