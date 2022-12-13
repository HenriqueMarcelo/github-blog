import { PostHeader } from '../../components/PostHeader'
import { PostContent } from './styles'

export function Post() {
  return (
    <article>
      <PostHeader />
      <PostContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        maxime, esse dolorem velit iure magnam voluptate quia ipsum quos fugit
        corporis iusto nobis? Quibusdam perspiciatis id neque accusantium
        asperiores. Deserunt!
      </PostContent>
    </article>
  )
}
