import { useState } from 'react'

export const usePasswordMode = (initialValue: boolean = true) => {
  const [mode, setMode] = useState(initialValue)

  const toggleMode = () => {
    setMode(!mode)
  }

  return { mode, toggleMode }
}
