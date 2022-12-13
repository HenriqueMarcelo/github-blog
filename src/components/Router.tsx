import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { Home } from '../screens/Home'
import { Post } from '../screens/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
