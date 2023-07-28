import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { CoffeeList, HomeContainer } from './styles'
import { coffeeList } from '../../utils/coffeeList'

export function Home() {
  return (
    <div>
      <Intro />
      <HomeContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </HomeContainer>
    </div>
  )
}
