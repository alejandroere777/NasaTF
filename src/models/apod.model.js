const { Schema, model } = require('mongoose');

const apodSchema = new Schema({
    date: { type: Date },
    explanation: { type: String },
    hdurl: { type: String },
    media_type: { type: String },
    service_version: { type: String },
    title: { type: String },
    url: { type: String }
});

const Apod = new model('Apod', apodSchema);

module.exports = Apod;