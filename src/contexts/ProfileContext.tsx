import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Profile {
  id?: 'string'
  name?: 'string'
  company?: 'string'
  location?: 'string'
  avatar_url?: 'string'
  login?: 'string'
  html_url?: 'string'
  bio?: 'string'
  twitter_username?: 'string'
  public_repos?: 'string'
  followers?: 'string'
  following?: 'string'
}

interface ProfileContextType {
  profile: Profile
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState({} as Profile)

  async function fatchProfile(userName = githubUsername) {
    const response = await api.get(`/users/${userName}`)

    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // const response = {} as any
    // response.data = {
    //   login: 'HenriqueMarcelo',
    //   id: 16305348,
    //   node_id: 'MDQ6VXNlcjE2MzA1MzQ4',
    //   avatar_url: 'https://avatars.githubusercontent.com/u/16305348?v=4',
    //   gravatar_id: '',
    //   url: 'https://api.github.com/users/HenriqueMarcelo',
    //   html_url: 'https://github.com/HenriqueMarcelo',
    //   followers_url: 'https://api.github.com/users/HenriqueMarcelo/followers',
    //   following_url:
    //     'https://api.github.com/users/HenriqueMarcelo/following{/other_user}',
    //   gists_url: 'https://api.github.com/users/HenriqueMarcelo/gists{/gist_id}',
    //   starred_url:
    //     'https://api.github.com/users/HenriqueMarcelo/starred{/owner}{/repo}',
    //   subscriptions_url:
    //     'https://api.github.com/users/HenriqueMarcelo/subscriptions',
    //   organizations_url: 'https://api.github.com/users/HenriqueMarcelo/orgs',
    //   repos_url: 'https://api.github.com/users/HenriqueMarcelo/repos',
    //   events_url:
    //     'https://api.github.com/users/HenriqueMarcelo/events{/privacy}',
    //   received_events_url:
    //     'https://api.github.com/users/HenriqueMarcelo/received_events',
    //   type: 'User',
    //   site_admin: false,
    //   name: 'Marcelo Henrique da Silva Fonseca',
    //   company: null,
    //   blog: '',
    //   location: 'Nova Friburgo',
    //   email: null,
    //   hireable: null,
    //   bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere placerat augue, pellentesque sagittis lectus. Sed feugiat maximus imperdiet. Nunc gravida',
    //   twitter_username: null,
    //   public_repos: 18,
    //   public_gists: 0,
    //   followers: 2,
    //   following: 7,
    //   created_at: '2015-12-15T12:27:05Z',
    //   updated_at: '2022-12-15T12:30:46Z',
    // }

    setProfile({
      id: response.data.id,
      name: response.data.name,
      company: response.data.company,
      location: response.data.location,
      avatar_url: response.data.avatar_url,
      login: response.data.login,
      html_url: response.data.html_url,
      bio: response.data.bio,
      twitter_username: response.data.twitter_username,
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
    })
  }

  useEffect(() => {
    console.log('Fatch API Profile')
    fatchProfile(githubUsername)
  }, [])

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  )
}
