import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 768px) {
      gap: 0.5rem;
    }
  }
`

export const BaseNavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  gap: 0.25rem;

  @media (max-width: 768px) {
    padding: 0.25rem;
    font-size: 0.75rem;
  }

  a {
    display: flex;
    align-items: center;
  }
`

export const LocationContainer = styled(BaseNavLinksContainer)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ShoppingCartContainer = styled(BaseNavLinksContainer)`
  background: ${(props) => props.theme['yellow-light']};
  position: relative;

  & > span {
    line-height: 0;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.045rem;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }

  a {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
