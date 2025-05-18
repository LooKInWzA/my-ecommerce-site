const express  = require('express');
const router = express.Router();
const userService =  require('../services/userServices');

router.get('/login',(req,res ) =>{
    const respons = userService.login(req.body)
})

router.get('/register',(req,res ) =>{
    const respons = userService.login(req.body)
})



module.exports = router;
