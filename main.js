const input = document.getElementById("input")
const todoList = document.getElementById("list")
const button = document.getElementById("add-button")

const li = document.createElement("li")
const cancelButton= document.createElement("button")
const checkButton= document.createElement("button")

const addToDo = (value) => {

    todoList.appendChild(li);
    li.innerHTML = value;

    li.appendChild(checkButton);
    li.appendChild(cancelButton);
    cancelButton.innerHTML= "X";
    checkButton.innerHTML= "Edit";
    cancelButton.setAttribute("id", "cancel-button");
    checkButton.setAttribute("id", "check-button");
}

const onClick = () => {
    addToDo(input.value);
    input.value = "";
}

const onCheck = (e) => {
    console.log(e.target.innerHTML)
}

const onCancel = (e) => {
    console.log(e.target.innerHTML,"cancel")
}


todoList.addEventListener("click", onCheck);
cancelButton.addEventListener("click", onCancel);
button.addEventListener("click", onClick);
