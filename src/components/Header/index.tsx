import logoDesktop from '../../assets/logo-desktop.svg';
import { ButtonGetCoffee, Container, Content, ContentOptions, LogoContainer } from "./styles";


const linkOptions = [
  {
    id: 'home',
    link: '/',
    name: 'Home'    
  },
  {
    id: 'menu',
    link: '/',    
    name: 'Menu'
  },
  {
    id: 'recompensas',
    link: '/',
    name: 'Recompensas'    
  },
  {
    id: 'gift_cards',
    link: '/',
    name: 'Gift Cards'

  },
  {
    id: 'lojas',
    link: '/',
    name: 'Lojas'    
  },
]

export function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoDesktop} alt="Logo rocket purple" />
        </LogoContainer>

        <ContentOptions>
          {linkOptions.map(item => (
            <a href={item.link}>{item.name}</a>
          ))}
        </ContentOptions>

        <ButtonGetCoffee>
          Pegar meu café
        </ButtonGetCoffee>
      </Content>
    </Container>
  )
}