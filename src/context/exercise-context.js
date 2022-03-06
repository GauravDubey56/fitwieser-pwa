import {createContext, useState} from 'react';

const ExerciseContext = createContext({
     name: "",
     id:"",
     sets : '',
     rest: '',
     preps: '',
     setName : (title) => {},
     setId : (id) => {},
     setRest : (rest) => {},
     setExercises : (exercises) => {}
})

export function ExerciseContextProvider(props) {
     const [name, setName] = useState('');
     const [id, setId] = useState('');
     const [sets, setSets] = useState('');
     const [rest, setRest] = useState('');
     const [prep, setPrep] = useState('');
     function endExercise() {
          setName('');
          setSets('');
          setRest('');
          setPrep('')
     }

     const context = {
          name : name,
          id : id,
          rest : rest,
          sets : sets,
          prep: prep,
          setName : setName,
          setRest : setRest,
          setSets : setSets,
          setPrep: setPrep,
          setId : setId
     };

     return (
          <ExerciseContext.Provider value={context}>
               {props.children}      
          </ExerciseContext.Provider>
     )
}

export default ExerciseContext;