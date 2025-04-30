export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                    <button className="btn-success">{mode === 'edit' ? 'Save Change' : 'Add Client'}</button>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Name
                            <input type="text" className="grow" />
                        </label>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            E-mail
                            <input type="email" className="grow" />
                        </label>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Job
                            <input type="text" className="grow" />
                        </label>
                        <div className="flex mb-4 justify-between my-4">
                            <label className="input input-bordered mr-4 mb-4 flex items-center gap-2">
                                Rate
                                <input type="number" className="grow" />
                            </label>
                            <br />
                            <select className="select select-bordered w-full max-w-xs">
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        <button type="submit" className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
                    </form>
                </div>
            </dialog>

        </>
    )
}