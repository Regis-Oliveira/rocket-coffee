import beansLeft from '../../assets/beansLeft.png';
import beansRight from '../../assets/beansRight.png';
import rocketCoffee from '../../assets/cups.png';
import {
  BeansLeft,
  BeansRight, Container, Content, ImageCupCoffee,
  Subtitle,
  Title
} from "./styles";



export function Home() {
  const signalUp = '>';
  const signalDown = '<';

  return (
    <Container>
      <Title>Great Coffee</Title>
      <Subtitle>{signalDown}Great Code/{signalUp}</Subtitle>

      <Content>
        <BeansLeft 
          src={beansLeft} 
          alt="Image of beans of coffee"
        />
        <ImageCupCoffee 
          src={rocketCoffee} 
          alt="Image of two cups of coffee"
        />
        <BeansRight 
          src={beansRight} 
          alt="Image of beans of coffee"
        />
      </Content>
    </Container>
  )
}