"use client"
import "./signup.css"
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

    return <div style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center  full-height">


<div  id="main-wala" className="d-flex align-items-center justify-content-center" style={{width:"30vw", backgroundColor:"black" , flexDirection:"column", height:"70vh"}}>
        <div className="fs-3 fw-bold mb-3" style={{color:"white"}}>Sign Up</div>
        <form onSubmit={handleSubmit(saveUser)}>
            <label style={{ color: "white" , fontWeight: "bolder" }} >First Name</label> <br />
            <input {...register("firstName")} placeholder="First Name" type="text" /> <br />
            <label style={{ color: "white", fontWeight: "bolder" }} >Last Name</label> <br />
            <input {...register("lastName")} placeholder="Last Name" type="text" /> <br />
            <label style={{ color: "white", fontWeight: "bolder" }} >Email</label> <br />
            <input {...register("Email")} placeholder="Email" type="text" /> <br />
            <label style={{ color: "white", fontWeight: "bolder" }} >Company Name</label> <br />
            <input {...register("CompanyName")} placeholder="Company Name" type="text" /> <br />
            <label style={{ color: "white", fontWeight: "bolder" }} >Password</label> <br />
            <input {...register("password")} placeholder="Password" type="text" /> <br />
            <button id="btn" className="border-0 mt-3 fw-bold" style={{width:"100%"}} >SignUp</button>
        </form>
</div>

    </div>
}