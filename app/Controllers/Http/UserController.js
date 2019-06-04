'use strict'

class UserController {
  async index({request, response, view}) {
  return view.render('index')
  }
}

module.exports = UserController
