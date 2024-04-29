import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("user", userSchema)
export default Userser