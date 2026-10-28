import type {ListeningEvent, SpotifyStreamingRecord} from './types'

export function normalizeStreamingRecord(record: SpotifyStreamingRecord): ListeningEvent {
    let contentType: ListeningEvent['contentType'] = 'unknown'

    if (record.master_metadata_track_name !== null){
        contentType = 'track'
    } else if (record.episode_name !== null || record.spotify_episode_uri !== null) {
        contentType = 'podcast'
    } else if (record.audiobook_title !== null || record.audiobook_chapter_uri !== null || record.audiobook_chapter_title !== null) {
        contentType = 'audiobook'
    }
    return {
        timestamp: new Date(record.ts),
        contentType,

        platform: record.platform,
        country: record.conn_country,
        msPlayed: record.ms_played,
        skipped: record.skipped,

        trackName: record.master_metadata_track_name,
        artistName: record.master_metadata_album_artist_name,
        albumName: record.master_metadata_album_album_name,
        trackUri: record.spotify_track_uri,

        episodeName: record.episode_name,
        showName: record.episode_show_name,
        episodeUri: record.spotify_episode_uri,

        audiobookTitle: record.audiobook_title,
        audiobookChapterTitle: record.audiobook_chapter_title
    }
}