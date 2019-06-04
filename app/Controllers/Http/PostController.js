'use strict'

class PostController {
  async index({ request, response, view }) {
    return view.render('index')
  }

  async test({ request, response, view }) {
    return response.json(["test"]);
  }
}

module.exports = PostController