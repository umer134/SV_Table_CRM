import { useState } from 'react'
import FormTable from './components/form/formTable/FormTable'
import FormBoxes from './components/form/formBoxes/FormBoxes'
import FormInputs from './components/form/formInputs/FormInputs'
import Footer from './components/footer/Footer'
import SvodTech_table from './components/svod_tech/svodTable/SvodTable'
import SvodInputs from './components/svod_tech/svodInputs/SvodInputs'
import './App.css'


function App() {
  
  const [tableRows, setTableRows] = useState(Array(60).fill())
  const [start, setStart] = useState(false);
  const [cleanForm, setCleanForm] = useState(false);
  const [tableIndex, setTableIndex] = useState(Array(60).fill());
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tableWindow, setTableWindow] = useState("form");
  
  tableRows?.map((_, index) => {
    for (let i=0; i <= tableIndex.length; i++){
      if(tableIndex[i] == index){
        setCurrentIndex(tableIndex[i])
      }
    }
  })


  return (
    <div >
      {
      tableWindow == "form" 
      ?
      (
      <div>
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
      </div>
     ):null
     }
     {
      tableWindow == "summary" 
      ?
      (
        <>
        <SvodTech_table />
        <SvodInputs />
        </>
      ):null
     }
     <div className='footer'>
     <Footer index={currentIndex} tableWindow={tableWindow} setTableWindow={setTableWindow} />
     </div>
    </div>
  )
}

export default App
