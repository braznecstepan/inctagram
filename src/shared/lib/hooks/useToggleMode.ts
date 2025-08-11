import { useState } from 'react'

export const useToggleMode = (initValue: boolean = false) => {
  const [mode, setMode] = useState(initValue)

  const toggleMode = () => {
    setMode(!mode)
  }

  return { mode, toggleMode }
}
