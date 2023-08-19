import { InfoBoxContainer } from './styles'

interface InfoBoxProps {
  children: React.ReactNode
  icon: JSX.Element
  color: 'purple' | 'yellowDark' | 'yellow'
}

export function InfoBox({ icon, color, children }: InfoBoxProps) {
  return (
    <InfoBoxContainer color={color}>
      {icon}
      <div>{children}</div>
    </InfoBoxContainer>
  )
}
