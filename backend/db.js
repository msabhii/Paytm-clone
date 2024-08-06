import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://msabhithakur7777:MSabhi%408522@clusterptm.5oxausk.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPTM`
);

const userSchema = new mongoose.Schema({
  userName: String,
  FirstName: String,
  LastName: String,
  Password: String,
});

const User = mongoose.model("User", userSchema);

export { User };
