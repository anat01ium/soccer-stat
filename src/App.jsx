import { useRoutes } from 'raviger'
import routes from './router/routes'

import Header from './components/Header/Header'

import './App.scss'

const App = () => {
  const route = useRoutes(routes)

  return (
    <>
      <Header />
      {route}
    </>
  )
}

export default App
