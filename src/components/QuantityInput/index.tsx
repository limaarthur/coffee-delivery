import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Container } from './styles'

export function QuantityInput() {
  return (
    <Container>
      <button>
        <MinusIcon size={14} />
      </button>
      <span>3</span>
      <button>
        <PlusIcon size={14} />
      </button>
    </Container>
  )
}
