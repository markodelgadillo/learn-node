exports.myMiddleware = (req, res, next) => {
  req.name = 'Marko'
  if (req.name === 'Marko') {
    throw Error('That is an AWESOME name!')
  }
  res.cookie('name', 'Marko is the Best!', { maxAge: 900000 })
  next()
}

exports.homePage = (req, res) => {
  console.log(req.name)
  res.render('index')
}

exports.timeStamp = (req, res) => {
  res.render('hello')
}
