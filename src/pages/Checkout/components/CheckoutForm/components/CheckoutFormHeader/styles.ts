import { styled } from 'styled-components'

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
}

interface IconProps {
  color: keyof typeof ICON_COLORS
}

export const CheckoutFormHeaderContainer = styled.div<IconProps>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme[ICON_COLORS[props.color]]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    h3 {
      font-size: 1rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
