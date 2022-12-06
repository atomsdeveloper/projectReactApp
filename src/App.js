import './App.css';

// import HelloWorld from './components/HelloWorld';
// import Saying from './components/Saying';
// import People from './components/People';
// import List from './components/List';
// import Form from './components/Form';
// import Event from '.components/Event';
// import Conditions from './components/Conditions'
// import Group from './components/Group'

// import { useState } from 'react';

// import StateLift from './components/StateLift'
// import Greetings from './components/Greetings'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  // const equipes = ['Brasil', 'Alemanha', 'Argentina']

  // const [nome, setNome] = useState()

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

      {/* <StateLift setNome={setNome} />
      <Greetings nome={nome} /> */}

      <Router> 
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/empresa'>
            <Company />
          </Route>

          <Route path='/contato'>
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
