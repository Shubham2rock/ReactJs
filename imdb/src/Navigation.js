import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (value === 0) {
      navigate('/')
    } else if (value === 1) {
      navigate('/search')
    }
  }, [value])

  return (
    <Box
      sx={{
        width: '100%',

        position: 'fixed',
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label='Trending' icon={<WhatshotIcon />} />
        <BottomNavigationAction label='Search' icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  )
}
