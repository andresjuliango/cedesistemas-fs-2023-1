const errorHandler = require('../../utils/errorHandler');
const User = require('./models/user.model');
const bcrypt = require('bcrypt');

const { USER_PASS_WRONG, SERVER_ERROR,
        USER_ALREDY_EXISTS, USER_NOT_FOUND
      } = require('./utils/dict.errors');

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // TODO: generate token
        return {
          token: 'xxxxxxxxxyyyyyyzzzzz'
        }
      }
    }
    throw errorHandler(USER_PASS_WRONG);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR);
  }
}

const logout = (idUser) => {
  return {
    message: 'user logout'
  }
}

const signup = async (userData) => {
  try {
    const validateUser = await User.findOne({ email: userData.email });
    if (validateUser) {
      throw errorHandler(USER_ALREDY_EXISTS)
    }

    const passHashed = await bcrypt.hash(userData.password, 10);
    userData.password = passHashed;

    const user = User(userData);
    await user.save(); // -> insert_one({ ... })
    return {
      message: 'user created',
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
}

const info = async (idUser) => {
  try {
    const user = await User.findById (idUser);
    //return user ? user : errorHandler(USER_NOT_FOUND);
    return user || errorHandler(USER_NOT_FOUND);
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error);
  }
}

module.exports = {
  login,
  logout,
  signup,
  info
}
