import { createContext, useContext } from 'react'
import { useTheme } from '../hooks/useTheme.js'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)