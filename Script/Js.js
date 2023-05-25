let addList = document.getElementById("add");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

const inputLength = () =>{
    return input.value.length;
}

const createListElement = () =>{
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
    const crossOut =() =>{
        li.classList.toggle("done")
    }
    li.addEventListener("click",crossOut)

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);
    deleteBtn.className = "delete_btn";
    function deleteListItem() {
        li.classList.add("delete")
    }

}

const addListClick = ()=>{
    if (inputLength() > 0){
        createListElement();
    }
}

const addListKeyPress = (event) =>{
    if (inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

addList.addEventListener("click",addListClick);
addList.addEventListener("keypress",addListKeyPress);

