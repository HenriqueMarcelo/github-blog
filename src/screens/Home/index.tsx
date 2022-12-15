import { useContext } from 'react'
import { Form } from '../../components/Form'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { PostContext } from '../../contexts/PostsContext'
import { PostCardContainer } from '../../styles/components'

export function Home() {
  const { posts } = useContext(PostContext)

  return (
    <>
      <Profile />
      <Form />
      <PostCardContainer>
        {posts?.map((post) => (
          <PostCard post={post} key={post.number} />
        ))}
      </PostCardContainer>
    </>
  )
}
