const { Router } = require('express')
const { Op } = require('sequelize')
const route = Router()
const { Article, Tag } = require('../db/index')

route.get('/', async (req, res) => {
    const tag = await Tag.findAll();
    const tags = []
    tag.forEach(element => {
        tags.push(element.tagName);
    });
    res.status(200).json({tags:tags});
})
module.exports = route