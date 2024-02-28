let tasks = []

function newElement() {
    let li = document.createElement("li");
    let input = document.getElementById("task").value;
    if (input === "") {
      $(".error").toast("show");
    } else {
      li.textContent = input;
      let span = document.createElement("span");
      span.className = "close";
      span.textContent = "x";
      li.appendChild(span);
      list.appendChild(li);
      $(".success").toast("show");
      document.getElementById("task").value = "";
      tasks.push(input);
      let tasksString = JSON.stringify(tasks);
      localStorage.setItem("tasks", tasksString);
    }
  }
  
  list.addEventListener("click", function(task) {
    if (task.target.tagName === "LI") {
      task.target.classList.toggle("checked");
    }
  });

list.onclick = function(event) {
    let target = event.target;
    if (target.tagName === "SPAN") {
      let li = target.parentNode;
      if (li.classList.contains("checked")) {
        let index = Array.from(list.children).indexOf(li);
        list.removeChild(li);
        tasks.splice(index, 1);
        let tasksString = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasksString);
      } else {
        event.preventDefault();
      }
    }
  };
  
  
window.onload = function() {            
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach(function(task) {
        let li = document.createElement("li");
        li.textContent = task;
        let span = document.createElement("span");
        span.className = "close";
        span.textContent = "x";
        li.appendChild(span);
        list.appendChild(li);
      });
    }
  };