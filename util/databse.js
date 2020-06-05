const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient
    .connect('mongodb+srv://nilesh:bumba1997@cluster0-6zjhg.mongodb.net/nodejs?retryWrites=true&w=majority')
    .then(client => {
        console.log("CONNECTED!!!")
        callback(client);
    })
    .catch(err => console.log(err));
}

module.exports = mongoConnect;