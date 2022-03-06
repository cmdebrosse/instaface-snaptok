const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    userEmail: {
      type: String,
      required: [true, "Must submit a valid email address"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: "This is not a valid email address",
      },
    },

    userThoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    userFriends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

UserSchema.virtual("thoughtCount").get(function () {
  return this.userThoughts.length;
});

module.exports = User;
