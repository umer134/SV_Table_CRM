import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import FormTable from './components/FormTable'
import FormBoxes from './components/FormBoxes'
import FormInputs from './components/formInputs/FormInputs'

function App() {
  
  const [tableRows, setTableRows] = useState(Array(18).fill())

  return (
    <div className='App'>
     <FormTable/>
     <FormBoxes />
      {
      tableRows?.map((_) => (
        <div key={uuidv4()}>
          <FormInputs />
        </div>
      ))
     }
    </div>
  )
}

export default App
