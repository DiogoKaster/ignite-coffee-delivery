import { styled } from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 40rem;
  gap: 2rem;
  padding: 2.5rem 10rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
  }
`

export const CheckoutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
