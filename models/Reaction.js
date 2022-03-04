const { Schema } = require("mongoose");
const dateFormat = require("dateformat");

const now = new Date();

const ReactionSchema = new Schema(
  {
    reactionId: {},

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdTime) => dateFormat(now, "ddd, mmm dS, yyy, h:MM TT"),
    },
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = ReactionSchema;
