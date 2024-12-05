const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "fnwCDQSQ#WUnOfigcNqLf6SSdqopaBq9nz4OYNJN9kf45yil20Xc",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
