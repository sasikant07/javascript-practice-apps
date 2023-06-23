import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, Link } from 'react-router-dom';

const Read = () => {
    const [user, setUser] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetchUsers();
      }, []);
  
      const fetchUsers = async () => {
          try {
              const response = await axios.get(`http://localhost:4000/users/`+id);
              setUser(response.data);
            } catch (error) {
              console.log(error);
            }
      }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>User Details</h1>
            <div className="mb-2">
                <strong>Name: {user.name}</strong>
            </div>
            <div className="mb-2">
                <strong>Email: {user.email}</strong>
            </div>
            <div className="mb-2">
                <strong>Phone: {user.phone}</strong>
            </div>
            <Link to={`/update/${user.id}`} className="btn btn-primary">Edit</Link>
            <Link to="/" className="btn btn-secondary ms-3">Back</Link>
        </div>
    </div>
  )
}

export default Read;