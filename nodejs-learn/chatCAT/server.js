'use strict'
const express = require('express')
const ChatCAT = require('./app')
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(ChatCAT.session)

app.use('/', ChatCAT.router)

app.listen(app.get('port'), () => {
  console.log('ChatCAT Running on port:', app.get('port'))
})
