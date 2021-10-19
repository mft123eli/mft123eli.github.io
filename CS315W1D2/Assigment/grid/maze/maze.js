
window.onload = function(){

   const walls= document.getElementsByClassName("wall")
   const endb= document.getElementById("end")
   let result=document.getElementById("result")
   let game="";

    document.getElementById("start").addEventListener("mouseover", function (){
        game="start"
        result.innerText=game
    for(let eachwall of walls){
        eachwall.addEventListener("mouseover", over)
    }
    endb.addEventListener("mouseover", end);
    function end(){
        if(game=="start"){
            game="you won";
            result.innerText=game
        }
        
    }

    });
    
    function over(){
        if(game=="start"){
            game="over";
            result.innerText=game
        }
        
    }
    

}
