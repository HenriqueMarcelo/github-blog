import { PostSummary } from '../../contexts/PostsContext'
import { Date, Header, PostCardContainer, Text, Title } from './styles'

interface PostCardProps {
  post: PostSummary
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to={`post/${post.number}`}>
      <Header>
        <Title>{post.title}</Title>
        <Date>{new Intl.DateTimeFormat('pt-BR').format(post.created_at)}</Date>
      </Header>
      <Text>{post.body}</Text>
    </PostCardContainer>
  )
}
