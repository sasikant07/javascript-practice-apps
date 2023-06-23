import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

const Home = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/users`);
            setUsers(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    const handleDelete = async (id) => {
        try {
            const confirm = window.confirm("Are you sure you want to delete?");
            if (confirm) {
                await axios.delete(`http://localhost:4000/users/`+id);
                toast.success("User deleted!");
            }
            fetchUsers();
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>List of Users</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
            <div className="d-flex justify-content-end">
                <Link to="/add" className="btn btn-success">
                    Add +
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/read/${user.id}`} className="btn btn-sm btn-info me-2">View</Link>
                                    <Link to={`/update/${user.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home;