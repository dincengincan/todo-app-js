const input = document.getElementById("input")
const todoList = document.getElementById("list")
const button = document.getElementById("add-button")

const addToDo = (value) => {
    const li = document.createElement("li")
    const cancelButton= document.createElement("button")
    const checkButton= document.createElement("button")
    const label= document.createElement("label")

    todoList.appendChild(li);

    li.appendChild(label);
    li.appendChild(checkButton);
    li.appendChild(cancelButton);

    label.innerHTML = value;
    
    cancelButton.innerHTML= "X";
    checkButton.innerHTML= "Done";
    cancelButton.setAttribute("id", "cancel-button");
    checkButton.setAttribute("id", "check-button");

    checkButton.addEventListener("click", onCheck);
    cancelButton.addEventListener("click", onCancel);
}

const onClick = () => {
    addToDo(input.value);
    input.value = "";
}

const onCheck = (e) => {
    if(e.target.innerHTML === "Done"){ 
        e.target.parentNode.firstChild.className = "label-line-through";
        e.target.innerHTML = "Undone"
    }else{
        e.target.parentNode.firstChild.className = "label-normal"
        e.target.innerHTML = "Done"
    }
}

const onCancel = (e) => {
    e.target.parentNode.remove()
}

button.addEventListener("click", onClick);
