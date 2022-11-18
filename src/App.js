import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input'
import { Person } from './components/Person/Person';
import { Reset } from './components/Reset/Reset';
import { Submit } from './components/Sumbit/Submit';
import { Total } from './components/Total/Total';

function App() {
  const [bill, setBill] = useState("")
  const [person, setPerson] = useState(null)
  const [percent, setPercent] = useState(0)
  const [amount, setAmount] = useState(0.00)
  const [result, setResult] = useState(0)
  const [active, setActive] = useState(0)

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
        <div className='calculator'>
          <Input name={'Bill'} img={'assets/dollar.svg'} handleChange={billChange} value={bill} />
          <Button setPercent={setPercent} active={active} setActive={setActive} />
          <Input name={'Number of People'} img={'assets/person.svg'} handleChange={personChange} error="Can't be zero" person={person} value={person} />
          <Submit bill={bill} person={person} setResult={setResult} percent={percent} setPerson={setPerson} setAmount={setAmount} />
        </div>
        <div className='result' >
          <Person amount={amount} />
          <Total result={result} />
          <Reset setAmount={setAmount} setResult={setResult} setBill={setBill} setPerson={setPerson} setPercent={setPercent} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}

export default App;
