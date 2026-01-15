import { getServerURL } from "./task1.js";
export async function listUsers() {
fetch(getServerURL() + "/users" )
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
}