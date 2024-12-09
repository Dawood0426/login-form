"use client"
// import "./login.css"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

export default function Login() {
    const { register, handleSubmit } = useForm();
    let router = useRouter();


    const loginUser = async (data) => {
        try {
            const response = await axios.put("/api/auth", data);
            console.log("Login response:", response.data);

            if (response.data.isloggedin) {
                const user = response.data.user;
                router.push(`/user?firstName=${user.firstName}&lastName=${user.lastName}&Email=${user.Email}&CompanyName=${user.CompanyName}`);
            } else {
                alert(response.data.error || "Login failed!");
            }
        } catch (error) {
            console.log("Login error:", error.response?.data || error.message);
        }
    };

    return <div style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center full-height">
    <div
      id="main-wali"
      className="d-flex justify-content-center align-items-center"
      style={{
        border: "1px solid black",
        backgroundColor: "black",
        flexDirection: "column",
        height: "300px",
        width: "90%", // Adjusted for smaller screens
        maxWidth: "400px", // Added a max width
        borderRadius: "10px", // Rounded corners
        padding: "20px", // Added padding for better spacing
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Added a subtle shadow
      }}
    >
      <div style={{ color: "white" }} className="fs-3 fw-bold">
        Log In
      </div>
      <form onSubmit={handleSubmit(loginUser)} style={{ width: "100%" }}>
        <div className="mt-3">
          <label className="fw-bold" style={{ color: "white" }}>
            Email
          </label>
          <input
            {...register("Email")}
            placeholder="Enter your email"
            type="text"
            className="form-control mt-1"
          />
        </div>
        <div className="mt-3">
          <label className="fw-bold" style={{ color: "white" }}>
            Password
          </label>
          <input
            {...register("Password")}
            placeholder="Enter your password"
            type="password"
            className="form-control mt-1"
          />
        </div>
        <button
          id="btn"
          style={{
            width: "100%",
            backgroundColor: "#f39c12",
            color: "white",
            borderRadius: "5px",
            padding: "10px 0",
            cursor: "pointer",
          }}
          className="mt-4 fw-bold border-0"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
  
}
