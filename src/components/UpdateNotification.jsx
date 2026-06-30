import React, { useState, useEffect } from 'react'

const UpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false)
  const [waitingWorker, setWaitingWorker] = useState(null)

  useEffect(() => {
    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        // Check if there's a waiting worker
        if (registration.waiting) {
          setWaitingWorker(registration.waiting)
          setShowUpdate(true)
        }
      })

      // Listen for new service worker
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })
    }
  }, [])

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' })
      setShowUpdate(false)
    }
  }

  if (!showUpdate) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#2563eb',
      color: 'white',
      padding: '14px 24px',
      borderRadius: '12px',
      zIndex: 9999,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: '0.9rem'
    }}>
      <i className="bi bi-arrow-repeat"></i>
      <span>New version available!</span>
      <button
        onClick={handleUpdate}
        style={{
          background: 'white',
          color: '#2563eb',
          border: 'none',
          padding: '6px 16px',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Update Now
      </button>
    </div>
  )
}

export default UpdateNotification