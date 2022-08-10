import { useState } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return [theme, toogleTheme]
}
