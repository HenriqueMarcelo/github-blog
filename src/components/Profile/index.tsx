import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'
import {
  Bio,
  ImageHolder,
  Info,
  Name,
  NameHolder,
  ProfileContainer,
} from './styles'

export function Profile() {
  const { profile } = useContext(ProfileContext)

  const isLoading = !profile.name

  return (
    <ProfileContainer isLoading={isLoading}>
      <ImageHolder>
        <img
          src={profile?.avatar_url || 'https://via.placeholder.com/150'}
          width="150"
        />
      </ImageHolder>
      <div>
        <NameHolder>
          <Name>{profile?.name || 'Lorem ipsum dolor'}</Name>
          <a
            className="link"
            href={profile?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameHolder>
        <Bio>
          {profile?.bio ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumend inventore laudantium, veniam illo'}
        </Bio>
        <Info>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile?.login || 'Lorem ipsum'}
          </span>
          {profile?.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profile.company}
            </span>
          )}
          {profile?.followers && (
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {profile.followers} seguidores
            </span>
          )}
        </Info>
      </div>
    </ProfileContainer>
  )
}
