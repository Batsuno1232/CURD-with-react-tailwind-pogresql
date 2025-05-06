import axios from 'axios';
import { useState } from 'react';

export default function Tablelist({ handleOpen,tableData,setTableData, searchTerm }) {
    const [error, setError] = useState(null);

    // Filter data based on the search term
    const filteredData = tableData.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.job.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`);
                setTableData((prevData) => prevData.filter(client => client.id !== id));
            } catch (err) {
                setError(err.message)
            }
        }
    }
    return (
        <>
            {error && <div className='alert alert-error'>{error}</div>}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {filteredData.map((client) => (
                            <tr key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td>
                                    <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                        {client.isactive ? `Active` : `Inactive`}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleOpen('edit', client)} className="btn btn-secondary">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-error" onClick={() => handleDelete(client.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    )
}