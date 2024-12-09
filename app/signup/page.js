"use client"
// import "./signup.css"
import axios from "axios";
import { useForm } from "react-hook-form"




export default function Signup() {

    const saveUser = (user) => {
        console.log(user);

        axios.post("/api/auth", user).then((resp) => {
            console.log(resp.data)
        })
    }



    const { register, handleSubmit } = useForm()

    return <div style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center full-height">
    <div
      id="main-wala"
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "90%", // Flexible for smaller screens
        maxWidth: "400px", // Limit width for larger screens
        backgroundColor: "black",
        flexDirection: "column",
        height: "auto", // Adjust height based on content
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add a subtle shadow
      }}
    >
      <div className="fs-3 fw-bold mb-3" style={{ color: "white" }}>
        Sign Up
      </div>
      <form onSubmit={handleSubmit(saveUser)} style={{ width: "100%" }}>
        <div className="mb-3">
          <label style={{ color: "white", fontWeight: "bolder" }}>First Name</label>
          <input
            {...register("firstName")}
            placeholder="First Name"
            type="text"
            className="form-control mt-1"
          />
        </div>
        <div className="mb-3">
          <label style={{ color: "white", fontWeight: "bolder" }}>Last Name</label>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            type="text"
            className="form-control mt-1"
          />
        </div>
        <div className="mb-3">
          <label style={{ color: "white", fontWeight: "bolder" }}>Email</label>
          <input
            {...register("Email")}
            placeholder="Email"
            type="email"
            className="form-control mt-1"
          />
        </div>
        <div className="mb-3">
          <label style={{ color: "white", fontWeight: "bolder" }}>Company Name</label>
          <input
            {...register("CompanyName")}
            placeholder="Company Name"
            type="text"
            className="form-control mt-1"
          />
        </div>
        <div className="mb-3">
          <label style={{ color: "white", fontWeight: "bolder" }}>Password</label>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="form-control mt-1"
          />
        </div>
        <button
          id="btn"
          className="border-0 mt-3 fw-bold"
          style={{
            width: "100%",
            backgroundColor: "#f39c12",
            color: "white",
            padding: "10px 0",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  
}