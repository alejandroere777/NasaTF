require('dotenv').config();
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

module.exports = {
    services: {
        nasa: {
            basepath: "https://api.nasa.gov",
            apod: "/planetary/apod",
            mars: "/mars-photos/api/v1/rovers"
        }
    },
    dataBase: {
        host: `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.if19yhm.mongodb.net/?retryWrites=true&w=majority`
    }
}