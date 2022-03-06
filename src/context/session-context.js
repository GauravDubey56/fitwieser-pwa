import {createContext, useState} from 'react';

const SessionContext = createContext({
     title: "",
     id:"",
     exercises: [],
     setTitle : (title) => {},
     setId : (id) => {},
     setExercises : (exercises) => {}
})

export function SessionContextProvider(props) {
     const [title, setTitle] = useState('');
     const [id, setId] = useState('');
     const [exercises, setExercises] = useState([]);

     function endSession() {
          setTitle('');
          setId('');
          setExercises([]);
     }

     const context = {
          title : title,
          id : id,
          exercises : exercises,
          setTitle : setTitle,
          setExercises : setExercises,
          setId : setId
     };

     return (
          <SessionContext.Provider value={context}>
               {props.children}      
          </SessionContext.Provider>
     )
}

export default SessionContext;