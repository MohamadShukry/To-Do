const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    };
    try{
        mongoose.connect("mongodb+srv://shukry:shukry123@cluster1.lxb6q3a.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
        console.log('Error connecting to MongoDB');
    }
}