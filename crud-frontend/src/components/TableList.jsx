export default function Tablelist({handleOpen}) {
    const clients = [{ id: 1, name: "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "100", isactive: true },
    { id: 2, name: "John1 Doe", email: "John1.Doe@gmail.com", job: "Developer1", rate: "101", isactive: true },
    { id: 3, name: "John2 Doe", email: "John2.Doe@gmail.com", job: "Developer2", rate: "102", isactive: false },
    ]
    return (
        <>
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
                        {clients.map((client) => (
                            <tr>
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
                                    <button onClick={()=>handleOpen('edit')} className="btn btn-secondary">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-error">
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