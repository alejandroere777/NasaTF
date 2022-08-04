const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;
const config = require('config');
const { basepath, apod } = config.get('services.nasa');
const Apod = require('../../models/users.model');

async function getApod(req, res) {
    const { date, start_date, end_date } = req.query;
    axios.get(`${basepath}${apod}`, {
        params: {
            api_key: API_KEY,
            date: date,
            start_date: start_date,
            end_date: end_date
        }
    }).then((response) => {
        const apodData = response.data;
        const postApod = saveApod(apodData);
        res.json(response.data);
    }).catch((err) => {
        const { status } = err.response;
        res.status(status);
        res.json(err);
    });


}

async function getSaveApod(req, res) {
    const apods = await Apod.find({})
        .then((data => {
            res.json(data);
        })).catch((err) => {
            res.status(400);
            console.log(err);
            res.json(err);
        })
}

async function saveApod(req) {
    const data = req.data;
    const apod = new Apod(data);
    await apod.save();
    return console.log(apod);
}

module.exports = { getApod, getSaveApod };