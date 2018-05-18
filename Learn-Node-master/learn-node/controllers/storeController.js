// exports.myMiddleware = (req, res, next) => {
//   req.name = 'Marko'
//   if (req.name === 'Marko') {
//     throw Error('That is an AWESOME name!')
//   }
//   res.cookie('name', 'Marko is the Best!', { maxAge: 900000 })
//   next()
// }

exports.homePage = (req, res) => {
  console.log(req.name)
  res.render('index')
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' })
}

// this is my export to play with
// not part of the exercise
exports.timeStamp = (req, res) => {
  res.render('hello')
}
