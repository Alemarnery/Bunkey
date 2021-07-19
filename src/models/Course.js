const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

class Course {
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
      mongoose.model("course", schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("course");
  }
}

module.exports = { Course };
