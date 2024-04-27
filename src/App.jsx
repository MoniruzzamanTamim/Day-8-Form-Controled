import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from  "./basic-form"
import SecondForm from "./2ndFormHandle"
import ThirdForm from "./form-object"
import FourForm from "./fourForm"
import FiveForm from "./FiveForm"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Simple Form Control</h2>
      <BasicForm />
      <h2>Doble Input Field And  Vallue Convert Object</h2>
      <SecondForm />
      <h2>object Vallue Singel UseState And Multiple Event Handeling  </h2>
      <ThirdForm />
      <h2>Singel UseState ANd Singel Event Handaling With If Statement</h2>
      <FourForm />
      <h2>Singel UseState ANd Singel Event Handaling For Better Practices</h2>
      <FiveForm />
    </>
  )
}

export default App
