import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/userSlice';
import {toast} from 'react-toastify';

const Update = () => {
  const userList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  
  const user = userList.users.find(ele => ele.id == id);
  const [values, setValues] = useState(user);

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(values));
    toast.success("User Updated Successfully!");
    navigate("/");
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Name:</label>
                    <input type="text" name="name"  value={values.name} onChange={handleChange} required className="form-control" placeholder="Enter Name" />
                </div>
                <div className="mb-2">
                    <label>Email:</label>
                    <input type="email" name="email"  value={values.email} onChange={handleChange} required className="form-control" placeholder="Enter Email" />
                </div>
                <div className="mb-2">
                    <label>Phone:</label>
                    <input type="text" name="phone"  value={values.phone} onChange={handleChange} required className="form-control" placeholder="Enter Phone Number" />
                </div>
                <button className="btn btn-success">Update</button>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Update;