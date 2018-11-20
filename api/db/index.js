const { db } = require('./dbconfig')
const sequelize = require('sequelize')

const articleTableCreate = require('./model/article')
const usersTableCreate = require('./model/users')
const tagsTableCreate = require('./model/tags')
const commentTableCreate=require('./model/comment')

const Article = articleTableCreate(db)
const User = usersTableCreate(db)
const Tag = tagsTableCreate(db)
const Comment = commentTableCreate(db)

User.hasMany(Article)
User.hasMany(Comment)
Article.belongsTo(User)
Article.hasMany(Comment)
Comment.belongsTo(Article)
Comment.belongsTo(User)

module.exports = { Article,User,Tag,Comment}