import type { SpotifyStreamingRecord } from './types'

function isSpotifyStreamingRecord(value: unknown): value is SpotifyStreamingRecord {
    if (typeof value !== 'object' || value === null) {
        return false
    }
    const record = value as Record<string, unknown>
    return (
        typeof record.ts === 'string' &&
        typeof record.platform === 'string' &&
        typeof record.ms_played === 'number' &&
        typeof record.conn_country === 'string' &&
        typeof record.skipped === 'boolean'
    )
}

export function parseStreamingRecord(contents: string,): SpotifyStreamingRecord[] {
    const data: unknown = JSON.parse(contents)

    if (!Array.isArray(data)) {
        throw new Error('Invalid data format: expected an array of records')
    }

    const invalidIndex = data.findIndex((record) => !isSpotifyStreamingRecord(record))
    if (invalidIndex !== -1) {
        throw new Error(`Invalid record at index ${invalidIndex}`)
    }

    return data
}