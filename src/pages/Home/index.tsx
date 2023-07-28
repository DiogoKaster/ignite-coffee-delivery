import { Intro } from './components/Intro'
import { CoffeeList, HomeContainer } from './styles'

export function Home() {
  return (
    <div>
      <Intro />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList></CoffeeList>
      </HomeContainer>
    </div>
  )
}
