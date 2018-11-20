const { Router } = require('express')
const { Op } = require('sequelize')
const { User } = require('../../db/index')
const AuthHelper = require('./authhelper')
const route = Router()


    
route.post('/',AuthHelper.valiadteUserData,async (req,res)=>{
    const existUser = await User.findOne({
        where: {
                [Op.and]: [{email: req.body.user.email}, {hash: req.body.user.password}] 
            }
        })
            if(existUser===null)
                {
                    res.status(422).json({"errors": {"email or password": ["is invalid"]}});
                }
            else
                {
                    res.status(200).json({user: existUser.toAuthFor()});
            }       
        })
module.exports = route