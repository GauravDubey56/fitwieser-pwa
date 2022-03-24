import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {AppBar, Toolbar, Typography} from '@mui/material'
function Header() {
  return (
     <AppBar position="relative">
          <Toolbar>
               <FitnessCenterIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                         Fitwieser
                    </Typography>
          </Toolbar>
     </AppBar>
  )
}

export default Header