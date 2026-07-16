const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: { type: String, required: true },
    subject: { type: String, required: true },
    msgText: { type: String, required: true },
    sender:  { type: String, required: true }
});

module.exports = mongoose.model('Message', messageSchema);
