import styled from 'styled-components'

export const CoffeeResumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.25rem;
`
export const CoffeeResumeDetailsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    div > img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const CoffeeResumeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  > div {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  > p:first-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`
export const CoffeeResumeTrashButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  gap: 0.25rem;
  cursor: pointer;

  border: none;
  border-radius: 8px;

  font-family: 'Roboto';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme.purple};
  }

  @media (max-width: 768px) {
    height: 2rem;
    padding: 0 0.25rem;
    font-size: 0.6rem;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const CoffeeResumePrice = styled.p`
  display: flex;
  justify-content: right;
  align-items: right;
  width: 100%;
  color: ${(props) => props.theme['base-text']};
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    font-size: 0.8rem;
  }
`
