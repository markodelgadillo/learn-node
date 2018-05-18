const express = require('express')
const router = express.Router()
const storeController = require('../controllers/storeController')

// Do work here
// the first param is the url, the second will be the file that does the work
// router.get('/', storeController.myMiddleware, storeController.homePage)

router.get('/', storeController.homePage)

// get for url+/reverse/'name parameter'
router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('')
  // res.send(reverse)
  res.render('hello', {
    name: reverse,
    title: 'Yasss!'
  })
})

router.get('/timestamp/', storeController.timeStamp)

module.exports = router
