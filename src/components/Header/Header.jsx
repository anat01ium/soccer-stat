import { useState } from 'react'
import { Link }     from 'raviger'
import Toolbar      from '@mui/material/Toolbar'
import Tabs         from '@mui/material/Tabs'
import Tab          from '@mui/material/Tab'
import Typography   from '@mui/material/Typography'

import MENU from '../../router/menu'

const Header = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 3 }}
      >
        SoccerStat
      </Typography>

      <Tabs value={value} onChange={handleChange}>
        {MENU.map(({ label, link }) => (
          <Tab component={Link} label={label} href={link} key={label} />
        ))}
      </Tabs>
    </Toolbar>
  )
}

export default Header
