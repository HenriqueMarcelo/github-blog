import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { PostSummary } from '../../contexts/PostsContext'
import { Info, LinksHolder, PostHeaderContainer, Title } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostHeaderProps {
  post: PostSummary
}

export function PostHeader({ post }: PostHeaderProps) {
  console.log(post.created_at)
  return (
    <PostHeaderContainer>
      <div>
        <LinksHolder>
          <Link to={'..'} className="link">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <a
            className="link"
            href={post.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </LinksHolder>
        <Title>{post.title}</Title>
        <Info>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.author}
          </span>
          <span
            title={new Intl.DateTimeFormat('pt-BR').format(post.created_at)}
          >
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.created_at &&
              formatDistanceToNow(post.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </span>
        </Info>
      </div>
    </PostHeaderContainer>
  )
}
