const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://mscode:mscode@paytm-cluster.8dtta.mongodb.net/`
);

const userSchema = new mongoose.Schema({
  userName: String,
  FirstName: String,
  password: String,
  email: String,
});
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = { User, Account };
