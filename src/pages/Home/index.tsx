import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from '@phosphor-icons/react'

import { Heading, Hero, HeroContent, Info } from './styles'

export function Home() {
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>
                Encontre o café perfeito <br /> para qualquer hora do dia
              </h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a{' '}
                <br /> qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCartIcon size={32} weight="fill" />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <PackageIcon size={32} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <TimerIcon size={32} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <CoffeeIcon size={32} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>
    </div>
  )
}
