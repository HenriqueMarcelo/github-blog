import styled from 'styled-components'

export const PostCardContainer = styled.a`
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  cursor: pointer;

  padding: 2rem;
`

export const Header = styled.header`
  display: flex;
  margin-bottom: 1.25rem;
  gap: 1rem;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-title']};
`

export const Date = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};

  white-space: nowrap;
`

export const Text = styled.p`
  color: ${({ theme }) => theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
