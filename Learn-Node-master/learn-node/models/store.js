const mongoose = require('mongoose')
// assigns Promise to mongoose to the ES6 Promise
mongoose.Promise = global.Promise
// library slugs makes URL friendly names for our slugs
const slug = require('slugs')

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]
})

// this will happen BEFORE a Schema is saved to the Database
storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    // if the name is NOT modified
    next() // skip it
    return // stop this function from running
  }
  // if the name IS changed, it will run this
  this.slug = slug(this.name)
  next()
  // TODO make more resiliant so slugs are unique
})

module.exports = mongoose.model('Store', storeSchema)
