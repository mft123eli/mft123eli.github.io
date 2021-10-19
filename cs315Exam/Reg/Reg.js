register=[];
window.onload= fn;

function fn(){

    const myform=document.forms.myforms;

function display(){
    const fname=myform.fname;
    const lname=myform.lname;
    const email=myform.email;
    const com=myform.com;
    const phy=myform.physical;
    const month=myform.mt;
    const day=myform.dt;
    const year=myform.yt;

    const obj={
        fname:fname,
        lname:lname,
        email:email,
        company:com,
        physical:phy,
        month: month,
        day: day,
        year: year
    }
   register.push(obj);
    
}   

function sortReg(){
    register.sort((a,b)=>{
     return   a.fname - b.fname
    })
    display();
}
}