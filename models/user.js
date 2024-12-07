import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    Email: String,
    CompanyName: String,
    password: String,
});

export let User = mongoose.models.User || mongoose.model("User", UserSchema);
