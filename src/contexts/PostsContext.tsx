import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface PostSummary {
  number: string
  title: string
  body: string
  created_at: Date
}

interface PostContextType {
  posts: PostSummary[]
  fetchPosts: (query: string, userName?: string, repository?: string) => void
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME
const githubRepository = import.meta.env.VITE_GITHUB_REPOSITORY

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostSummary[]>([])

  async function fetchPosts(
    query: string,
    userName = githubUsername,
    repository = githubRepository,
  ) {
    // const response = await api.get('https://api.github.com/search/issues', {
    //   params: {
    //     q: `${query} repo:${userName}/${repository}`,
    //   },
    // })

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = {} as any
    response.data = {
      total_count: 3,
      incomplete_results: false,
      items: [
        {
          url: 'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/3',
          repository_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog',
          labels_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/3/labels{/name}',
          comments_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/3/comments',
          events_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/3/events',
          html_url: 'https://github.com/HenriqueMarcelo/github-blog/issues/3',
          id: 1498416652,
          node_id: 'I_kwDOIm-YsM5ZUAYM',
          number: 3,
          title: 'Nunc dapibus neque feugiat metus convallis',
          user: {
            login: 'HenriqueMarcelo',
            id: 16305348,
            node_id: 'MDQ6VXNlcjE2MzA1MzQ4',
            avatar_url: 'https://avatars.githubusercontent.com/u/16305348?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/HenriqueMarcelo',
            html_url: 'https://github.com/HenriqueMarcelo',
            followers_url:
              'https://api.github.com/users/HenriqueMarcelo/followers',
            following_url:
              'https://api.github.com/users/HenriqueMarcelo/following{/other_user}',
            gists_url:
              'https://api.github.com/users/HenriqueMarcelo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/HenriqueMarcelo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/HenriqueMarcelo/subscriptions',
            organizations_url:
              'https://api.github.com/users/HenriqueMarcelo/orgs',
            repos_url: 'https://api.github.com/users/HenriqueMarcelo/repos',
            events_url:
              'https://api.github.com/users/HenriqueMarcelo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/HenriqueMarcelo/received_events',
            type: 'User',
            site_admin: false,
          },
          labels: [],
          state: 'open',
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 0,
          created_at: '2022-12-15T13:14:28Z',
          updated_at: '2022-12-15T13:14:34Z',
          closed_at: null,
          author_association: 'OWNER',
          active_lock_reason: null,
          body: 'Quisque nec enim ligula. Mauris posuere fermentum ante, eget eleifend sapien dignissim ut. Aliquam eu quam non libero sagittis interdum. Nunc porta dolor sed felis dictum varius. Vestibulum molestie urna risus, eu fermentum odio placerat sit amet. Nam eu hendrerit dolor. Nullam eu lectus euismod nisl vehicula mollis. Pellentesque ac fermentum magna. Vestibulum nec leo finibus, sollicitudin nibh vel, fermentum enim. Mauris commodo ultricies enim at bibendum. Cras nec fermentum arcu, ac consequat lacus.\r\n\r\n### Cras feugiat justo id nulla ultrices, ut faucibus nulla porta. \r\n\r\nCras lobortis tellus id lacinia pellentesque. Etiam ut velit ante. Mauris ultricies et leo nec elementum. Proin eu pellentesque mi. Quisque viverra ipsum id nunc lobortis fringilla et vel nisi. Ut id rutrum justo. Nunc pulvinar libero dui, in porta risus rhoncus sit amet. Sed eget nisi ultrices, sagittis turpis at, tincidunt nisl. Etiam ut felis non leo suscipit luctus non in risus. Morbi ac turpis eget massa lacinia dictum id ac arcu. Integer ut lectus eu leo egestas hendrerit. Proin non bibendum dui. Morbi non augue ut arcu mattis pharetra nec commodo nibh. Ut vitae blandit sapien.\r\n\r\nNulla lacinia non dui quis pharetra. **Aenean egestas, urna sed fermentum porta,** massa augue volutpat felis, eget pellentesque sem ante ac elit. Morbi vitae nulla ut nibh dapibus suscipit id ut elit. Sed id pulvinar tellus, semper bibendum magna. Phasellus tempus lacinia pharetra. Donec euismod dignissim sapien et pellentesque. \r\n\r\n- [ ] Curabitur eleifend, erat nec vulputate lobortis, dui orci congue eros, \r\n- [ ] vitae auctor arcu leo ac risus. \r\n- [ ] Vivamus faucibus eleifend sapien pulvinar venenatis. \r\n- [ ] Morbi non ultricies massa. Morbi sit amet convallis libero, a tempus nisi.\r\n\r\n_Cras malesuada lectus sed sem_ consequat vehicula. Aenean pellentesque tempus velit, a efficitur urna mattis varius. Quisque vel ex ligula. Pellentesque sem metus, faucibus id ullamcorper ac, elementum at felis. Nulla scelerisque eu arcu vestibulum porttitor. In sed diam eros. Donec eleifend risus mauris, vel maximus leo gravida quis. Nullam venenatis, lectus sed semper blandit, augue tellus dapibus velit, et mollis ligula nibh id ligula.\r\n\r\n- Cras ac ante ut nibh rutrum congue sit amet in orci. Donec molestie luctus augue. \r\n- Pellentesque commodo leo finibus imperdiet semper. \r\n- Pellentesque vel lorem at leo molestie consequat. \r\n- Maecenas scelerisque lorem leo. \r\n- Quisque non condimentum elit. \r\n\r\nUt risus arcu, molestie vel tortor et, varius hendrerit sapien. Mauris posuere elit nisi. Sed a mi iaculis, efficitur risus ut, rhoncus nisl. Etiam at urna ligula. Suspendisse tincidunt nec neque sed congue. Nullam ullamcorper aliquet arcu lobortis lobortis. Suspendisse accumsan condimentum rutrum. Aenean volutpat at nunc sit amet commodo. Suspendisse imperdiet laoreet libero ut lacinia.',
          reactions: {
            url: 'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/3/reactions',
            total_count: 0,
            '+1': 0,
            '-1': 0,
            laugh: 0,
            hooray: 0,
            confused: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
          timeline_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/3/timeline',
          performed_via_github_app: null,
          state_reason: null,
          score: 1.0,
        },
        {
          url: 'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/2',
          repository_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog',
          labels_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/2/labels{/name}',
          comments_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/2/comments',
          events_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/2/events',
          html_url: 'https://github.com/HenriqueMarcelo/github-blog/issues/2',
          id: 1498413757,
          node_id: 'I_kwDOIm-YsM5ZT_q9',
          number: 2,
          title: 'Nam quis enim elementum, pharetra ante et, cursus felis',
          user: {
            login: 'HenriqueMarcelo',
            id: 16305348,
            node_id: 'MDQ6VXNlcjE2MzA1MzQ4',
            avatar_url: 'https://avatars.githubusercontent.com/u/16305348?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/HenriqueMarcelo',
            html_url: 'https://github.com/HenriqueMarcelo',
            followers_url:
              'https://api.github.com/users/HenriqueMarcelo/followers',
            following_url:
              'https://api.github.com/users/HenriqueMarcelo/following{/other_user}',
            gists_url:
              'https://api.github.com/users/HenriqueMarcelo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/HenriqueMarcelo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/HenriqueMarcelo/subscriptions',
            organizations_url:
              'https://api.github.com/users/HenriqueMarcelo/orgs',
            repos_url: 'https://api.github.com/users/HenriqueMarcelo/repos',
            events_url:
              'https://api.github.com/users/HenriqueMarcelo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/HenriqueMarcelo/received_events',
            type: 'User',
            site_admin: false,
          },
          labels: [],
          state: 'open',
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 0,
          created_at: '2022-12-15T13:12:44Z',
          updated_at: '2022-12-15T13:12:44Z',
          closed_at: null,
          author_association: 'OWNER',
          active_lock_reason: null,
          body: "Duis malesuada arcu ac sollicitudin egestas. Nulla nec elementum enim. Nam diam libero, vehicula vel lobortis eu, euismod nec elit. Mauris faucibus risus sed massa viverra mattis. Nullam at libero pulvinar metus mollis venenatis. In consequat imperdiet dolor, vel pellentesque metus feugiat id. Nulla eget nisl urna. Phasellus enim purus, imperdiet in purus sit amet, hendrerit consequat leo. Vivamus viverra eleifend mi, at semper orci porttitor eu. Duis finibus erat vel orci efficitur faucibus. Phasellus magna leo, euismod et condimentum vestibulum, vehicula quis diam.\r\n\r\n### Aenean varius non sapien cursus tincidunt. \r\n\r\nPraesent ut posuere ipsum. Suspendisse potenti. Proin id hendrerit lorem. Aenean vel dictum ante. Pellentesque ut magna feugiat, consequat leo vel, porttitor enim. Aliquam aliquam dolor non lorem dictum, non pellentesque justo elementum. Duis vitae arcu urna. Fusce urna elit, convallis vitae condimentum et, cursus id lacus. Aliquam fringilla orci sagittis venenatis gravida.\r\n\r\nCurabitur ut lorem blandit, porta arcu sed, condimentum elit. Vivamus in congue sapien. Aliquam laoreet lacinia dolor luctus lobortis. Praesent pellentesque sem nec quam sagittis aliquet. Integer viverra tellus in lectus consectetur rhoncus. Nullam justo tellus, tincidunt vitae convallis eu, eleifend eu felis. Nam quis placerat nisi, id volutpat lectus. Quisque lacus urna, viverra vitae augue id, efficitur pharetra ipsum. Pellentesque rhoncus aliquam mauris, semper tempus leo consectetur ac. Fusce orci orci, sagittis id quam eget, scelerisque scelerisque dolor.\r\n\r\n```\r\nimport React from 'react'\r\nimport ReactDOM from 'react-dom/client'\r\nimport App from './App'\r\n\r\nReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(\r\n  <React.StrictMode>\r\n    <App />\r\n  </React.StrictMode>,\r\n)\r\n```\r\n\r\nIn pellentesque ante eget elit volutpat iaculis. Aliquam erat volutpat. Aliquam maximus rutrum justo, eleifend sagittis enim feugiat eget. Proin ornare nisi enim, non aliquam lacus gravida at. Suspendisse vitae nulla orci. Integer sit amet fringilla lacus. Etiam consectetur, leo eget rhoncus efficitur, nibh ante euismod ante, non egestas nunc mi at ligula.\r\n\r\nDonec vehicula est eu lacus pulvinar pellentesque. Pellentesque justo lorem, dapibus sit amet luctus sit amet, vestibulum sit amet elit. Nam vel tortor placerat risus sollicitudin scelerisque nec vitae justo. Curabitur molestie nec tellus at fringilla. Phasellus quis tortor non diam ultrices lobortis ut at lacus. Donec feugiat dolor et turpis mollis, id rhoncus mauris luctus. Cras tincidunt lacus quis justo volutpat tincidunt. \r\n\r\n1. Praesent gravida maximus eros quis egestas.\r\n2. Integer mauris leo, fermentum sed pharetra a, finibus a quam. \r\n3. Nullam posuere, risus ultricies aliquet tincidunt, \r\n4. justo nisi aliquet arcu, eu consectetur libero nisi non magna. \r\n\r\nPellentesque at elit ligula. Aenean auctor mollis ipsum, ac consequat sapien fringilla a. Maecenas pulvinar, magna in feugiat aliquet, nisi massa congue justo, at varius nulla turpis nec ipsum. Donec dignissim pulvinar purus in ultrices. Vivamus semper diam laoreet finibus eleifend.",
          reactions: {
            url: 'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/2/reactions',
            total_count: 0,
            '+1': 0,
            '-1': 0,
            laugh: 0,
            hooray: 0,
            confused: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
          timeline_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/2/timeline',
          performed_via_github_app: null,
          state_reason: null,
          score: 1.0,
        },
        {
          url: 'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/1',
          repository_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog',
          labels_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/1/labels{/name}',
          comments_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/1/comments',
          events_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/1/events',
          html_url: 'https://github.com/HenriqueMarcelo/github-blog/issues/1',
          id: 1498409858,
          node_id: 'I_kwDOIm-YsM5ZT-uC',
          number: 1,
          title:
            'Vivamus condimentum neque augue, vel facilisis dolor ultrices quis.',
          user: {
            login: 'HenriqueMarcelo',
            id: 16305348,
            node_id: 'MDQ6VXNlcjE2MzA1MzQ4',
            avatar_url: 'https://avatars.githubusercontent.com/u/16305348?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/HenriqueMarcelo',
            html_url: 'https://github.com/HenriqueMarcelo',
            followers_url:
              'https://api.github.com/users/HenriqueMarcelo/followers',
            following_url:
              'https://api.github.com/users/HenriqueMarcelo/following{/other_user}',
            gists_url:
              'https://api.github.com/users/HenriqueMarcelo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/HenriqueMarcelo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/HenriqueMarcelo/subscriptions',
            organizations_url:
              'https://api.github.com/users/HenriqueMarcelo/orgs',
            repos_url: 'https://api.github.com/users/HenriqueMarcelo/repos',
            events_url:
              'https://api.github.com/users/HenriqueMarcelo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/HenriqueMarcelo/received_events',
            type: 'User',
            site_admin: false,
          },
          labels: [],
          state: 'open',
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 0,
          created_at: '2022-12-15T13:10:19Z',
          updated_at: '2022-12-15T13:10:19Z',
          closed_at: null,
          author_association: 'OWNER',
          active_lock_reason: null,
          body: "Integer aliquet ex ligula, vitae fringilla elit lobortis sed. Cras vitae ultricies nisl. Aliquam id luctus urna. Pellentesque sollicitudin, ligula eleifend dapibus malesuada, lorem dui egestas felis, et varius felis sem et nisl. Curabitur eget risus nulla. Phasellus aliquet lobortis bibendum. **Proin ultrices sapien nunc**, et tristique sem sodales porttitor. Donec auctor mi lorem, ut pulvinar lectus consequat pretium. Donec gravida malesuada lacus.\r\n\r\n```\r\nimport axios from 'axios'\r\n\r\nexport const api = axios.create({\r\n  baseURL: 'https://api.github.com',\r\n})\r\n```\r\n\r\nAliquam quam ipsum, consectetur nec tellus vel, elementum interdum urna. Proin consequat luctus nibh, ut vehicula sapien dictum eget. Nulla quis erat ac nibh tristique convallis. Duis turpis turpis, blandit eget nunc a, consectetur dictum neque. Curabitur in ex egestas, auctor mi quis, dignissim libero. In ante leo, posuere non gravida vel, dictum eget mauris. Aliquam ultricies libero neque, in sodales elit iaculis fermentum. Donec consequat a diam sed venenatis. Nam lacinia mauris eget sapien aliquet, ut vehicula nulla mollis. Suspendisse porta euismod eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tristique quis odio vel mollis. Integer consectetur eros leo, scelerisque faucibus erat scelerisque id.\r\n\r\n\r\n### Cras id erat odio. Quisque at lectus ex. \r\n\r\nUt quis dictum urna, vel congue dolor. Morbi suscipit sapien interdum lacus congue, sed condimentum erat placerat. Nunc aliquet quam vitae dui consectetur efficitur. Integer eu finibus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\n> Nunc aliquet quam vitae dui consectetur efficitur. Integer eu finibus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nEtiam ultrices pellentesque rhoncus. In eu velit luctus, sodales tortor sed, rutrum ligula. Curabitur quis dignissim lectus, quis rhoncus dolor. Maecenas eleifend tellus eget libero maximus, eu consequat eros molestie. In non leo auctor, venenatis nibh a, consectetur tellus. Ut sit amet suscipit mi. Etiam commodo lectus ante, at congue risus tristique a.\r\n\r\nMaecenas eget neque sed odio varius eleifend nec in metus. Pellentesque dictum rutrum maximus. Sed dui nisi, finibus ac congue ut, scelerisque eget elit. Fusce nisl augue, elementum a placerat et, dignissim in ipsum. Nullam sollicitudin in urna in rutrum. Nulla vehicula velit id enim euismod tristique at a metus. Pellentesque at metus faucibus, lobortis felis at, varius nunc. Nullam non justo et odio vulputate varius. Sed lacinia rutrum nulla viverra ultricies. In metus leo, posuere non porttitor at, gravida id nisi. Nunc hendrerit dapibus elementum. Integer pellentesque sem nec ligula consectetur, sit amet tincidunt orci bibendum. Vivamus maximus sagittis est, id sollicitudin ex malesuada vel.\r\n",
          reactions: {
            url: 'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/1/reactions',
            total_count: 0,
            '+1': 0,
            '-1': 0,
            laugh: 0,
            hooray: 0,
            confused: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
          timeline_url:
            'https://api.github.com/repos/HenriqueMarcelo/github-blog/issues/1/timeline',
          performed_via_github_app: null,
          state_reason: null,
          score: 1.0,
        },
      ],
    }

    const postsAPI = response.data.items.map((postAPI: PostSummary) => {
      return {
        number: postAPI.number,
        title: postAPI.title,
        body: postAPI.body,
        created_at: new Date(postAPI.created_at),
      }
    })

    setPosts(postsAPI)
  }

  useEffect(() => {
    fetchPosts('')
  }, [])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
