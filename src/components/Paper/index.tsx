import { PaperContainerStyled } from './styles'

interface PaperProps {
  children: React.ReactNode
  withBorder?: boolean
  withBorderRadius?: boolean
  gapSize?: number
  paddingSize?: number
  isAligned?: boolean
  imgSizeChange?: boolean
}

export function PaperContainer({
  children,
  withBorder,
  withBorderRadius,
  gapSize,
  paddingSize,
  isAligned,
  imgSizeChange,
}: PaperProps) {
  return (
    <PaperContainerStyled
      withBorder={withBorder}
      withBorderRadius={withBorderRadius}
      gapSize={gapSize}
      paddingSize={paddingSize}
      isAligned={isAligned}
      imgSizeChange={imgSizeChange}
    >
      {children}
    </PaperContainerStyled>
  )
}
