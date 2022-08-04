const User = require('../../models/users.model');

async function saveUser(data){
    const user = new User(data);
    return user.save()
}

async function deleteUser(id){
    const result = await User.deleteOne({_id: id});
    if (result.deletedCount === 0) {
        const err = new Error();
        Object.assign(err, {
            status: 404,
            message: 'User not found'
        })
        throw err;
    }
    return result;
}

module.exports = {saveUser, deleteUser}

