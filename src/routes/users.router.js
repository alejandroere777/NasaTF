const express = require('express');
const router = express.Router();
const { 
    addUser, getUsers,
    getUserById, updateUserById,
    deleteUserById} = require('../controllers/users.controller');

/* NASA endpoints*/
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.post('/new', addUser);



module.exports = router;
