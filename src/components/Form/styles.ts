import styled from 'styled-components'
import { Container } from '../../styles/components'

export const FormContainer = styled(Container)`
  margin-bottom: 3rem;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  color: ${({ theme }) => theme['base-subtitle']};
`

export const Number = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
`

export const Input = styled.input`
  padding: 0.83125rem 1rem;
  width: 100%;

  color: ${({ theme }) => theme['base-title']};

  border: 1px solid ${({ theme }) => theme['base-border']};
  border-radius: 6px;

  background: ${({ theme }) => theme['base-input']};

  margin-top: 0.75rem;
`
