const User = require('../models/users.model');
const { saveUser, deleteUser } = require('../services/databases/users.service');

async function addUser(req, res){
    try {
        const data = req.body;
        const result = await saveUser(data);
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}

async function getUsers(req, res){
    const {province} = req.query;
    const query = {province};
    await User.find(query)
        .then(data => {
            res.json(data);
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })

}

async function getUserById(req, res){
    const { id } = req.params;
    const user = await User.findById(id)
        .then(data => {
            res.json(data);
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })

}

async function updateUserById(req, res){
    const { id } = req.params;
    const data = req.body;
    await User.findById(id)
        .then((user) => {
            user.name = data.name;
            user.province = data.province;
            user.pets = data.pets;
            user.save();
            res.json({
                operation: 'Edit user',
                message: 'OK',
                data: user,
            })
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })
        
}

async function deleteUserById(req, res){
    try{
        const { id } = req.params;
        const result = await deleteUser(id);
        res.json(result);
    } catch(err){
        res.status(err.status || 500);
        res.json(err);
    }
}

module.exports = { 
    addUser, 
    getUsers, 
    getUserById,
    updateUserById,
    deleteUserById
};