console.log("js connected")
let todoId=0;
const Form=document.querySelector("form");
const successNotification = document.getElementById("liveToast");
// const showErrorMsg = document.getElementById("error-msg");
const validNotification = document.getElementById("ShowToast");
const clearBtn = document.getElementById("clear-btn");
Form.addEventListener("submit", saveTodo);
// clearBtn.addEventListener("click", () => {

// });
// showErrorMsg.style.display = "none";
function saveTodo(e) {
   e.preventDefault()
//     if (Form.fname.value === "") {
//     showErrorMsg.style.display=""
//     showErrorMsg.innerText = "Todo Must not be empty";
//     e.stopPropagation();
//   } else if (Form.fname.value.length <= 4) {
//     showErrorMsg.style.display = "";
//     showErrorMsg.innerText = "Todo length must be greater then 4";
//     e.stopPropagation();}
//     else{
        //   showErrorMsg.style.display = "none";
    var fname=Form.fname.value;
    var email= Form.email.value;
    var pwsd= Form.pwsd.value;
    todoId = todoId + 1;
     var todoObj = {
       Id: todoId,
       todo: fname,
       email: email,
       password:pwsd,
    
     };
      storeTodo(todoObj);
      Form.fname.value = "";
      Form.email.value = "";
      Form.pwsd.value = "";

const toast = new bootstrap.Toast(successNotification);
toast.show();
}
function storeTodo(todo) {
  let todoArray = [];
  if (localStorage.length <= 0) {
    localStorage.setItem("Todos", JSON.stringify(todoArray));
  }
  todoArray = JSON.parse(localStorage.getItem("Todos"));
  todoArray.forEach((element) => {
    if (todo.Id === element.Id) {
      todo.Id = element.Id + 1;
    }
  });
  todoArray.push(todo);
  localStorage.setItem("Todos", JSON.stringify(todoArray));
}
//------------------------------------------------------------------------------------------------------------------------------------//
const validForm=document.getElementById("validForm");
validForm.addEventListener("submit", showValidation);
function showValidation() {
//     const host = new bootstrap.Toast(validNotification);
//          host.hide(); 
  
//     if (validForm === localStorage) {
//          host.show(); 
//     }
//     else{
// host.hide(); 
//     }
// }



const signin = () => {
  if (localStorage.getItem("formData")) {
    // as long as you are getting items from the local storage... do..

    JSON.parse(localStorage.getItem("formData")).forEach((data) => {
      let x = document.getElementById("signEmail").value;
      let z = document.getElementById("signinPassword").value;
      console.log(x, z);
      if (data.email == x && data.pwd == z) {
        console.log("You are LOGGED");
      }
    });
  }
};
}
