import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PostContext } from '../../contexts/PostsContext'
import { FormContainer, Input, Number, Title } from './styles'

interface FormProps {
  query?: string
}

export function Form() {
  const { register, handleSubmit } = useForm()

  const { posts, fetchPosts } = useContext(PostContext)

  function handleSearchPost({ query }: FormProps) {
    if (query) {
      fetchPosts(query)
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleSearchPost)}>
        <div className="justify-content-between">
          <Title>Publicações</Title>
          <Number>{posts.length} publicações</Number>
        </div>
        <Input placeholder="Buscar conteúdo" {...register('query')} />
      </form>
    </FormContainer>
  )
}
