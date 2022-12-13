import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem esse
        fuga consequuntur, perferendis et minus vero alias labore magni nulla
        enim consequatur. Facere voluptatum eius incidunt repellendus sequi
        ratione.
      </p>
    </ThemeProvider>
  )
}
