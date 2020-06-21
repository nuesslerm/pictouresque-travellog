var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

// const defaultRequiredDate = {
//   type: Date,
//   default: Date.now,
//   required: true,
// };

var logEntrySchema = new Schema(
  {
    // String is shorthand for {type: String}
    title: requiredString,
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    latitude: requiredNumber,
    longitude: requiredNumber,
    visitDate: {
      type: Date,
      required: true,
    },
    // createdAt: defaultRequiredDate,
    // updatedAt: defaultRequiredDate,
  },
  {
    timestamps: true,
  }
);

// the model (created from the schema) is what gives us methods like create, read, update, delete
const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
