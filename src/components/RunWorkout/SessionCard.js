import React from 'react'
import {useContext } from 'react';
import SessionContext from '../../context/session-context'
import AddButtons from '../CreateWorkout/Add';
// import {Paper, Typography} from '@mui/material'
function SessionCard() {
  const sessionCtx = useContext(SessionContext);
  console.log(sessionCtx);
  return (
    <div>
         {/* <Typography gutterBottom variant="h5" component="div"></Typography> */}
         <h1>{sessionCtx.title}</h1>
         <AddButtons />
         {/* {sessionCtx.exercises.map(ex => {
              return <h3>{ex.exercise_name}</h3>
         })} */}
    </div>
  )
}

export default SessionCard