import React from 'react'
import Timer from '../components/Timer'
import SessionCard from '../components/RunWorkout/SessionCard'
import CurrentCard from '../components/RunWorkout/CurrentCard'
import {useContext, useState, useEffect } from 'react';
import SessionContext from '../context/session-context'
function WorkoutSession() {
  const sessionCtx = useContext(SessionContext);
  const sessionFlow = [];
  var count = 0;
  sessionCtx.exercises.forEach(exercise => {
    
    for(var i = 0; i < exercise.sets; i++) {
      sessionFlow.push({
        name : exercise.exercise_name, 
        rest : exercise.rest,
        pos: i+1,
        ind : count
      })
      count++;
    }
  })
  const [currIndex , setCurrIndex] = useState(0);
  const [currExercise, setCurrExercise] = useState(sessionFlow[currIndex]);
  useEffect(() => {
    console.log('clicked next ')
    console.log(currExercise);
  })
  // const nextExercise = (event) => {
  //   if(sessionFlow[currIndex + 1]){
  //     setCurrExercise(sessionFlow[currIndex + 1]);
  //     console.log('inside next handler'+currExercise);
  //     setCurrIndex(currIndex + 1)
  //   }
  // }
  console.log(currIndex);
  console.log(sessionFlow);

  return (
    <div>
         <SessionCard />  
         <CurrentCard exercise = {currExercise} nextIndex = {setCurrIndex}nextExercise = {setCurrExercise} next = {sessionFlow[currIndex+1]}/>      
         {/* <Timer /> */}
         
    </div>
  )
}

export default WorkoutSession