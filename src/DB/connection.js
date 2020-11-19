const mongoose = require("mongoose");
const config = require("../config.js");

(async ()=> {
    try {
        mongoose.set("useFindAndModify", false);
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PSW}@cluster0.tgrpo.mongodb.net/${config.MONGO_DB}?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`database connected to ${db.connection.name}`);
    } catch(e) {
        console.error(e);
    }
})()