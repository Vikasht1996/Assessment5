import mongoose from 'mongoose'
import userSchema from '../models/userModel'
 
const Download = mongoose.model('Download', userSchema)
 
exports.create_At = (req, res) => {
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
exports.updated_At = (req, res) => {
    Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 








