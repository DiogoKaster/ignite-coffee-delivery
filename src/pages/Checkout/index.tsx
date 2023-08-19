import { useContext } from 'react'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutResume } from './components/CheckoutResume'
import { CheckoutContainer, CheckoutMainContainer } from './styles'
import { StoreContext } from '../../contexts/StoreContext'

interface RequestDataCycle {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  typeOfPayment: string
  totalToPay: number
}

export function Checkout() {
  const { addRequestData } = useContext(StoreContext)

  function handleSubmitRequestData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const data: RequestDataCycle = {
      cep: formData.get('cep') as string,
      rua: formData.get('rua') as string,
      numero: formData.get('numero') as string,
      complemento: formData.get('complemento') as string,
      bairro: formData.get('bairro') as string,
      cidade: formData.get('cidade') as string,
      uf: formData.get('uf') as string,
      typeOfPayment: formData.get('typeOfPayment') as string,
      totalToPay: parseFloat(formData.get('totalToPay') as string),
    }

    addRequestData(data)
  }

  return (
    <CheckoutContainer onSubmit={handleSubmitRequestData}>
      <CheckoutMainContainer>
        <CheckoutForm />
      </CheckoutMainContainer>
      <CheckoutMainContainer>
        <CheckoutResume />
      </CheckoutMainContainer>
    </CheckoutContainer>
  )
}
