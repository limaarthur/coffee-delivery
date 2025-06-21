import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 0.2rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  span {
    padding-top: 0.2rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
