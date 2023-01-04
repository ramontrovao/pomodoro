import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { History } from './pages/History/index'
import { DefaultLayout } from './layouts/DefaultLayout/index'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
