import { useState } from 'react'

import './App.css'
import FormTable from './components/FormTable'
import FormBoxes from './components/FormBoxes'
import FormInputs from './components/formInputs/FormInputs'

function App() {
  
  const [tableRows, setTableRows] = useState([50])

  return (
    <div className='App'>
     <FormTable/>
     <FormBoxes />
     <FormInputs />
    </div>
  )
}

export default App
