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
  const [person, setPerson] = useState("0")
  const [percent, setPercent] = useState("")
  const [amount, setAmount] = useState(0.00)
  const [result, setResult] = useState(0)
  const [active, setActive] = useState(0)

  const billChange = (e) => {
    const val = Math.max(0, Math.min(100000, Number(e.target.value)));
    setBill(val.toString());
  }
  const personChange = (e) => {
    const val = Math.max(0, Math.min(1000000, Number(e.target.value)));
    setPerson(val.toString());
  }


  return (
    <div className="container">
      <div className='title'><img src='assets/logo.svg' /></div>
      <div className='main-div'>
        <div className='calculator'>
          <Input name={'Bill'} img={'assets/dollar.svg'} handleChange={billChange} value={bill} />
          <Button percent={percent} setPercent={setPercent} active={active} setActive={setActive} />
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
