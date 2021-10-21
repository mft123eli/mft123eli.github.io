let result=[];
window.onload= fn;

function fn(){

    const form=document.forms.myForm;
    const info=document.getElementById("info")
    
    const btn=document.getElementById("submit")
    btn.addEventListener("click", abcd)

function abcd(){
const name= form.name.value;
const email= form.email.value;
const phone= form.phone.value;

const subject=form.subject.value;
const message= form.message.value;


if(name==="" || email==="" || phone===""  || subject ==="" || message==="" ) {
    info.innerHTML= "all need to fill out"
    info.style.display="block"
    
    return false;

}


else if(phone.length < 10 || phone.length >10){
   
        info.innerHTML= "Check your phone length"
        info.style.display="block"
        return false
   
   }

else{
    info.style.display="none"
    obj={
        name:name,
        email: email,
        phone:phone,
        subject:subject,
        message:message
    }
    console.log(obj);
    result.push(obj)
       alert("Thanks for contact me.");
    }
    form.reset();

}

}



  


