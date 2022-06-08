'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NFT = new Schema({
    name: String,
    image: String,
    description: String
}).pre('save', (next) => {
    console.log('SAVE NFT');
    next();
});

exports.SCHEMAS = {
    NFT: NFT
};
