import mongoose from 'mongoose'
import userSchema from '../models/userModel'
const Download = mongoose.model('Download', userSchema)
var validator = require("email-validator");
const bcrypt = require('bcrypt');
exports.create_At = (req, res) => {
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(User.Password, salt, function(err, hash) {
    //     User.Password = hash;
    //     User.save(callback);
    //     });
    //     });    
        if (req.body.Password!= req.body.ConfirmPassword) {
        req.body.ConfirmPassword="";
        }
    let newDownload = new Download(req.body)
    newDownload.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
exports.getdata_At = (req, res) => {
    Download.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloas)
    })
    // console.log(req.body.Empname)
}
 
// exports.updated_At = (req, res) => {
//     Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
//         if (error) { res.json(error) }
//         res.json(download)
//     })
// }
// import mongoose from 'mongoose'
// import downloadSchema from '../models/usermodel'
// import * as EmailValidator from 'email-validator';
// const Download = mongoose.model('Download', downloadSchema)

// add new download to the database
// exports.addNewDownload=(req, res)=> {
// console.log("post hi")
// let newDownload = new Download(req.body)
// newDownload.save((error, download) => {
// if (error) { res.json(error) }
// res.json(download)
// })
// // console.log(req.body.fileName);
// }
// var validator = require("email-validator");



// exports.addNewDownload=(req, res)=> {
// console.log("post hi")
// console.log(req.body.FirstName)

// if (req.body.Password!= req.body.ConfromPassword) {
// req.body.ConfromPassword="";
// }
// let newDownload = new Download(req.body)

// newDownload.save((error, download) => {
// if (error) { res.json(error) }
// res.json(download)
// })


// // console.log(req.body.fileName);
// }
// // get all downloads from the database
// exports.getDownloads=(req, res)=> {
// console.log("get hi")
// let newDownload = new Download(req.body)
// Download.find({}, (error, downloads) => {
// if (error) { res.json(error) }
// res.json(downloads)
// })
// }

// // // get single download based on the id
// // exports.getDownload=(req, res)=> {
// Download.findById(req.params.id, (error, download) => {
// if (error) { res.json(error) }
// // console.log(req.body.downloads.firstName)
// res.json(download)
// })
// }

// // update the download information based on id
// export function updateDownload(req, res) {
// Download.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
// if (error) { res.json(error) }
// res.json(download)
// })
// }

// // delete the download from the database.
// export function deleteDownload(req, res) {
// Download.remove({ _id: req.params.id }, (error, download) => {
// if (error) { res.json(error) }
// res.json(download)
// })
// }
 








