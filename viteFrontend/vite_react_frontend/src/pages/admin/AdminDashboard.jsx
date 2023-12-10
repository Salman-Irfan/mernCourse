import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState("");
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("authtoken");

        if (!token) {
            navigate('/auth/login');
        } else {
            setAuthToken(token);

            // Axios GET request
            axios.get('http://localhost:5000/api/v1/all-users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setUserData(response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [navigate]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <tr key={user._id}>
                            <td>{user.firstName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;
