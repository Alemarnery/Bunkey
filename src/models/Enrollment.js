const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

class Enrollment {
  initSchema() {
    const schema = new Schema(
      {
        course: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "course",
        },
        students: [
          {
            credits: { type: Number },
            student: { ref: "user", type: mongoose.Schema.Types.ObjectId },
          },
        ],
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);

    try {
      mongoose.model("enrollment", schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("enrollment");
  }
}

module.exports = { Enrollment };
