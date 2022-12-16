import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { PostHeader } from '../../components/PostHeader'
import { getPostFromAPI, PostSummary } from '../../contexts/PostsContext'
import { PostContent } from './styles'
import ReactMarkdown from 'react-markdown'

import 'github-markdown-css/github-markdown-dark.css'

export function Post() {
  const { postNumber } = useParams()
  const { state } = useLocation()
  const [post, setPost] = useState({} as PostSummary)

  useEffect(() => {
    if (state.post) {
      setPost(state.post)
    } else {
      ;(async function () {
        setPost(await getPostFromAPI(String(postNumber)))
      })()
    }
  }, [postNumber, state.post])

  return (
    <article>
      <PostHeader post={post} />
      <PostContent className="">
        <div className="markdown-body">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </PostContent>
    </article>
  )
}
