let ul = document.querySelector("ul");
let addTask = document.querySelector(".btn");
let inputBox = document.querySelector(".input-box");

function createTask() {
  let task = inputBox.value;

  if (task == "") {
    alert("please  create a task");
  } else {
    let span = document.createElement("span");
    let listItem = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.className = "checkbox";
    span.innerHTML = '<img src="close.png" alt="close">';
    listItem.appendChild(input);
    listItem.appendChild(document.createTextNode(task));
    listItem.appendChild(span);
    ul.insertBefore(listItem, ul.firstChild);
    inputBox.value = "";
    save();
  }
}

addTask.addEventListener("click", () => {
  createTask();
});

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTask();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "checkbox") {
    //   console.log(e.target);
    //   console.log(e.target.parentElement);
    let mytarget = e.target.parentElement;
    if (e.target.checked) {
      mytarget.style.textDecoration = "line-through";
      save();
    } else {
      mytarget.style.textDecoration = "none";
      save();
    }
  } else if (e.target.tagName === "IMG") {
    let parent = e.target.parentElement;
    parent.parentElement.remove();
    console.log(parent);
    save();
  }
});


function save()
{
    localStorage.setItem("tasks",ul.innerHTML);
}

function showTask()
{
   let mydata= localStorage.getItem("tasks");
   ul.innerHTML=mydata;
}

showTask();
