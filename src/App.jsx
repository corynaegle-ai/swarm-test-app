import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>
        Swarm Test App
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Testing Preview URL Routing
      </p>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)'
      }}>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{
            fontSize: '2rem',
            padding: '1rem 2rem',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Count: {count}
        </button>
      </div>
      <p style={{ marginTop: '2rem', opacity: 0.8 }}>
        {new Date().toISOString()}
      </p>
    </div>
  )
}

export default App
