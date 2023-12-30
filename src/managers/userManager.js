const User = require('../models/User');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    // find user
    const user = await User.findOne({ username });
    // validate password

    // return user
}