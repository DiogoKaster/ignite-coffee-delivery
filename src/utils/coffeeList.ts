/* eslint-disable prettier/prettier */
import Americano from '../assets/coffeeImages/americano.svg'
import Arabe from '../assets/coffeeImages/arabe.svg'
import CafeComLeite from '../assets/coffeeImages/cafecomleite.svg'
import CafeGelado from '../assets/coffeeImages/cafegelado.svg'
import Capuccino from '../assets/coffeeImages/capuccino.svg'
import ChocolateQuente from '../assets/coffeeImages/chocolatequente.svg'
import Cubano from '../assets/coffeeImages/cubano.svg'
import Expresso from '../assets/coffeeImages/expresso.svg'
import ExpressoCremoso from '../assets/coffeeImages/expressocremoso.svg'
import Havaiano from '../assets/coffeeImages/havaiano.svg'
import Irlandes from '../assets/coffeeImages/irlandes.svg'
import Latte from '../assets/coffeeImages/latte.svg'
import Mochaccino from '../assets/coffeeImages/mochaccino.svg'
import Macchiato from '../assets/coffeeImages/macchiato.svg'

export const coffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    categories: ['tradicional'],
    price: '9.90',
    imgSource: Expresso,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['tradicional'],
    price: '9.90',
    imgSource: Americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    categories: ['tradicional'],
    price: '9.90',
    imgSource: ExpressoCremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['tradicional', 'gelado'],
    price: '9.90',
    imgSource: CafeGelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['tradicional', 'com leite'],
    price: '9.90',
    imgSource: CafeComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    categories: ['tradicional', 'com leite'],
    price: '9.90',
    imgSource: Latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: '9.90',
    imgSource: Capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['tradicional', 'com leite'],
    price: '9.90',
    imgSource: Macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: '9.90',
    imgSource: Mochaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    categories: ['especial', 'com leite'],
    price: '9.90',
    imgSource: ChocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['especial', 'alcoólico', 'gelado'],
    price: '9.90',
    imgSource: Cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['especial', 'alcoólico', 'gelado'],
    price: '9.90',
    imgSource: Havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['especial'],
    price: '9.90',
    imgSource: Arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['especial', 'alcoólico'],
    price: '9.90',
    imgSource: Irlandes,
  },
]
