var toDoInput = document.getElementById("task")
var toDoList = document.getElementById("list")
var submitButton = document.getElementById("liveToastBtn")
var addToast = document.getElementById("addToast")
var warningToast = document.getElementById("warningToast")
var lis = document.getElementsByTagName("li")
var toDoArray = []

for(let i = 0; i < lis.length; i++) {
    createCloseBtn(lis[i])
}

var close = document.getElementsByClassName("close")
deleteToDo()

let toDos = JSON.parse(localStorage.getItem('toDoList'))
for(let i = 0; i < toDos.length; i++) {
    var newToDoLocal = document.createElement("li")
    newToDoLocal.innerHTML = toDos[i]
    toDoList.prepend(newToDoLocal)
    createCloseBtn(newToDoLocal)
    deleteToDo()
}

function newElement() {
    if(toDoInput.value.trim() && toDoInput.value.length >=3) {
        var newToDo = document.createElement("li")
        newToDo.innerHTML = toDoInput.value
        toDoList.prepend(newToDo)
        createCloseBtn(newToDo)
        toDoArray.push(toDoInput.value)
        $(addToast).toast('show')
    }
    else if(toDoInput.value.length < 3 && toDoInput.value.length > 0) {
        $(warning2Toast).toast('show')
    }
    else {
        $(warningToast).toast('show')
    }
    
    localStorage.setItem("toDoList", JSON.stringify(toDoArray))
    toDoInput.value = ""
    deleteToDo()
}

for(let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.classList.toggle("checked")
    })
}

function createCloseBtn(element) {
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    element.appendChild(span)
}

function deleteToDo() {
    for(let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
        var div = this.parentElement
        div.style.display = "none"
    })
    }
}










   
