import { create_At,updated_At} from '../controllers/userController'
// const { check } = require('express-validator/check')
import { check } from 'express-validator/check'

const routes = (app) => {
    app.route('/download')
        .put(
            [
                check('Firstname').isEmpty(),
                check('Lastname').isEmpty(),
                check('Email').isEmpty(),
                check('Password'),isEmpty(),
                check('ConfirmPassword'),
              ],updated_At
              )
        .post(create_At)
 
    
}
 
export default routes
