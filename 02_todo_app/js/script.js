const todoInput = document.getElementById("add-todo");
const todoList = document.getElementById("list-box");

const addTodo = () => {
  if (todoInput.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    todoList.appendChild(li);
  }
  todoInput.value = "";
  setDataToLS();
  console.log(todoList.innerHTML);
};

todoList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      setDataToLS();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      setDataToLS();
    }
  },
  false
);

const setDataToLS = () => {
  localStorage.setItem("todo-data", todoList.innerHTML);
};

const getDataFromLS = () => {
  todoList.innerHTML = localStorage.getItem("todo-data");
};
getDataFromLS();
