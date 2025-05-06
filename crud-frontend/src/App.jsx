import { useState, useEffect } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/NavBar'
import Tablelist from './components/TableList'
import axios from 'axios'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);


  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/clients')
      setTableData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };



  const handleOpen = (mode, client) => {
    setClientData(client)
    setIsOpen(true);
    setModalMode(mode);
  }

  useEffect(() => {
    fetchClients();
  }, []);
  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData);
        console.log('Client added:', response.data);
        setTableData((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.error('Error adding client:', error);
      }
      console.log("modal mode add");
    } else {
      console.log('modal mode Edit');
      console.log('Updating client with ID:', clientData.id);
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
        console.log('Client updated:', response.data);
        setTableData((prevData) => prevData.map((client) => (client.id === clientData.id ? response.data : client)));
      } catch (error) {
        console.error('Error updating client', error);
      }
    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />
      <Tablelist setTableData={setTableData} tableData={tableData}
        handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)} mode={modalMode} clientData={clientData} />
    </>
  )
}

export default App
