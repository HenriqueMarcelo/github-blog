import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Info, LinksHolder, PostHeaderContainer, Title } from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <div>
        <LinksHolder>
          <a className="link">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>Github</span>
          </a>
          <a className="link">
            <span>Github</span>
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
