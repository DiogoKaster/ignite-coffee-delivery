import styled from 'styled-components'

export const PriceResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 0.75rem;
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  > div:last-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
  }
`

export const ResumeButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem;
  align-self: stretch;

  color: ${(props) => props.theme.white};
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`
