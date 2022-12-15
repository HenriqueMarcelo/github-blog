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

  async function fatchProfile(userName: string) {
    const response = await api.get(`/users/${userName}`)

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
    console.log('Fatch API')
    fatchProfile(githubUsername)
  }, [])

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  )
}
