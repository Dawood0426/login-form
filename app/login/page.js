"use client"
import "./login.css"
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

    return <div style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center  full-height">

        <div id="main-wali" className="d-flex justify-content-center align-items-center" style={{ border: "1px solid black", backgroundColor:"black" , flexDirection:"column" , height: "300px", width: "300px" }}>

            <div style={{color:"white"}} className="fs-3 fw-bold">Log In</div>
            <form onSubmit={handleSubmit(loginUser)}>
                <label className="fw-bold mt-3" style={{ color: "white" }}>Email</label> <br />
                <input {...register("Email")} placeholder="Email" type="text" /> <br />
                <label className="fw-bold" style={{ color: "white" }}>Password</label> <br />

                <input  {...register("Password")} placeholder="Password" type="text" /> <br />
                <button id="btn" style={{ width: "100%" }} className="mt-3 fw-bold border-0 ">LogIn</button>

            </form>

        </div>
    </div>
}
