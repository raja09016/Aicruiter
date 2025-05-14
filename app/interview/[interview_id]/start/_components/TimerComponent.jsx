import React, { useEffect, useState } from 'react'

function TimerComponent() {
  const [secondsElapsed, setSecondsElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1)
    }, 1000)

    // Cleanup on unmount
    return () => clearInterval(interval)
  }, [])

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
    const secs = String(totalSeconds % 60).padStart(2, '0')
    return `${hrs}:${mins}:${secs}`
  }

  return (
    <div className="text-lg ">
      {formatTime(secondsElapsed)}
    </div>
  )
}

export default TimerComponent
