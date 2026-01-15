import { getServerURL } from "./task1.js";

export async function addUser(firstName, lastName, email) {
  const response = await fetch(getServerURL() + "/users");
  const users = await response.json();
  const maxId = users.length > 0
    ? Math.max(...users.map(user => Number(user.id)))
    : 0;

  const newUser = {
    id: maxId + 1,
    first_name: firstName,
    last_name: lastName,
    email: email
  };

  const postResponse = await fetch(getServerURL() + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  });

  const createdUser = await postResponse.json();
  console.log(createdUser);
}