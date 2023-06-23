import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const initialValues = {
    name: "",
    email: "",
    phone: ""
}

const Create = () => {
    const [values, setValues] = useState(initialValues);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:4000/users`, values);
            setValues(response.data);
            toast.success("User Added Successfully!");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} required className="form-control" placeholder="Enter Name" />
                </div>
                <div className="mb-2">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} required className="form-control" placeholder="Enter Email" />
                </div>
                <div className="mb-2">
                    <label>Phone:</label>
                    <input type="text" name="phone" onChange={handleChange} required className="form-control" placeholder="Enter Phone Number" />
                </div>
                <button className="btn btn-success">Submit</button>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Create;