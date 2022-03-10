import CompetitionsPage from '../pages/Competitions/Competitions'
import TeamsPage from '../pages/Teams/Teams'

const MENU = [
  {
    label: 'Лиги',
    link: '/competitions',
    component: () => <CompetitionsPage />,
  },
  {
    label: 'Команды',
    link: '/teams',
    component: () => <TeamsPage />,
  },
]

export default MENU
