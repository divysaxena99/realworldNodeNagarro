const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
const Helper=require('../../../Helper/converter')
const User = require('.././index')
module.exports = (db) => {
   let Article = db.define('article', {
        slug: {
            type:DT.STRING(100),
            allowNull : false,
            unique:true,
        },
        title:  {
            type:DT.STRING(100),
            allowNull:false
        },
        "description":  {
            type:DT.STRING(100),
            allowNull:false
        },
        "body":  {
            type:DT.STRING(100),
            allowNull:false
        },
        "favoritesCount":  {
            type: DT.INTEGER,
        defaultValue: 0,
        },
        "tag":{
            type:DT.STRING(200)
        }
    })
    Article.prototype.toJSONFor=function(user){
        return{
            slug:this.slug,
            body: this.body,
            title: this.title,
            description: this.description,
            tag:Helper.parseStringIntoArray(this.tag),
            author:user.toJSONFor()
        }
    }
return Article;
}    
    
