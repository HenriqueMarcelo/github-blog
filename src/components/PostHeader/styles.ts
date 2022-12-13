import styled from 'styled-components'
import { Container } from '../../styles/components'

export const PostHeaderContainer = styled(Container)`
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -5.5rem;
  margin-bottom: 4.5rem;

  & > * {
    width: 100%;
  }
`

export const LinksHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  margin-bottom: 1.25rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme['base-title']};

  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme['base-label']};
  }
`

// Add

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme['base-title']};
`
