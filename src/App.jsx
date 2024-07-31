import { useState } from 'react'
import './App.css'
import FormTable from './components/formTable/FormTable'
import FormBoxes from './components/formBoxes/FormBoxes'
import FormInputs from './components/formInputs/FormInputs'
import Footer from './components/footer/Footer'


function App() {
  
  const [tableRows, setTableRows] = useState(Array(60).fill())
  const [start, setStart] = useState(false);
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
    <div className='App'>
     <div className="header">
     <FormTable index={currentIndex} start={start} setStart={setStart} />
     <FormBoxes />
     </div>
     <div className='main-form'>
     {
      tableRows?.map((_, index) => (
     <FormInputs key={index} index={index} start={start} setStart={setStart} />
      ))
     }
     </div>
     <div className='footer'>
     <Footer />
     </div>
    </div>
  )
}

export default App
