import { styled } from 'styled-components'

export const CardContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  background: ${(props) => props.theme['base-button']};
  flex: 1 0 0;
  border-radius: 0.375rem;
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input[type='radio']:checked + & {
    background: red;
  }

  input {
    display: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }
`
