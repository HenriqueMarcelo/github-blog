import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { PostProvider } from './contexts/PostsContext'
import { ProfileProvider } from './contexts/ProfileContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostProvider>
        <ProfileProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ProfileProvider>
      </PostProvider>
    </ThemeProvider>
  )
}
