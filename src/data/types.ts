// Extended listening data from Spotify
export type SpotifyStreamingRecord = {
  ts: string
  platform: string
  ms_played: number
  conn_country: string

  master_metadata_track_name: string | null
  master_metadata_album_artist_name: string | null
  master_metadata_album_album_name: string | null

  spotify_track_uri: string | null

  episode_name: string | null
  episode_show_name: string | null
  spotify_episode_uri: string | null

  audiobook_title: string | null
  audiobook_uri: string | null
  audiobook_chapter_uri: string | null
  audiobook_chapter_title: string | null

  reason_start: string
  reason_end: string

  shuffle: boolean
  skipped: boolean
  offline: boolean
  offline_timestamp: number | null
  incognito_mode: boolean
}

// Data relevant for EchoLocus, picked out from the extended listening data
export type ListeningEvent = {
  timestamp: Date
  contentType: 'track' | 'podcast' | 'audiobook' | 'unknown'

  platform: string
  country: string
  msPlayed: number
  skipped: boolean

  trackName: string | null
  artistName: string | null
  albumName: string | null
  trackUri: string | null

  episodeName: string | null
  showName: string | null
  episodeUri: string | null

  audiobookTitle: string | null
  audiobookChapterTitle: string | null
}