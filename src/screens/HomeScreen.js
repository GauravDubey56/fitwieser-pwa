import React from 'react'
import {workouts} from '../data'
import DisplayCard from '../components/displayCards/DisplayCard'
import Grid from '@mui/material/Grid'
function HomeScreen() {
  console.log(workouts)
  return (
     <Grid container rowSpacing={1}>
          <h1>Hi, user !</h1>          
          {workouts.map(workout => {
               return (
               <Grid item xs={12}>
                    <DisplayCard workout={workout} key={workout.id}/>     
               </Grid>
               )
          })}
    </Grid>
  )
}

export default HomeScreen