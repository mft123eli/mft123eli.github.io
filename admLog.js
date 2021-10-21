window.onload = fun;
function fun(){

let btn = document.getElementById("btn");
btn.addEventListener("click", submit)   
function submit(){
 let user = document.getElementById("user").value;
 let password=document.getElementById("password").value;
    if(user=== "mulu" && password === "333"){
        window.location.href = "./adminstr.html";
    }
}
}