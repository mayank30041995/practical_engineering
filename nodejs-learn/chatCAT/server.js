'use strict'
const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res, next) => {
  //   res.send('<h1>Hello Express</h1>')
  console.log(__dirname)
  res.sendFile(__dirname + '/views/login.htm')
})

app.listen(app.get('port'), () => {
  console.log('ChatCAT Running on port:', app.get('port'))
})
