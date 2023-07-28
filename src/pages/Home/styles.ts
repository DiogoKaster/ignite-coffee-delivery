import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem;
  gap: 3.375rem;
  flex-shrink: 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeList = styled.ul``
