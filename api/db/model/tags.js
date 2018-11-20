const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
module.exports = (db) => {
   let Tag = db.define('tags', {
        tagName:{
                type:DT.STRING(100),
                unique: true
            }
    })
    return Tag;
}