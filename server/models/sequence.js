const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sequenceSchema = new Schema({
  maxDocumentId: { type: Number, required: true, default: 0 },
  maxMessageId: { type: Number, required: true, default: 0 },
  maxContactId: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Sequence', sequenceSchema);