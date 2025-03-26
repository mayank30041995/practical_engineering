'use strict'

if (process.env.NODE_ENV === 'production') {
  // Offer production stage environment variables
  module.exports = {
    host: process.env.host || '',
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret,
    fb: {
      clientID: process.env.fbClientID,
      clientSecret: process.env.fbClientSecret,
      callbackURL: process.env.host + '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos'],
    },
  }
} else {
  // Offer dev stage settings and date
  module.exports = require('./development.json')
}

// git rm --cached app/config/development.json
// https://developers.facebook.com/apps
