import { styled } from 'styled-components'

export const CoffeeCardCategories = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    font-family: 'Roboto';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    border-radius: 16px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CoffeeCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  label {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`

export const CoffeeCardInput = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  margin-top: 1rem;

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    display: flex;
    width: 4.5rem;
    height: 2.375rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['base-button']};
    border: 1px solid ${(props) => props.theme['base-input']};
    border-radius: 8px;
    color: ${(props) => props.theme['base-title']};
    font-family: 'Roboto';
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    display: flex;
    width: 2.375rem;
    height: 2.375rem;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border: none;
    border-radius: 8px;
  }
`

export const CoffeeCardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
  gap: 0.25rem;
  font-family: 'Roboto';
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    margin-top: 0.25rem;
  }
`
