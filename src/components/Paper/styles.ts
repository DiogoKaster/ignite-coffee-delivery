import styled from 'styled-components'

interface PaperContainerStyledProps {
  withBorder?: boolean
  withBorderRadius?: boolean
  gapSize?: number
  paddingSize?: number
  isAligned?: boolean
  imgSizeChange?: boolean
}

export const PaperContainerStyled = styled.div<PaperContainerStyledProps>`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  ${(props) => props.isAligned && 'align-items: center;'}
  ${(props) => props.gapSize && `gap: ${props.gapSize}rem;`}
  ${(props) => props.paddingSize && `padding: ${props.paddingSize}rem;`}
  ${(props) => props.withBorderRadius && 'border-radius: 0.25rem;'}
  ${(props) =>
    props.withBorder &&
    `
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
  `}

  ${(props) =>
    props.imgSizeChange &&
    `img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
  }`}

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`
