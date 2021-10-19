cur1={name:"Problem solving with computational thinking",    id: 105, date:"2021-03-20",  hardRate: 1, courselink:"problem solving.pdf"},
cur2={name:"Procedural programming", id:201, date:"2021-05-20", hardRate: 1, courselink:"proc2.html"},
cur3={name:"Object oriented programming", id: 203, date:"2021-04-20", hardRate: 1, courselink:"proc2.html"},
cur4={name:"Fundamentals of object oriented programming in javascript", id: 305, date: "2021-03-20", hardRate: 1, courselink:"problem solving.pdf"},
cur5={name:"web appication programming in java script", id: 315, date: "2021-07-20", hardRate: 1, courselink:"problem solving.pdf"},
cur6={name:"Discrete Mathematics", id: 272, date:"2021-08-20", hardRate: 1, courselink:"problem solving.pdf"},
cur7={name:"Data Structures", id: 221, date: "2021-01-20", hardRate: 1, courselink:"problem solving.pdf"}
courses=[cur1, cur2, cur3, cur4, cur5, cur6, cur7];

p1={name:"Payroll", id:105, date: "2021/05/12", hardRate:5, courselink:"problem solving.pdf" }
p2={name:"Library", id:105, date: "2021/10/2", hardRate:2, courselink:"problem solving.pdf"}
p3={name:"Bank", id:105, date: "2021/07/21", hardRate:4, courselink:"problem solving.pdf"}
p4={name:"Student", id:105, date: "2021/02/19", hardRate:7, courselink:"problem solving.pdf"}

projects=[p1,p2,p3,p4];


window.onload = fn; 
 
function fn() { 

  localStorage.setItem("courseData", JSON.stringify(courses));  
  localStorage.setItem("projectData", JSON.stringify(projects)); 
//   localStorage.setItem("messagesData", JSON.stringify(contacts)); 
}

function add() {

    const name1=document.getElementById("name").value;
    const id1=document.getElementById("id").value;
    const date1=document.getElementById("date").value;
    const hRate1=document.getElementById("hRate").value;
    const cLink1=document.getElementById("cLink").value; 

        let obj={
            name:name1,
            id:id1,
            date:date1,
            hardRate:hRate1,
            courselink:cLink1
        }

        courses.push(obj);
        localStorage.setItem("courseData",JSON.stringify(courses));
        console.log(obj);
        console.log(courses);
        alert("You have added new course!")
    }

function deleteCourse () {
    let searchCourse=document.getElementById("inputName").value;
    for(let i=0; i< courses.length; i++){
        if(courses[i].name==searchCourse){
            courses.splice(i,1)
            break;
        }
        return;
    }
    alert("Successfully deleted course!")
}

function editCourse(){
    
}


