import { styled } from 'styled-components'

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  h2 {
    font-family: Baloo 2;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 100%;
  border-radius: 0.25rem;
  gap: 2rem;
`

export const AdressInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;

  :first-child {
    width: 20rem;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-self: stretch;
    width: 100%;
  }

  input {
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 0.25rem;
    padding: 0.75rem;
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const AdressCardsInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`
