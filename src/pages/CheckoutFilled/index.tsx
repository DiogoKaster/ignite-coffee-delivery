import { InfoBox } from './components/InfoBox'
import {
  CheckoutFilledContainer,
  CheckoutFilledImage,
  CheckoutFilledInfo,
  CheckoutFilledInfoBox,
  CheckoutFilledTitle,
} from './styles'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import Ilustration from '../../../src/assets/Illustration.svg'
import { StoreContext } from '../../contexts/StoreContext'
import { useContext } from 'react'

export function CheckoutFilled() {
  const { requestData } = useContext(StoreContext)

  return (
    <CheckoutFilledContainer>
      <CheckoutFilledInfo>
        <CheckoutFilledTitle>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </CheckoutFilledTitle>
        <CheckoutFilledInfoBox>
          <InfoBox icon={<MapPin size={22} weight="fill" />} color="purple">
            <p>
              Entrega em <strong>{requestData.rua}</strong>
            </p>
            <p>
              {requestData.bairro} - {requestData.cidade}, {requestData.uf}
            </p>
          </InfoBox>
          <InfoBox icon={<Timer size={22} weight="fill" />} color="yellow">
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </InfoBox>
          <InfoBox icon={<CurrencyDollar size={22} />} color="yellowDark">
            <p>Pagamento na entrega </p>
            <p>
              <strong>{requestData.typeOfPayment}</strong>
            </p>
          </InfoBox>
        </CheckoutFilledInfoBox>
      </CheckoutFilledInfo>
      <CheckoutFilledImage>
        <img src={Ilustration} alt="Ilustração" />
      </CheckoutFilledImage>
    </CheckoutFilledContainer>
  )
}
