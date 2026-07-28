import { NextRequest, NextResponse } from 'next/server'
import { list, del } from '@vercel/blob'
import { BLOB_PATH_PREFIX } from '@/lib/attachments'

const RETENTION_DAYS = 30

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000
  let deleted = 0
  let cursor: string | undefined

  do {
    const result = await list({ prefix: BLOB_PATH_PREFIX, cursor, limit: 100 })
    const stale = result.blobs.filter((blob) => new Date(blob.uploadedAt).getTime() < cutoff)
    if (stale.length > 0) {
      await del(stale.map((blob) => blob.url))
      deleted += stale.length
    }
    cursor = result.cursor
  } while (cursor)

  return NextResponse.json({ deleted })
}
