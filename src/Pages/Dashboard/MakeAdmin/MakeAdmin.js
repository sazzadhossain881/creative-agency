import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState({});


    const handleBlur = (event) => {
        const optAdmin = { ...newAdmin };
        optAdmin[event.target.name] = [event.target.value];
        setNewAdmin(optAdmin);
    }

    function makeAdmin(event) {
        event.preventDefault();


        fetch('https://agile-escarpment-45536.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })

            .then(res => res.json())
            .then(data => {
                document.getElementById('newAdminForm').innerHTML = '<h3 class="text-center text-success mt-5"><b> New Admin Added successfully</b></h3>'
            })
    }

    return (
        <section id="makeAdmin" className="p-4">
            <div className="container">
                <h3>Add New Admin</h3>
                <form id="newAdminForm" onSubmit={makeAdmin}>
                    <input onBlur={handleBlur} type="text" name="name" placeholder="Admin Name" className="form-control my-3" required />
                    <input onBlur={handleBlur} type="email" name="email" placeholder="Admin Email" className="form-control my-3" required />
                    <button className="btn btn-dark d-block mt-4 px-4">Make Admin</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;