import { useState } from 'react'
import './App.css'
import ModalForm from './components/Modalform'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const [modalMode,setModalMode] = useState('add');
  const handleOpen = (mode)=>{
    setIsOpen(true);
    setModalMode(mode);
  }
  const handleSubmit = ()=>{
    if(modalMode==='add'){
      console.log("modal mode add");
    }
  }

  return (
    <>
    <Navbar onOpen={() => handleOpen('add')}/>
    <Tablelist handleOpen={handleOpen}/>
    <ModalForm isOpen={isOpen} onSubmit={handleSubmit}
    onClose={()=> setIsOpen(false)} mode={modalMode}/>
    </>
  )
}

export default App
