const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

class Student {
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);

    try {
      mongoose.model("student", schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("student");
  }
}

module.exports = { Student };
