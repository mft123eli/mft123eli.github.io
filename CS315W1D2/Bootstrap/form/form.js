const users=[]


window.onload=validate;

 const arrCountries= [ "USA", "Ethiopia", "Nigeria"]

function validate(){

    const form=document.forms.myform;
    
    const select= form.select;
    console.log(select);
   
    for(let country of arrCountries){
        const selectOp=document.createElement("option");
        selectOp.innerHTML=country;
         select.append(selectOp)
    }
    const info=document.getElementById("info")
    const btn=form.submit;
    btn.addEventListener("click", clicked)

function clicked(){
const email= form.email.value;
const fname= form.fname.value;
const lname= form.lname.value;

const password=form.password.value;
const term= form.term.value;
const password1= form.password1.value;
const gender=form.gender;
console.log(email);
let sel=false;
let country ="";
for(let opti of select.children){
    
if(opti.selected==true && opti.disabled==false){
    sel=true;
    country=opti.innerHTML;
    break;
}
}
console.log(country,sel);
if(email==="" || fname==="" || lname==="" ) {
    info.innerHTML= "all need to fill out"
    info.style.display="block"
    
    return false;

}

else if(sel==false){
    info.innerHTML= "please select the country"
    info.style.display="block"
    return false;

}
else if(password !== password1){
   
        info.innerHTML= "password should match"
        info.style.display="block"
        return false
   
   }
else if(term.checked==false){
    info.innerHTML= "please check agreement"
    info.style.display="block"
    return false

}
else{
    info.style.display="none"
    obj={
        email:email,
        fname: fname,
        lname:lname,
        password:password,
        gender:gender,
        country:country
    }
    users.push(obj)
    console.log(users);

    }
    form.reset();

}

}



  