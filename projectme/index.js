window.onload = submit
const form=document.forms.myform;
const btn = document.getElementById("btn")



function submit(){

    // let email = document.getElementById("email").value;
    let email = form.uname.value;
    console.log(email)
    // let pwd = document.getElementById("password").value;
    let pwd = form.psw.value;
    console.log(pwd)
    if(email === "mulu3" && pwd === "tigi23"){
        alert("form submitted");
        window.location.href = "./CS315W1D2/projectme/adminstr.html";
    }
    // else 
    //     window.location.href="index.html";
}

btn.addEventListener("click", submit)       