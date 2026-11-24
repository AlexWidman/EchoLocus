import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import { importHistory } from './data/importHistory'
import type { ListeningEvent } from './data/types'
import { calculateTotalListeningTime } from './statistics/listeningTime'


function App() {
  const [listeningHistory, setListeningHistory] = useState<ListeningEvent[]>([])
  const [error, setError] = useState<string | null>(null)
  const directoryInputRef = useRef<HTMLInputElement | null>(null)

  const totalListeningTime = calculateTotalListeningTime(listeningHistory)

  useEffect(() => {
    directoryInputRef.current?.setAttribute('webkitdirectory', '')
  }, [])

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).filter((file) => file.name.toLowerCase().endsWith('.json'))
    if (files.length === 0) {
      setError('No JSON files found in selected folder.')
      return
    }
    try {
      const history = await importHistory(files)
      setListeningHistory(history)
      setError(null)
    } catch (err) {
      console.error('Error importing listening history:', error)
      setError('Failed to import listening history.')
    }
  }

  return (
    <main>
      <h1>EchoLocus</h1>
      <p>Your listening history, explored.</p>

      <h2>Import your Spotify history</h2>
        <input
          ref={directoryInputRef}
          type="file"
          accept=".json,application/json"
          multiple
          onChange={handleFileChange}
        />
      {error && <p>Error: {error}</p>}

      {listeningHistory.length > 0 && (
        <div>
          <h2> Your Listening Statistics </h2>
          <p>Total tracks listened: {listeningHistory.length}</p>
          <p>Total listening time: {Math.floor(totalListeningTime / 3600000)} hours, {Math.floor((totalListeningTime % 3600000) / 60000)} minutes and {Math.floor((totalListeningTime % 60000) / 1000)} seconds</p>
        </div>
      )}

      <h2>Listening Events</h2>
      <ul>
        {/*listeningHistory.map((event) => (
          <li key={event.timestamp.toISOString()}>
            {event.trackName} - {event.artistName}
          </li>
        ))*/}
      </ul>
    </main>
  )
}

export default App