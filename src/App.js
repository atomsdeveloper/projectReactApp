import './App.css';

// import HelloWorld from './components/HelloWorld';
// import Saying from './components/Saying';
// import People from './components/People';
// import List from './components/List';
// import Form from './components/Form';
// import Event from '.components/Event';
// import Conditions from './components/Conditions'
// import Group from './components/Group'

import { useState } from 'react';

import StateLift from './components/StateLift'
import Greetings from './components/Greetings'

function App() {

  // const equipes = ['Brasil', 'Alemanha', 'Argentina']

  const [nome, setNome] = useState()

  return (
    <div className="App">
      {/* <HelloWorld />
      <Saying />
      <People name='Renan' age='23' work='Front End' country='Brazil' />
      <List />
      <Form />
      <Event />
      <Conditions />
      <Group item={equipes} /> */}

      <StateLift setNome={setNome} />
      <Greetings nome={nome} />
    </div>
  );
}

export default App;
