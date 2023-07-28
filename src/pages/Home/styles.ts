import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem 5rem 10rem;
  gap: 3.375rem;
  flex-shrink: 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`
