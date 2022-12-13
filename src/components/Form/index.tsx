import { FormContainer, Input, Number, Title } from './styles'

export function Form() {
  return (
    <FormContainer>
      <div className="justify-content-between">
        <Title>Publicações</Title>
        <Number>6 publicações</Number>
      </div>
      <Input />
    </FormContainer>
  )
}
