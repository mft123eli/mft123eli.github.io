window.onload=selDis;

function selDis(){
    const sel=document.getElementById("select");
    const disp=document.getElementById("info");

    sel.addEventListener("change", chfn)
    const opts=sel.children;
   
    function chfn(){

        for(const opt of opts){
            console.log("here");
        if(opt.selected){
            console.log(opt.value);
           disp.innerHTML=opt.innerHTML;
           
        }      
}
    }
}


    
    



