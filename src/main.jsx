import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import custom styles
import './index.css'

// Register service worker for offline support with better error handling
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Only register in production or when explicitly enabled
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope)
      })
      .catch((error) => {
        // Only log in development if it's not the expected MIME type error
        if (error.message && !error.message.includes('unsupported MIME type')) {
          console.error('Service Worker registration failed:', error)
        } else {
          console.info('Service Worker not available in development mode')
        }
      })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)