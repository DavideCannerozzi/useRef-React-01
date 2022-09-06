import { useRef,useEffect, useState } from 'react'
import './App.css';

function App() {

  const [number,setNumber] = useState()
  const prevNumber = useRef()

  function getNumber(e){
    setNumber(e.target.value)
  }

  useEffect(() => {
    prevNumber.current = number
  })



  return (
    <div className="App">
      <input onChange={ getNumber }/>
      <p>Your Number is: { number } Your Number was: { prevNumber.current }</p>
    </div>
  )
}

export default App;
