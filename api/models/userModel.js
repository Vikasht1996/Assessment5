import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    Firstname: {
        type: String,
        required: 'Firstname required'
    },
    
    Lastname: {
        type: String,
        required: 'Lastname required'
    },
    Email: {
        type: String,
        required: 'Email required'
    },
    
    Password: {
        type: String,
        required: 'Password required'
    },
    ConfirmPassword: {
        type: String,
        required: 'Confirmpassword required'
    },
})
 
export default DownloadSchema;