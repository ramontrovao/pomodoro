import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
