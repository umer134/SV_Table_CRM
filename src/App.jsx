import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import FormTable from './components/FormTable'
import FormBoxes from './components/FormBoxes'
import FormInputs from './components/formInputs/FormInputs'


function App() {
  
  const [tableRows, setTableRows] = useState(Array(20).fill())
  const [start, setStart] = useState(false);



  return (
    <div className='App'>
     <FormTable start={start} setStart={setStart} />
     <FormBoxes />
      {
      tableRows?.map((_, index) => (
          
          <FormInputs key={index} index={index} start={start} setStart={setStart} />
      ))
     }
    </div>
  )
}

export default App
