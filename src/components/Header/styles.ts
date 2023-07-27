import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
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

  a {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
