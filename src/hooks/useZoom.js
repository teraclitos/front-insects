import { useState } from 'react'

export const useZoom = () => {
  const [zoomed, setZoomed] = useState([false, false])
  const [position, setPosition] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }])
  const handleZoomToggle = (index) => {
    const newZoomed = structuredClone(zoomed)
    newZoomed[index] = !newZoomed[index]
    setZoomed(newZoomed)
  }
  const handleMouseMove = (e, index) => {
    if (!zoomed[index]) return
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    const newPosition = structuredClone(position)
    newPosition[index] = { x, y }
    setPosition(newPosition)
  }

  return { zoomed, position, handleMouseMove, handleZoomToggle }
}
