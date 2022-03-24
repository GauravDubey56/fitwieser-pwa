import * as React from 'react';
import {Button, Stack} from '@mui/material'
import { useNavigate } from 'react-router';
export default function Add(){
     const navigate = useNavigate();

     return (
     <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick = {()=>{navigate('../new')}}>Add Session</Button>
     </Stack>
     );
}
