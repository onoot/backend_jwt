const express = require('express');
const Router = express.Router;
const {check} = require("express-validator")

const Auth_Controller = require('../controllers/users/auth');
const auth_m_ware = require('../middleware/auth_m_ware');

const router = new Router();

/**Пользователи**/
router.post('/auth/registration', Auth_Controller.registration);
router.post('/auth/login', Auth_Controller.login);
router.post('/auth/logout', Auth_Controller.logout);
router.post('/auth/refresh', Auth_Controller.refresh);

router.get('/auth/getusers', auth_m_ware, Auth_Controller.getUsers);

router.get('/', auth_m_ware, (req, res) => {
    res.sendFile(path.join(`../${__dirname}`, 'public', 'index.html'));
});

module.exports = router; 