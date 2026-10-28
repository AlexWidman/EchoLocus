import { parseStreamingRecord } from './parser'
import type { SpotifyStreamingRecord } from './types'

export async function importHistory(files: File[],): Promise<SpotifyStreamingRecord[]> {
    const histories = await Promise.all(
        files.map(async (file) => {
            try {
                const contents = await file.text()
                return parseStreamingRecord(contents)
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error'
                console.error(`Error parsing file ${file.name}:`, error)
                throw new Error(`${file.name}: ${message}`)
            }
        }),
    )
    return histories.flat()
}