const app = require('./app')
const port = process.env.PORT

const multer = require('multer')
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a Word document'))
    }

    cb(undefined, true)
  },
})
app.post(
  '/upload',
  upload.single('upload'),
  (req, res) => {
    res.send()
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  }
)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
