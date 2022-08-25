const User = require("../dal/user.model");

const registerUser = async (ctx) => {
  try {
    const { name, email, password } = ctx.request.body;

    const users = await User.create({
      name: name,
      email: email,
      password: password,
    });

    return (ctx.body = users);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

const loginUser = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;

    const user = await User.findOne({ email: email });
    if (!user) return (ctx.body = { message: "User not Found" });

    if (password === user.password) {
      return (ctx.body = { name: user.name, email: user.email });
    } else {
      return (ctx.body = { message: "Invalid Password" });
    }
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
