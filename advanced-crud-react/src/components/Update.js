import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useParams, Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const initialValues = {
    name: "",
    email: "",
    phone: ""
}

const Update = () => {
    const [values, setValues] = useState(initialValues);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        upDateUser();
      }, []);
  
    const upDateUser = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/users/`+id);
            setValues(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/users/`+id, values);
            setValues(response.data);
            toast.success("User updated successfully!");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-2">
                    <label>Name:</label>
                    <input type="text" name="name" value={values.name} className="form-control" placeholder="Enter Name" onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label>Email:</label>
                    <input type="email" name="email" value={values.email} className="form-control" placeholder="Enter Email" onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label>Phone:</label>
                    <input type="text" name="phone" value={values.phone} className="form-control" placeholder="Enter Phone Number" onChange={handleChange} />
                </div>
                <button className="btn btn-success">Update</button>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Update;