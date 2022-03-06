import {createContext, useState} from 'react';

const ExerciseContext = createContext({
     name: "",
     id:"",
     sets : '',
     rest: '',
     setName : (title) => {},
     setId : (id) => {},
     setRest : (rest) => {},
     setExercises : (exercises) => {}
})

export function SessionContextProvider(props) {
     const [name, setName] = useState('');
     const [id, setId] = useState('');
     const [sets, setSets] = useState(0);
     const [rest, setRest] = useState(0);

     function endExercise() {
          setName('');
          setSets('');
          setRest('');
     }

     const context = {
          name : name,
          id : id,
          rest : rest,
          sets : sets,
          setName : setName,
          setRest : setRest,
          setSets : setSets,
          setId : setId
     };

     return (
          <ExerciseContext.Provider value={context}>
               {props.children}      
          </ExerciseContext.Provider>
     )
}

export default SessionContext;