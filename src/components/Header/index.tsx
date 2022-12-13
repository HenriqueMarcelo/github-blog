import { HeaderContainer, LogoHolder } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LogoHolder>
        <img src={logo} />
      </LogoHolder>
    </HeaderContainer>
  )
}
