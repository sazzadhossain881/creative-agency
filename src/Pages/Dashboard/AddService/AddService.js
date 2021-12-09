import React, { useState } from 'react';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (event) => {
        const optInfo = { ...info };
        optInfo[event.target.name] = event.target.value;
        setInfo(optInfo);
    }

    const handleFileChange = (event) => {

        const newFile = event.target.files[0];
        setFile(newFile);

    }

    const addService = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)


        fetch('https://agile-escarpment-45536.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('serviceForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Service Added Successfully</b></h3>';
            })
            .catch(error => {
                console.error(error)
            })

    }





    return (
        <section id="service" className="p-4">
            <div className="container">
                <h3>Add New Service</h3>
                <form id="serviceForm" onSubmit={addService}>
                    <input onBlur={handleBlur} type="text" name="name" placeholder="Service name" className="form-control my-3" required />
                    <textarea onBlur={handleBlur} name="description" placeholder="Service description" className="form-control my-3" cols="10" rows="5" required></textarea>
                    <label className="mr-3">Service Icon :</label>
                    <input onChange={handleFileChange} type="file" name="file" required />
                    <button className="btn btn-dark d-block mt-4 px-4">Add Service</button>
                </form>
            </div>
        </section>

    );
};

export default AddService;