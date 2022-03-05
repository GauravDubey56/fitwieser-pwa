import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
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