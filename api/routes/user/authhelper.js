const  Helper  = require('../../../Helper/converter');
const { User } = require('../../db/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const AuthHelper = {
    valiadteUserData:(req,res,next)=>{
        if(req.baseUrl === '/api/users')
            {
                if(Helper.isValidateEmail(req.body.user.email) && req.body.user.password.length>=8 && req.body.user.username!=null)
                    {
                        next();
                    }
                 else
                    {
                        res.status(200).json({"errors": {"email": ["is invalid"],"username": ["is invalid"]}});
                    }    
            }
        else if(req.baseUrl === '/api/users/login')
        { 
            if(Helper.isValidateEmail(req.body.user.email) && req.body.user.password.length>=8)
            {
                next();
            }    
            else
            {
                res.status(200).json({"errors": {"email": ["is invalid"],"username": ["is invalid"]}});
            }    
        }
    },
    checkUserExist:(req,res,next)=>{
        User.findOne({
            where: {
                [Op.or]: [{email: req.body.user.email}, {username: req.body.user.username}] 
            }
        }).then((userExist)=>{
            if(userExist!==null)
                {
                    res.status(422).json({errors: {email: ["has already been taken"], username: ["has already been taken"]}})
                }
            else
                {
                    next();
                }    
        })
        .catch((err)=>{console.log(err)});
    }
     
}
module.exports =  AuthHelper 