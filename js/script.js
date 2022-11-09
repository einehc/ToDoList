let addToDoBtn = document.querySelector ("#addBtn");
addToDoBtn.addEventListener ("click", addToDo);



let now = new Date();
document.getElementById("display").innerHTML = now;

function addToDo () {
    
    let toDo = document.querySelector ("#toDo").value;
    document.querySelector ("#toDo").value = "";
    
        if (toDo == "") {
          alert("Please Enter a Task");
           return false;
        }

    let toDoList = document.querySelector ("#toDoList");

    let toDoItem = document.createElement("div");
    let toDoInput = document.createElement ("input");
    toDoInput.type ="text";
    toDoInput.setAttribute("disabled", "");
    toDoInput.value = toDo; 
    toDoInput.defaultValue = toDo; 


    let doneCheck = document.createElement("input");
    doneCheck.setAttribute ("type", "checkbox");
    doneCheck.classList = "doneitemcheck";

    doneCheck.addEventListener ("click", doneTask)
    toDoItem.appendChild(doneCheck);

    function doneTask(){
            let message = "Are you sure that you're done with this task?";

            if (confirm(message)==true){
                toDoInput.style.textDecoration = "line-through";
                message = "Mark as DONE";
                doneCheck.setAttribute ("disabled", "");
                editBtn.setAttribute ("disabled", "")

        } else {
            message = "Cancelled";
            doneCheck.checked = false;
        }
        alert(message);
        }



    
    
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "<span class='material-symbols-outlined'> edit</span>";
    // editBtn.textContent = "Edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener ("click", editToDo);
   


    toDoList.appendChild(toDoItem);
    toDoItem.appendChild(toDoInput);
    toDoItem.appendChild(editBtn);


    function editToDo(){
        toDoInput.removeAttribute("disabled", "");
        editBtn.setAttribute ("disabled", "")
        delBtn.setAttribute ("disabled", "")

        let saveBtn = document.createElement("button");
        // saveBtn.textContent = "Save";
        saveBtn.innerHTML = "<span class='material-symbols-outlined'>save</span>";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveToDo);
        toDoItem.appendChild (saveBtn);
        

        function saveToDo(){
            let text = "Are you sure you want to save " + toDoInput.value + " in your Task?";

            if (confirm(text)==true){
                editBtn.removeAttribute ("disabled", "")

                let newValue = toDoInput.value;
                toDoInput.default = newValue;

                toDoInput.setAttribute ("disabled", "");
                delBtn.removeAttribute ("disabled", "")
                toDoItem.removeChild(saveBtn);


            text = "Saved Successfully";
        } else {
            text = "Cancelled";
            editBtn.removeAttribute ("disabled", "")
            toDoInput.setAttribute ("disabled", "");
            delBtn.removeAttribute ("disabled", "")
            toDoItem.removeChild(saveBtn);
            toDoInput.value = toDoInput.defaultValue;
        }
        alert(text);

        }

    }

        let delBtn = document.createElement ("button");
            // delBtn.textContent = "Delete";
            delBtn.classList = "delBtn";
            delBtn.type ="submit";
            delBtn.innerHTML = "<span class='material-symbols-outlined'>delete</span>";
            delBtn.addEventListener ("click", delToDo);
            toDoItem.appendChild(delBtn);


            function delToDo(){
                let delMessage = "Are you sure you want to delete this Task?";

                if (confirm(delMessage)==true){
                this.parentNode.remove();
                addToDoBtn.removeAttribute ("disabled", "");
                }

                
            }


    
            let toDoNum = toDoList.childElementCount;
 
            if (toDoNum >= 5){
            addToDoBtn.setAttribute ("disabled", "");
            
            };

}
 
 


            

