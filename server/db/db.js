const mongoose = require('mongoose');

const URI = `mongodb+srv://CarliC:${process.env.MONGO_ATLAS_PW}@cluster0.mkuls.mongodb.net/mernexercise?retryWrites=true&w=majority`;

// Connectingo to MongoDB Atlas
mongoose.connect(URI,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false} )
        .then(db => console.log('connected to DB'))
        .catch(err => console.error(err));

module.exports = mongoose;