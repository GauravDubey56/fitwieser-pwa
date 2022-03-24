import React from 'react'
import {Grid, TextField, Autocomplete} from '@mui/material'
function AddExercise() {
  
  return (

         <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Exercise e.g., Squats, Pull-ups, Push-ups, Rows,etc."
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
              <Autocomplete
                    disablePortal
                    id="sets"
                    options={[1,2,3,4,5,6,7,8,9]}
                    fullWidth
                    // sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Sets " />}
               />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="rest"
                  label="Rest period (in seconds)"
                  type="text"
                  id="rest"
                  autoComplete="rest"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="rest"
                  label="Prep (in seconds)"
                  id="prep"
                  autoComplete="prep"
                />
              </Grid>
              <Grid item xs = {12}></Grid>
            </Grid>

  )
}

export default AddExercise