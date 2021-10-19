
  cur1={name:"Problem solving with computational thinking",    id: 105, date:new Date("3-18-2021"),  hardRate: 1, courselink:"problem solving.pdf"},
  cur2={name:"Procedural programming", id:201, date:new Date("4-15-2021"), hardRate: 1, courselink:"proc2.html"},
  cur3={name:"Object oriented programming", id: 203, date:new Date("5-19-2021"), hardRate: 1, courselink:"proc2.html"},
  cur4={name:"Fundamentals of object oriented programming in javascript", id: 305, date: new Date("9-23-2021"), hardRate: 1, courselink:"problem solving.pdf"},
  cur5={name:"web appication programming in java script", id: 315, date: new Date("10-21-2021"), hardRate: 1, courselink:"problem solving.pdf"},
  cur6={name:"Discrete Mathematics", id: 272, date:new Date("7-15-2021"), hardRate: 1, courselink:"problem solving.pdf"},
  cur7={name:"Data Structures", id: 221, date: new Date("6-10-2021"), hardRate: 1, courselink:"problem solving.pdf"}
  courses=[cur1, cur2, cur3, cur4, cur5, cur6, cur7];
  
  window.onload=myFunction;


    function myFunction(){

        // document.getElementById("btn").onclick = sortA
     const btn=document.getElementById("btn");
     btn.addEventListener("click", sortA)
    

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
     const newArray=courses.sort((c1, c2) => {
            console.log(new Date(c1.date) - (new Date(c2.date)))
            return (new Date(c1.date) - (new Date(c2.date)));

       

      
          });

        }
    