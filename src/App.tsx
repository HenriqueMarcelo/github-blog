import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Profile />
    </ThemeProvider>
  )
}
