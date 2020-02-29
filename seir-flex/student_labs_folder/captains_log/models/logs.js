const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken: Boolean,
    timestamps: {type: Boolean, required: true}
});

const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;

