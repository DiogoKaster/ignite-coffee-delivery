import {
  IntroContainer,
  IntroDescription,
  IntroDescriptionItem,
  IntroImage,
  IntroMain,
  IntroTitleText,
} from './styles'
import CoffeeDeliveryImg from '../../../../assets/Imagem.svg'
import { ShoppingCart, Coffee, Timer, Package } from '@phosphor-icons/react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroMain>
        <IntroTitleText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </IntroTitleText>
        <IntroDescription>
          <div>
            <IntroDescriptionItem backgroundColor="yellowDark">
              <ShoppingCart weight="fill" size={32} />
              <p>Compra simples e segura</p>
            </IntroDescriptionItem>
            <IntroDescriptionItem backgroundColor="yellow">
              <Timer size={32} />
              <p>Entrega rápida e rastreada</p>
            </IntroDescriptionItem>
          </div>
          <div>
            <IntroDescriptionItem backgroundColor="baseText">
              <Package weight="fill" size={32} />
              <p>Embalagem mantém o café intacto</p>
            </IntroDescriptionItem>
            <IntroDescriptionItem backgroundColor="purple">
              <Coffee weight="fill" size={32} />
              <p>O café chega fresquinho até você</p>
            </IntroDescriptionItem>
          </div>
        </IntroDescription>
      </IntroMain>
      <IntroImage>
        <img src={CoffeeDeliveryImg} alt="" />
      </IntroImage>
    </IntroContainer>
  )
}
