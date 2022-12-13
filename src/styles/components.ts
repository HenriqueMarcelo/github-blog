import styled from 'styled-components'

export const Container = styled.section`
  max-width: 864px;
  margin: 0 auto;
`

export const PostCardContainer = styled(Container)`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`
