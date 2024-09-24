import { useState } from 'react'
import './App.css'
import FormTable from './components/form/formTable/FormTable'
import FormBoxes from './components/form/formBoxes/FormBoxes'
import FormInputs from './components/form/formInputs/FormInputs'
import Footer from './components/footer/Footer'
import SvodTech_table from './components/svod_tech/svodTable/SvodTable'
import SvodInputs from './components/svod_tech/svodInputs/SvodInputs'


function App() {
  
  const [tableRows, setTableRows] = useState(Array(60).fill())
  const [start, setStart] = useState(false);
  const [cleanForm, setCleanForm] = useState(false);
  const [tableIndex, setTableIndex] = useState(Array(60).fill());
  const [currentIndex, setCurrentIndex] = useState(0)
  tableRows?.map((_, index) => {
    for (let i=0; i <= tableIndex.length; i++){
      if(tableIndex[i] == index){
        setCurrentIndex(tableIndex[i])
      }
    }
  })


  return (
    <div >
     <div className="header">
     <FormTable index={currentIndex} start={start} 
      setStart={setStart} cleanForm={cleanForm}
      setCleanForm={setCleanForm} />
     <FormBoxes />
     </div>
     <div className='main-form'>
     {
      tableRows?.map((_, index) => (
     <FormInputs key={index} index={index} 
     start={start} setStart={setStart} 
     cleanForm={cleanForm} setCleanForm={setCleanForm} />
      ))
     }
     </div>
     <SvodTech_table />
     <SvodInputs />
     <div className='footer'>
     <Footer />
     </div>
    </div>
  )
}

export default App
