const { Schema, model } = require("mongoose");
const ReactionSchema = require("./Reaction");
const dateFormat = require("dateformat");

const now = new Date();

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^.{1,280}$/.test(v);
        },
        message: "Thought can only be between 1-280 characters long",
      },
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdTime) => dateFormat(now, "ddd, mmm dS, yyy, h:MM TT"),
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [ReactionSchema],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionNum").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
