import { Date, Header, PostCardContainer, Text, Title } from './styles'

export function PostCard() {
  return (
    <PostCardContainer>
      <Header>
        <Title>JavaScript data types and data structures</Title>
        <Date>Há 1 dia</Date>
      </Header>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        deserunt numquam veniam! Sint consequuntur magnam cumque enim iusto
        quibusdam quam dolor saepe nesciunt. Quas esse iure dicta, est, tenetur
        voluptates dolor expedita ipsa cupiditate nam impedit. Error rem
        explicabo sequi libero accusamus nulla velit culpa odit rerum
        exercitationem corrupti distinctio pariatur officiis, similique quis
        nesciunt consequuntur debitis adipisci quam fugiat.
      </Text>
    </PostCardContainer>
  )
}
