import * as React from 'react';
import {Card, CardActions, CardContent, Button, Typography} from '@mui/material'

export default function CurrentCard(props) {
  console.log('card display effect')
  console.log(props.sexercise)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.exercise.name}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          Set {props.exercise.pos}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick = {(event) => {
             event.preventDefault()
             props.nextIndex(props.exercise.ind + 1)
             props.nextExercise(props.next)
          }}>Next</Button>
      </CardActions>
    </Card>
  );
}
