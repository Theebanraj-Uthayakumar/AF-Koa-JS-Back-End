const mongoose = require("mongoose");

const dbConnect = () => {
    const dbConStr = process.env.MONGOBD_URL;

    mongoose.connect(dbConStr, ()=>{
        console.log("<<<database Connected>>>");
    });
};

module.exports = { dbConnect };