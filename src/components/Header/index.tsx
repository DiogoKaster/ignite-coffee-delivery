import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import CoffeeLogo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeLogo} alt="Coffee Logo" />
      </NavLink>
      <nav>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <ShoppingCartContainer>
          <NavLink to="/checkout">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  )
}
