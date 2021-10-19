// p1={name:"Payroll", id:105, date: "2021/05/12", hardRate:5, courselink:"problem solving.pdf" }
// p2={name:"Library", id:105, date: "2021/10/2", hardRate:2, courselink:"problem solving.pdf"}
// p3={name:"Bank", id:105, date: "2021/07/21", hardRate:4, courselink:"problem solving.pdf"}
// p4={name:"Student", id:105, date: "2021/02/19", hardRate:7, courselink:"problem solving.pdf"}

// projects=[p1,p2,p3,p4];
projects=[];
window.onload= fn;

function fn(){

    let storage=localStorage.getItem("projectData");
      projects=JSON.parse(storage)

    const btn= document.getElementById("btn");
    const btn1= document.getElementById("btn1");

    btn.addEventListener("click", sortDate)
    btn1.addEventListener("click", sortHardRate)
    display();

    function display(){
    const table=document.getElementById("table");
    console.log(table);
    console.log(projects);
        for(let i=0; i<projects.length; i++){

        const tr= table.insertRow();
        const nametd=tr.insertCell();
        // nametd.innerHTML=projects[i].name;
        const idtd=tr.insertCell();
        idtd.innerHTML=projects[i].id;
        const datetd=tr.insertCell();
        datetd.innerHTML=projects[i].date;
        const hardRatetd=tr.insertCell();
        hardRatetd.innerHTML=projects[i].hardRate;
        // const courseLink=tr.insertCell();

        const a =document.createElement("a");
        a.href=projects[i].courselink;
        a.innerHTML=projects[i].name;
        nametd.append(a);
        

    }

    }

    function sortDate(){

        projects.sort((a, b)=> {

            return new Date(a.date)-new Date(b.date);
            
        });
        const trs=document.querySelectorAll("tr")

        for(let i=0; i<trs.length-1; i++){
            table.deleteRow(1);
        }
        display();

    }
    function sortHardRate(){
        projects.sort((a,b)=>{
            
            return a.hardRate - b.hardRate;
        } );
        console.log(projects);
        const trs=document.querySelectorAll("tr")
        for(let i=0; i<trs.length-1; i++){
            table.deleteRow(1)
        }
        display();

    }

}