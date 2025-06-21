import styled from 'styled-components'
import { mixins } from '../../styles/themes/mixins'

export const Hero = styled.section`
  margin-top: 2rem;
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-height: 34rem;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  max-width: 100%;
  padding: 5.7rem 0;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`

export const CoffeeList = styled.section`
  margin: 2rem 2rem 2rem auto;

  display: flex;
  flex-direction: column;
  gap: 3.3rem;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
