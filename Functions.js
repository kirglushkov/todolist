import Users from "./User.js";


export async function auth(id) {
  //место для методов авторизации
  let data = await Users.findOne({ _id: id });
  if (!data) {
    data = new Users({ _id: id });
    await data.save();
    return true;
  } else {
    return true;
  }
}

export async function getUser(id) {
  let data = await Users.findOne({ _id: id });
  return data;
}

export async function saveUser({ id, data }) {
  await Users.updateOne({ _id: id }, data);
  return;
}


