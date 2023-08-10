import { styled } from 'styled-components'
import BackgroundIntro from '../../../../assets/Background.svg'

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 35rem;
  padding: 5rem 10rem;
  gap: 3.5rem;
  background-image: url(${BackgroundIntro});
`

export const IntroMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4.5rem;
`

export const IntroTitleText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-weight: 800;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const IntroDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`
const DESCRIPTION_ITEM_BACKGROUND_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface IntroDescriptionItemProps {
  backgroundColor: keyof typeof DESCRIPTION_ITEM_BACKGROUND_COLORS
}

export const IntroDescriptionItem = styled.div<IntroDescriptionItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.25rem;

  svg {
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.theme[DESCRIPTION_ITEM_BACKGROUND_COLORS[props.backgroundColor]]};
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
  }
`

export const IntroImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 100%;
    height: 100%;
  }
`
