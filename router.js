const express = require('express');
const user = require('./controllers/user');
const router = express.Router();
router.get('/',user.showsignin);
module.exports = router;