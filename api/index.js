const { Router } = require('express')
const route = Router()

route.use('/articles', require('./routes/articles'))
route.use('/tags', require('./routes/tags'))
route.use('/users',require('./routes/user/index'))

route.get('/',async (req,res)=>{
        res.status(200).json({error:{message:"specific your resource eg api/articles"}})
  })

module.exports = route