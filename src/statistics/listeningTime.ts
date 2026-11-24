import type { ListeningEvent } from '../data/types'

export function calculateTotalListeningTime(events: ListeningEvent[]): number {
    return events.reduce((total, event) => total + event.msPlayed, 0)
}