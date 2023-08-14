import styled from 'styled-components'

export const CounterContainer = styled.input`
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
`
