import styled from 'styled-components'
import { Container } from '../../styles/components'

interface ProfileContainerProps {
  loading?: boolean
}

export const ProfileContainer = styled(Container)<ProfileContainerProps>`
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -5.5rem;
  margin-bottom: 4.5rem;

  filter: ${({ loading }) => (loading ? 'blur(15px)' : 'none')};
`

export const ImageHolder = styled.div`
  img {
    border-radius: 10px;
    line-height: 0;
  }
`

export const NameHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  margin-bottom: 0.5rem;
`

export const Name = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${({ theme }) => theme['base-title']};
`

export const Bio = styled.p`
  color: ${({ theme }) => theme['base-text']};

  margin-bottom: 1.5rem;
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
