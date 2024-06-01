import { useState } from 'react'
import './App.css'
import InputBox from './Component/InputBox'
import CurrencyApi from "./Hooks/CurrencyApi"


function App() {
  const [count, setCount] = useState(0)
// console.log(res)
  return (
    <>

   <InputBox/><br/>
   <InputBox/>


    </>
  )
}

export default App
