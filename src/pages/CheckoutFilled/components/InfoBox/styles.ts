import styled from 'styled-components'

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
  yellow: 'yellow',
}

interface InfoBoxProps {
  color: keyof typeof ICON_COLORS
}

export const InfoBoxContainer = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    justify-items: center;

    strong {
      font-family: 'Roboto';
      font-size: 1rem;
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  svg {
    width: 2.25rem;
    height: 2.25rem;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[ICON_COLORS[props.color]]};
    border-radius: 50%;
  }
`
