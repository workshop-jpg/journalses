import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
    <h1>📘 Journalses</h1>
    <p>Login: demo@journalses.com | Password: journalses123</p>
    <p>Ini adalah dummy tampilan awal jurnal trading.</p>
    <table border="1" cellPadding="8" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
      <thead>
        <tr><th>Tanggal</th><th>Pair</th><th>Posisi</th><th>Hasil</th><th>Catatan</th></tr>
      </thead>
      <tbody>
        <tr><td>2025-07-25</td><td>EUR/USD</td><td>Buy</td><td>+50 Pips</td><td>Breakout</td></tr>
        <tr><td>2025-07-24</td><td>GBP/USD</td><td>Sell</td><td>-30 Pips</td><td>News impact</td></tr>
      </tbody>
    </table>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)