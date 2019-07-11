import mongoose from 'mongoose'

 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    Firstname: {
        type: String,
        required: 'Firstname is required'
    },
    
    Lastname: {
        type: String,
        required: 'Lastname is required'
    },
    Email: {
        type: String,
        unique: true,        
        required: 'Email is required',
        match:/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/,
    },
    
    Password: {
        type: String,
        required: 'Password is required',
        match: /^([a-zA-Z0-9_\-\.\+\#]){8,15}$/,
    },
    ConfirmPassword: {
        type: String,
        required: 'Password does not match',
        match: /^([a-zA-Z0-9_\-\.\+\#]){8,15}$/,

    },
    Create_At:{
        type:Date,
        default:Date.now
    },
    Updated_At:{
        type:Date,
        default:Date.now
    },
})
 
export default DownloadSchema;