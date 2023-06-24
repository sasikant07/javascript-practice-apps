import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { deleteUser, fetchUsers } from '../features/userSlice';
import {toast} from 'react-toastify';

const Home = () => {
    const userList = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete?");
            if (confirm) {
                dispatch(deleteUser(id));
                toast.success("User deleted!");
            }
        dispatch(fetchUsers());
    }

  return (
    <>
        {userList.loading && <h1>Loading...</h1>}
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
                    {userList.users.map((user, index) => (
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
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Home;