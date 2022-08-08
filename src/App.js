import React from 'react'
import AppRoutes from './routes/Index.routes'
import { GlobalStyle ,lightTheme, darkTheme } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import useDarkMode from "./styles/useDarkMode";
export default function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <AppRoutes theme={theme} toogleTheme={toggleTheme}/>
    </ThemeProvider>
  )
}
