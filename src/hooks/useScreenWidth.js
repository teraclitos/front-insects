import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const updateScreenWidth = () => {
      const hasScrollbar = window.innerWidth > document.documentElement.clientWidth
      const scrollbarWidth = hasScrollbar ? window.innerWidth - document.documentElement.clientWidth : 0
      const screenWidthWithoutScrollbar = window.innerWidth - scrollbarWidth
      setScreenWidth(screenWidthWithoutScrollbar)
    }

    updateScreenWidth()

    window.addEventListener('resize', debounce(updateScreenWidth, 300))

    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  return { screenWidth }
}
