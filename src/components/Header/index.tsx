import { Link } from 'react-router-dom'
import { MapPinIcon } from '@phosphor-icons/react/dist/ssr'
import { ShoppingCartIcon } from '@phosphor-icons/react'
import { Container, Aside } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPinIcon size={22} weight="fill" />
          <span>Campina Grande, PB</span>
        </div>

        <Link to="/checkout">
          <ShoppingCartIcon size={22} weight="fill" />
          <span>2</span>
        </Link>
      </Aside>
    </Container>
  )
}
