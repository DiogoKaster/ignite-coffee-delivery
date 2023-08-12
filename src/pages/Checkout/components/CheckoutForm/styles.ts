import { styled } from 'styled-components'

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

export const CardsInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`
