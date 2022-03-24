import React from 'react'
import {workouts} from '../data'
import {Grid} from '@mui/material'
import {UserContext} from '../context'
import {DisplayCard, Add} from '../components'
import {useContext} from 'react'
function HomeScreen() {
  const userCtx = useContext(UserContext);
  console.log(workouts)
  return (
     <Grid container rowSpacing={1}>
          <Grid item xs={12}><h1>Hi, {userCtx.userName} !</h1></Grid>   
          
          <Add></Add>
          
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