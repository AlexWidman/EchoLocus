import type { ListeningEvent } from './types'

export const listeningHistory: ListeningEvent[] = [
  {
    timestamp: '2025-01-15T20:30:00Z',
    platform: 'Windows',
    country: 'Sweden',
    trackName: 'One Last Time',
    artistName: 'Ariana Grande',
    albumName: 'My Everything (Deluxe)',
    trackUri: 'https://open.spotify.com/track/2OlWBmSjf1aUPGLNf0UI5A?si=0d540f90a3d946e7',
    msPlayed: 197000,
    skipped: false,
  },
  {
    timestamp: '2025-01-15T20:35:00Z',
    platform: 'Windows',
    country: 'Sweden',
    trackName: 'The Search',
    artistName: 'NF',
    albumName: 'The Search',
    trackUri: 'https://open.spotify.com/track/3oLe5ZILASG8vU5dxIMfLY?si=e8f160a4ec0d48c3',
    msPlayed: 248000,
    skipped: false,
  },
  {
    timestamp: '2025-01-15T20:40:00Z',
    platform: 'Windows',
    country: 'Sweden',
    trackName: 'Wake Me Up',
    artistName: 'Avicii',
    albumName: 'True',
    trackUri: 'https://open.spotify.com/track/4h8VwCb1MTGoLKueQ1WgbD?si=192d152c830f49b2',
    msPlayed: 247000,
    skipped: true,
  },
]