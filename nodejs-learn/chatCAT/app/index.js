'use strict'
const router = require('express').Router()

router
  .get('/', (req, res, next) => {
    res.render('login')
  })
  .post((req, res, next) => {
    res.render('post router')
  })

module.exports = {
  router,
}
