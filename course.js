
 let courses=[];
  
  window.onload=myFunction;


    function myFunction(){
      let storage=localStorage.getItem("courseData");
      courses=JSON.parse(storage)
     const btn=document.getElementById("btn");
     btn.addEventListener("click", sortA)
     display()
    function display(){


    const table= document.getElementById("table")

    for(let i =0;i<courses.length;i++){
    const tr=table.insertRow();
    const nametd=tr.insertCell();

    const a =document.createElement("a");
    a.href=courses[i].courselink;
    a.innerHTML=courses[i].name;
    
    nametd.append(a);
    const idtd=tr.insertCell();
    idtd.innerHTML=courses[i].id
    const datetd=tr.insertCell();
    datetd.innerHTML=courses[i].date
    const hardRatetd=tr.insertCell();
    hardRatetd.innerHTML=courses[i].hardRate
    }
  }

        function sortA(){
          courses.sort((c1, c2) => {
            console.log(new Date(c1.date));
                return new Date(c1.date) - new Date(c2.date);
              });

              const trs=document.querySelectorAll("tr");

              for(let i =1;i<trs.length;i++){
                table.deleteRow(1);
              }
              display();
      
            }

            function deleteA(){
              const id=
              
                  display();
          
                }
    

  }

  
  