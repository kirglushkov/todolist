import mongoose, { Schema } from "mongoose";

mongoose.connect(
    "mongodb://localhost:27017/todolist",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

const UsersScheme = Schema({
    _id: {
      type: String, // устанвливаем, что тип поля _id будет только строковый
      required: true, // устанавливаем, что этот параметр обязательный, поможет
                     // избежать некоторых ошибок
    }, 
    notes: { 
      type: [],
      required: true,
    }
  });

const User = mongoose.model("Users", UsersScheme);

export default User;