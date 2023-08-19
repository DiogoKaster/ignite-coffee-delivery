import styled from 'styled-components'

export const CheckoutFilledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  margin: 3rem 10rem;
  padding: 3rem;
`

export const CheckoutFilledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const CheckoutFilledTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  line-height: 130%;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const CheckoutFilledInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme['gray-200']} transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
`

export const CheckoutFilledImage = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    max-width: 35rem;
    max-height: 35rem;
  }
`
