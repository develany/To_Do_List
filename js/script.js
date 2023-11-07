class Todo {
  constructor() {
    this.totalTasks = document.querySelectorAll("#task").length;
  }
  addTask(taskText) {
    //clonando o modelo da task
    let tamplete = document.querySelector(".task").cloneNode(true);
    //removendo a classe hide p/ o css deixar aparecer
    tamplete.classList.remove("hide");
    //manipulando o texto da task
    let templateText = tamplete.querySelector(".task-title");
    templateText.textContent = taskText;
    //container com as tasks
    let list = document.querySelector("#tasks-container");
    //inserindo a nova task no container
    list.appendChild(tamplete);

    //adicionando evento nas tasks
    this.addEvents();
    this.checkTasks("add");
  }
  removeTask(task) {
    // achando o elemento
    let parenteEl = task.parentElement;
    // removendo o elemento
    parenteEl.remove();

    this.checkTasks("remove");
  }
  completeTask(task) {
    //adcionando a tarefa como concluida
    task.classList.add("done");
  }
  addEvents() {
    let removeBtns = document.querySelectorAll(".fa-times");
    let removeBtn = removeBtns[removeBtns.length - 1];
    let doneBtns = document.querySelectorAll(".fa-check");
    let doneBtn = doneBtns[doneBtns.length - 1];

    //adicionar evento de remover
    removeBtn.addEventListener("click", function () {
      todo.removeTask(this);
    });

    //adicionar evento de completar tarefa
    doneBtn.addEventListener("click", function () {
      todo.completeTask(this);
    });
  }
  checkTasks(command) {
    let msg = document.querySelector("#empty-tasks");
    if (command === "add") {
      this.totalTasks += 1;
    } else if (command === "remove") {
      this.totalTasks -= 1;
    }
    //checando se tem tarefas
    if (this.totalTasks == 1) {
      msg.classList.remove("hide");
    } else {
      msg.classList.add("hide");
    }
  }
}

let todo = new Todo();

// evento de click
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let taskText = document.querySelector("#task");
  if (taskText.value !== "") {
    todo.addTask(taskText.value);
  }
  taskText.value = "";
});
