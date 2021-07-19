"use strict";
const autoBind = require("auto-bind");

const { Service } = require("../../system/services/Service");

class UserService extends Service {
  constructor(model) {
    super(model);
    this.model = model;
    autoBind(this);
  }

  async updatePassword(id, data) {
    try {
      await this.model.findByIdAndUpdate(id, data, { new: true });
      return { passwordChanged: true };
    } catch (errors) {
      throw errors;
    }
  }

  async findByEmail(email, includePassword = false) {
    return includePassword
      ? this.model.findByEmail(email).select("+password")
      : this.model.findByEmail(email);
  }
}

module.exports = { UserService };
