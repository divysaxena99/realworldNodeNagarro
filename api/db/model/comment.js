const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
const User = require('.././index')
module.exports = (db) => {
   let Comment = db.define('comment', {
        comment: {
            type:DT.STRING(500),
            allowNull : false,
        }
    })
    Comment.prototype.toJSONFor=function(user){
        return{
            id:this.id,
            comment:this.comment,
            author:user.toJSONFor()
        }
    }
return Comment;
}    
    
