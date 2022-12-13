import { ThemeProvider } from 'styled-components'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Container, PostCardContainer } from './styles/components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Profile />
      <Form />
      <PostCardContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardContainer>
    </ThemeProvider>
  )
}
