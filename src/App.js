import './App.css';

import HelloWorld from './components/HelloWorld';
import Saying from './components/Saying';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Saying />
      <People name='Renan' age='23' work='Front End' country='Brazil' />
    </div>
  );
}

export default App;
