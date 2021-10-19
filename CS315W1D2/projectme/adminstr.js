let courses=[];
window.onload= fn;


function fn(){
    let storage=localStorage.getItem("courseData");
        courses=JSON.parse(storage)
function save(){
    localStorage.setItem("courseData",JSON.stringify(courses));
}

    // const name1=document.getElementById("name");
    // const id1=document.getElementById("id");
    // const date1=document.getElementById("date");
    // const hRate1=document.getElementById("hRate");
    // const cLink1=document.getElementById("cLink");

    const name1=document.getElementById("name").value;
    const id1=document.getElementById("id").value;
    const date1=document.getElementById("date").value;
    const hRate1=document.getElementById("hRate").value;
    const cLink1=document.getElementById("cLink").value;

    const input=document.getElementById("inputName");

    

    const editBtn=document.getElementById("edit");
    const addBtn=document.getElementById("add");
    const delBtn=document.getElementById("delete");
    
    const info=document.getElementById("info");


    
    // editBtn.addEventListener("click", editCourse);
    // addBtn.addEventListener("click", addCourse);
    // delBtn.addEventListener("click", delCourse);


    function editCourse(){
        let inputs=input.value;

        const name=name1.value;
        const id=id1.value;
        const date=date1.value;
        const hRate=hRate1.value;
        const cLink=cLink1.value;

        let newObj={
            name:name,
            id:id,
            date:date,
            hardRate:hRate,
            courselink:cLink

        }

        for(let i=0; i< courses.length; i++){
            if(courses[i].name==inputs){
                courses.splice(i,1,newObj)
                break;
            }
            return;
        }
       
        save();
        

        }



    }
    function addCourse(){
       
                let name=name1.value;
                let id=id1.value;
                let date=date1.value;
                let hRate=hRate1.value;
                let cLink=cLink1.value;

                let obj={
                    name:name,
                    id:id,
                    date:date,
                    hardRate:hRate,
                    courselink:cLink

                }
                
        courses.push(obj)
        alert(obj)
        console.log(obj)
        save();
        console.log(courses)


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
    }
    function delCourse(){

        // let inputs=input.value;

        // const name=name1.value;
        // const id=id1.value;
        // const date=date1.value;
        // const hRate=hRate1.value;
        // const cLink=cLink1.value;

        // let newObj={
        //     name:name,
        //     id:id,
        //     date:date,
        //     hardRate:hRate,
        //     courselink:cLink

        // }

        for(let i=0; i< courses.length; i++){
            if(courses[i].name==inputs){
                courses.splice(i,1)
                break;
            }
            return;
        }




    }



