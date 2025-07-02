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
import { QuantityInput } from '../QuantityInput'

type CoffeeProps = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CoffeeProps) {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput />

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
