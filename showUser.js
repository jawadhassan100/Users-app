console.log("showUser connected");
const ShowTable = document.getElementById("Table");
const tableBody = document.getElementById("Tbody");
document.addEventListener("DOMContentLoaded", getTodos);
// document.addEventListener("DOMContentLoaded", ()=>{

// });
function getTodos() {
  let users = JSON.parse(localStorage.getItem("Users"));
  console.log(users);

  users.forEach((user) => {
    tableBody.innerHTML += `
      <tr>
        <td>${user.Id}</td>
        <td>${user.fname}</td>
        <td>${user.email}</td>
      </tr>
     `;
  });
}
