// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import loveYouGIF from './assets/i-love-you-love-you.gif';
import GirlfriendGallery from './girlFriendGallery.jsx';
import RelationshipTimer from './RelationshipTimer.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div style={{ position: 'relative' }}>
        <h2 style={{ textAlign: 'center', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>To My Dearest Love ❤️ PRANATHI JELLA</h2>
        <img 
          src={loveYouGIF}
          alt="I Love You Hug"
          style={{ width: '80%' }}
        />

      </div>

        <RelationshipTimer />


      {/* landing title */}

      <GirlfriendGallery />
      

      {/* My sleeping beauty  */}

      {/* Lil queen  */}

      {/* Achivements together */}

      {/* OOTD snaps everyday */}

      {/* Sampradayini sudapusavi */}

      {/* funny moments */}

      {/* random pics selfies */}

      {/* only privalege to view this file Hot stuff */}

      {/* flames */}

      {/* lil cute moments */}


      {/* first meeting pic */}


      <footer style={{
      background: 'linear-gradient(to right, #fce7f3, #ffe4e6, #fce7f3)',
      // padding: '2rem',
      textAlign: 'center',
      // position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%'
    }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        💕 💝 💕
      </div>
      <p style={{ color: '#374151', fontSize: '1.1rem' }}>
        Made with <span style={{ color: '#ef4444' }}>❤️</span> by AK 😊
      </p>
      <p style={{ color: '#ec4899', fontStyle: 'italic', fontSize: '0.9rem', marginTop: '0.5rem' }}>
        For my forever Valentine ✨
      </p>
      <div style={{ marginTop: '1rem', color: '#f472b6', fontSize: '0.85rem' }}>
        ♡ You + Me = ∞ ♡
      </div>
    </footer>


    </>
  )
}

export default App
