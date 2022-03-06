import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
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
