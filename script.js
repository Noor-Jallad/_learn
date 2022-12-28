var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPassword=document.getElementById("userPassword");
var addBtn=document.getElementById("addBtn");
var users=[];
addBtn.onclick=function(e)
{
 e.preventDefault();
addUser();
printData();
}
function addUser(){
var user={name:userName.value,
          email:userEmail.value,
          password:userPassword.value
           };

users.push(user);
localStorage.setItem("Users",JSON.stringify(users));
}
function printData()
{
    users=JSON.parse(localStorage.getItem("Users"));
    console.log(users);
}printData();