const { Schema, Types } = require("mongoose");
// const dateFormat = require("dateformat");

// const now = new Date();

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    userName: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdTime) => dateFormat(now, "ddd, mmm dS, yyy, h:MM TT"),
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
