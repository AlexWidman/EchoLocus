import { listeningHistory } from './data/mockData'

function App() {
  return (
    <main>
      <h1>EchoLocus</h1>
      <p>Your listening history, explored.</p>

      <h2>Listening Events</h2>

      <ul>
        {listeningHistory.map((event) => (
          <li key={event.timestamp}>
            {event.trackName} - {event.artistName}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App