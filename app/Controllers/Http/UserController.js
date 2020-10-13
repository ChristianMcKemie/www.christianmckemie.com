"use strict";

class UserController {
  async index({ request, response, view }) {
    const data = { year: new Date().getFullYear() };
    return view.render("index", data);
  }
}

module.exports = UserController;
