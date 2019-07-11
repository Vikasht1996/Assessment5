import { create_At,getdata_At} from '../controllers/userController'
const { check,validationResult } = require('express-validator/check')
import Email from 'email-addresses'

// import { check ,validationResult} from 'express-validator/check'

const routes = (app) => {
    app.route('/assessment')
    .get(getdata_At)
        app.post('/assessment',
            // [
            //     check('Firstname').isEmpty(),
            //     check('Lastname').isEmpty(),
            //     check('Email').isEmail(),
            //     check('Password').isLength({min:5,max:8}),
            //     check('ConfirmPassword').isLength({min:5,max:8}),
            //   ]
            [
              check('Firstname').not().isEmpty().trim(),
              check('Lasttname').not().isEmpty().trim().withMessage('Lastname is required'),
              check('Email').not().isEmpty().trim().withMessage('Email is requierd'),
              check('Password').isLength({ max : 8 }).withMessage('Password must have more than 5 characters'),
              check('ConfirmPassword').not().isEmpty().trim().withMessage('Password does not match')

            ],create_At,(req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
                }
                User.create({
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                Email: req.body.Email,
                Password: req.body.Password,
                ConfirmPassword:req.body.ConfirmPassword,
                }
                ,bcrypt.Password
               
                ).then(User => res.json(User));
                });
    
}
export default routes

// import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } from '../Controller/usercontroller'
// const { check, validationResult } = require('express-validator');
// var passwordValidator = require('password-validator');
// import * as EmailValidator from 'email-validator';


// var passwordHash = require('password-hash');
// const routes = (app) => {
// // app.route('/sign_up') 
// // .post(addNewDownload)

// // const { check, validationResult } = require('express-validator');

// app.post('/sign_up', [ 
// // check(req.body.Email).isEmail(),
// // check(req.body.Password).isLength({ max: 8})
// ], addNewDownload,async(req, res,next) => {
// const errors = validationResult(req);

// if (!errors.isEmpty()) {
// return res.status(422).json({ errors: errors.array() });
// }
// User.create({
// FirstName: req.body.FirstName,
// LastName: req.body.LastName,
// Email: req.body.Email,
// Password: req.body.Password,
// ConfromPassword: req.body.ConfromPassword,
// Created_at: req.body.Created_at,
// Updated_at:req.body.Updated_at

// }).then(User => res.json(User));
// });
// // to get all data 
// app.route('/sign_up')
// .get(getDownloads)
// // .get(getDownload)
// // .put(updateDownload)
// .delete(deleteDownload)
// }
// export default routes
