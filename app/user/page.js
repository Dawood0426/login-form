"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        

        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/auth"); 
                setUsers(response.data.users);
            } catch (err) {
                setError(err.response?.data?.error || "Failed to fetch users.");
            }
        };

        fetchUsers();
    }, []);

    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div>{error}</div>
            </div>
        );
    }

    return (
        <div style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center">
            <div style={{ width: "50%" }}>
                <h1 className="text-center" style={{backgroundColor:"black" , color:"white"}}>All Users</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"black" , color:"white"}}>First Name</th>
                            <th style={{backgroundColor:"black" , color:"white"}}>Last Name</th>
                            <th style={{backgroundColor:"black" , color:"white"}}>Email</th>
                            <th style={{backgroundColor:"black" , color:"white"}}>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.CompanyName}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
