import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useContext} from 'react';
import SessionContext from '../../context/session-context'
import {useNavigate} from 'react-router-dom';
export default function ImgMediaCard(props) {
  const navigate = useNavigate();
  const sessionCtx = useContext(SessionContext)
  const startSession = async (event) => {
    event.preventDefault();
    console.log('in start function');
    console.log(props.workout)
    await sessionCtx.setTitle(props.workout.title);
    await sessionCtx.setExercises(props.workout.exercises);
    await sessionCtx.setId(props.workout.id);
    console.log(sessionCtx);
    navigate('../workout');
  }
  console.log(props.workout);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.workout.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estimated time : 45 min
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/workout" onClick = {startSession}>Start Now</Button>
        {/*on starting a workout save that workout into a context*/}
        <Button size="small">Start Later</Button>
        {/*send push notification about the workout*/}
      </CardActions>
    </Card>
  );
}
