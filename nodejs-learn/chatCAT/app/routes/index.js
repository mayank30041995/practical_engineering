'use strict'
const router = require('express').Router()
module.exports = () => {
  let routes = {
    get: {
      '/': (req, res, next) => {
        res.render('login')
      },
      '/rooms': (req, res, next) => {
        res.render('rooms')
      },
      '/chatroom': (req, res, next) => {
        res.render('chatroom')
      },
      '/getsession': (req, res, next) => {
        res.send('My best color is ' + req.session.favColor)
      },
      '/setsession': (req, res, next) => {
        req.session.favColor = 'Red'
        res.send('Session set')
      },
    },
    post: {},
    NA: (req, res, next) => {
      res.status(404).sendFile(process.cwd() + '/views/404.htm')
    },
  }

  //Iterate through the routes object and mount the routes
  let registerRoutes = (routes, method) => {
    for (let key in routes) {
      if (
        typeof routes[key] === 'object' &&
        routes[key] !== null &&
        !(routes[key] instanceof Array)
      ) {
        registerRoutes(routes[key], key)
      } else {
        // Register the routes
        if (method === 'get') {
          router.get(key, routes[key])
        } else if (method === 'post') {
          router.post(key, routes[key])
        } else {
          router.use(routes[key])
        }
      }
    }
  }

  registerRoutes(routes)
  return router
}
