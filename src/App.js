import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input'
import { Submit } from './components/Sumbit/Submit';

function App() {
  const [bill, setBill] = useState(0)
  const [person, setPerson] = useState(null)
  const [percent, setPercent] = useState(0)
  const [result, setResult] = useState(0)

  const billChange = (e) => {
    setBill(Number(e.target.value))
  }
  const personChange = (e) => {
    setPerson(Number(e.target.value))
  }


  return (
    <div className="container">
      <div className='title'><img src='assets/logo.svg' /></div>
      <div className='main-div'>

        <Input name={'Bill'} img={'assets/dollar.svg'} handleChange={billChange} />
        <Button setPercent={setPercent} />
        <Input name={'Number of People'} img={'assets/person.svg'} handleChange={personChange} error="Can't be zero" person={person} />
        <Submit bill={bill} person={person} setResult={setResult} percent={percent} setPerson={setPerson} />

        <div className='result' >
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
