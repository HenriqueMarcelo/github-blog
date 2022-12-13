import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Bio,
  ImageHolder,
  Info,
  Name,
  NameHolder,
  ProfileContainer,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ImageHolder>
        <img src="https://via.placeholder.com/150" />
      </ImageHolder>
      <div>
        <NameHolder>
          <Name>Marcelo Henrique</Name>
          <a>
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameHolder>
        <Bio>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ex aut
          doloremque ut et in facilis repudiandae, esse odit repellat quo.
        </Bio>
        <Info>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            henriquem
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Kursi
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </Info>
      </div>
    </ProfileContainer>
  )
}
