import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from "react-router-dom";
import { getUserDetails } from '../features/userSlice';

const Read = () => {
    const {id} = useParams();
    const userList = useSelector((state) => state.users);
    const users = userList.users.find(ele => ele.id == id);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>User Details</h1>
            <div className="mb-2">
                <strong>Name: {users.name}</strong>
            </div>
            <div className="mb-2">
                <strong>Email: {users.email}</strong>
            </div>
            <div className="mb-2">
                <strong>Phone: {users.phone}</strong>
            </div>
            <Link to={`/update/${users.id}`} className="btn btn-primary">Edit</Link>
            <Link to="/" className="btn btn-secondary ms-3">Back</Link>
        </div>
    </div>
  )
}

export default Read;