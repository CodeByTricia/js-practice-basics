const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const accounts = [
  { username: "admin", password: "admin123", role: "admin"},
  { username: "user", password: "user123", role: "user"}
];


loginBtn.addEventListener("click", () => {

  // get username and password
  const username = usernameInput.value;
  const password = passwordInput.value;

  // check if an account exist with matching credentials
  const foundAccount = accounts.find(account =>
    account.username === username && account.password === password
  );

  
if (foundAccount){

  // found account is saved in the localStorage as string
  localStorage.setItem("currentUser", JSON.stringify(foundAccount));

  // directs the user depending or the matched role
  if (foundAccount.role === "admin"){
    window.location.href = "admin-dashboard.html";
  }else {
    window.location.href = "user-dashboard.html";
  };

} else {
  alert("Invalid username or password.");
};

});


// throws user/admin back to the appropriate dashboard if they try to back
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {

  if (currentUser.role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "user-dashboard.html";
  }

}