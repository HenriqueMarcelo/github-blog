import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Info, LinksHolder, PostHeaderContainer, Title } from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <div>
        <LinksHolder>
          <Link to={'..'} className="link">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <a className="link">
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </LinksHolder>
        <Title>JavaScript data types and data structures</Title>
        <Info>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            henriquem
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </Info>
      </div>
    </PostHeaderContainer>
  )
}
