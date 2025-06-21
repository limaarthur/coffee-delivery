import { ShoppingCartSimpleIcon } from '@phosphor-icons/react'
import {
  Container,
  CoffeeImg,
  Tags,
  Title,
  Description,
  Control,
  Price,
  Order,
} from './styles'
import { useTheme } from 'styled-components'

export function Card() {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src="./images/coffees/expresso.png" alt="Café expresso" />

      <Tags>
        <span>tradicional</span>
      </Tags>

      <Title>Expresso Tradicional</Title>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>

        <Order>
          <button>
            <ShoppingCartSimpleIcon
              size={22}
              weight="fill"
              color={theme.colors.background}
            />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
