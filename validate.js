const validForm = document.getElementById("validForm");
const erroMsgEmail = document.getElementById("error-msg-email");
const erroMsgPassword = document.getElementById("error-msg-password");
const vaidateToast = document.getElementById("ValidateToast");
const showTable = document.getElementById("table");
validForm.addEventListener("submit", showValidation);
erroMsgEmail.style.display="none"
erroMsgPassword.style.display = "none";
function showValidation(event) {
  event.preventDefault();
  let user;
  const email = validForm.email.value;
  const password = validForm.password.value;
  const userData = JSON.parse(localStorage.getItem("Users"));
  userData.forEach((storedUser) => {
    if (email === storedUser.email) {
      return (user = storedUser);
    }
  });
  if (!user) {
    // Show message user dosenot exist
    console.log("user dosenot exist");
      erroMsgEmail.style.display = "";
       erroMsgEmail.innerText = "email is wrong";
       event.stopPropagation();
  } else {
    if (password !== user.password) {
      console.log("user password wrong");
      erroMsgPassword.style.display = "";
       erroMsgPassword.innerText = "password is wrong";
       event.stopPropagation();
      // Show message user password wrong
    } else {
      // Show message User Exist in Data base
      console.log(user);
      erroMsgEmail.style.display = "none";
      erroMsgPassword.style.display = "none";
      const toast = new bootstrap.Toast(vaidateToast);
      toast.show();
    }
  
     const tr = document.createElement("tr");
    //  const tdName = document.createElement("td");
     const tdEmail = document.createElement("td");
     const tdpassword = document.createElement("td");
    //  tdName.innerText = fname;
     tdEmail.innerText = email;
     tdpassword.innerText = password;
     tr.append(tdEmail, tdpassword);
     showTable.appendChild(tr);
  }
}
