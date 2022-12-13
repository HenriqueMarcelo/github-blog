import { Form } from '../../components/Form'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { PostCardContainer } from '../../styles/components'

export function Home() {
  return (
    <>
      <Profile />
      <Form />
      <PostCardContainer>
        <PostCard to={`post/${1}`} />
        <PostCard to={`post/${1}`} />
        <PostCard to={`post/${1}`} />
        <PostCard to={`post/${1}`} />
        <PostCard to={`post/${1}`} />
        <PostCard to={`post/${1}`} />
        <PostCard to={`post/${1}`} />
      </PostCardContainer>
    </>
  )
}
