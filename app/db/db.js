import mongoose from "mongoose";

export function connectIt() {

    mongoose.connect("mongodb://localhost:27017/userAuthentication").then(() =>{
        console.log("db connect ho raha")
    }

    )

}