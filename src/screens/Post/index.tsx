import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostHeader } from '../../components/PostHeader'
import { getPostFromAPI, PostSummary } from '../../contexts/PostsContext'
import { PostContent } from './styles'

export function Post() {
  const { postNumber } = useParams()
  const [post, setPost] = useState({} as PostSummary)

  useEffect(() => {
    ;(async function () {
      setPost(await getPostFromAPI(String(postNumber)))
    })()
  }, [postNumber])

  return (
    <article>
      <PostHeader post={post} />
      <PostContent>{post.body}</PostContent>
    </article>
  )
}
