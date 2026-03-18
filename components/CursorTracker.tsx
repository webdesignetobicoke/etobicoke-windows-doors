'use client'
import { useEffect } from 'react'

export default function CursorTracker() {
  useEffect(() => {
    const cursor = document.getElementById('ew-cursor')
    const ring   = document.getElementById('ew-ring')
    if (!cursor || !ring) return
    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top  = e.clientY + 'px'
      }, 60)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="ew-cursor" className="cursor hidden md:block" />
      <div id="ew-ring"   className="cursor-ring hidden md:block" />
    </>
  )
}
