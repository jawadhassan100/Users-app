console.log("-------storeUser.js -------");

// Import DOM Elements
const Form = document.querySelector("form");
const successNotification = document.getElementById("liveToast");
const showErrorMsgName = document.getElementById("error-msg-name");
const showErrorMsgEmail = document.getElementById("error-msg-email");
const showErrorMsgPass = document.getElementById("error-msg-password");
const validNotification = document.getElementById("liveToast");

// Hide Error Messages
showErrorMsgName.style.display = "none";
showErrorMsgEmail.style.display = "none";
showErrorMsgPass.style.display = "none";

// Form submit event
Form.addEventListener("submit", submitHandler);

// Form submit callback function
function submitHandler(e) {
  // Prevent from default reload
  e.preventDefault();

  // Get Form Values
  let fname = Form.fname.value;
  let email = Form.email.value;
  let pwsd = Form.pwsd.value;

  // Check from field value are not null
  if (fname === "" || email === "" || pwsd === "") {
    showErrorMsgName.style.display = "";
    showErrorMsgEmail.style.display = "";
    showErrorMsgPass.style.display = "";
    showErrorMsgName.innerText = "Field Must not be empty";
    showErrorMsgEmail.innerText = "Field Must not be empty";
    showErrorMsgPass.innerText = "Field Must not be empty";
    e.stopPropagation();
  } else if (fname === "") {
    showErrorMsgName.style.display = "";
    showErrorMsgName.innerText = "Field Must not be empty";
    e.stopPropagation();
  } else if (email === "") {
    showErrorMsgEmail.style.display = "";
    showErrorMsgEmail.innerText = "Field Must not be empty";
    e.stopPropagation();
  } else if (pwsd === "") {
    showErrorMsgPass.style.display = "";
    showErrorMsgPass.innerText = "Field Must not be empty";
    e.stopPropagation();
  } else if (pwsd.length <= 8) {
    showErrorMsgPass.style.display = "";
    showErrorMsgPass.innerText = "Password length must be greater then 8";
    e.stopPropagation();
  } else {
    // Show Error to hidden
    showErrorMsgName.style.display = "none";
    showErrorMsgEmail.style.display = "none";
    showErrorMsgPass.style.display = "none";

    // Create Random User Id
    let userId = Math.floor(Math.random() * 100);
    // Check User Id is not 0 if 0 generate an other
    if (userId === 0) {
      userId = Math.floor(Math.random() * 100);
    }
    // Create User Object
    let userData = {
      Id: userId,
      fname: fname,
      email: email,
      password: pwsd,
    };
    // call add user function to store user data in local storageS
    addUser(userData);

    // Make form field empty
    Form.fname.value = "";
    Form.email.value = "";
    Form.pwsd.value = "";

    // Create new bootstrap tost and show the successfull message
   
    // var Name=document.Form.fname.value;
    // var Email = document.Form.email.value;
    // var Password = document.Form.pwsd.value;
    // var tr=document.createElement("tr");
    // var td1=tr.appendChild(document.createElement("td"));
    // var td2=tr.appendChild(document.createElement("td"));
    // var td3=tr.appendChild(document.createElement("td"));
    // td1.innerHTML=Name;
    //    td1.innerHTML = fname;
    //    td2.innerHTML = email;
    //    td3.innerHTML = pwsd;
    //    document.getElementById("table").appendChild("tr")
  }
  
}

function addUser(userData) {
  let data = [];
  if (localStorage.length <= 0) {
    localStorage.setItem("Users", JSON.stringify(data));
  }
  data = JSON.parse(localStorage.getItem("Users"));
  data.push(userData);
  localStorage.setItem("Users", JSON.stringify(data));
}
             //--------- show table---------//
