import { getServerURL } from "./task1.js";
export async function delUser(id) {
    fetch(getServerURL()+`/users/${id}`,{
  method: 'DELETE',
}).then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
}
