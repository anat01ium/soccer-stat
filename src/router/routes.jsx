import MAIN from './main'
import MENU from './menu'

const routes = [...MAIN, ...MENU].reduce((acc, item) => {
  acc[item.link] = item.component
  return acc
}, {})

export default routes
