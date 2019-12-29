 let list_counter_id = 1;
 
 function deleteTask(element) {
   element.parentNode.parentNode.removeChild(element.parentNode)
 }

 function createPriorityForm() {
   event.preventDefault()
   let priorities = ['high', 'medium', 'low'];
   let priority_form = document.createElement("form")
   let select_priority = document.createElement("select");
   priority_form.setAttribute("method", "POST");
   priority_form.setAttribute("name", "priorityForm")
   priority_form.appendChild(select_priority);
   select_priority.setAttribute("name", "dropdown");
   select_priority.setAttribute("onchange", "this.priorityForm.submit()");
   for (let i = 0; i < priorities.length; i++) {
      let option = document.createElement("option");
      option.value = priorities[i];
      if (priorities[i] == "high") {
        option.text = "h";
      } else if (priorities[i] == "medium") {
        option.text = 'm';
      } else if (priorities[i] == "low") {
        option.text = 'l';
      }
      select_priority.appendChild(option); 
   }
   return priority_form;
 }
 
 function changeColor(task, priority) {
   event.preventDefault()   
   task = document.getElementById(task);
   if (priority == "h") {
    task.style.color = 'red';
   } else if (priority == "m") {
     task.style.color = 'green';
   } else {
     task.style.color = 'yellow';
   }
 }
 
 function editTask(element) {
   
 }
 
 function monitorTaskPriority(task_id) {
  task = document.getElementById("task_id");
  priorityForm = document.getElementById("priorityForm");
  console.log(priorityForm);
  priorityForm.addEventListener("submit", changeColor(task_id, priorityForm.value));   
 }

 
 function createTask(task_list) {
   let new_task = document.createElement("li")
   let input = document.getElementById("new-task-description");   
   new_task.id = "task" + list_counter_id.toString(10);
   if (input.value !== "") {
     const delete_task_html = '<button id=delete onclick="deleteTask(this);">x</button>';
     const priority_form_html = createPriorityForm();
     new_task.innerHTML = priority_form_html.outerHTML + " " + input.value + delete_task_html;
     console.log(new_task);
     new_task.setAttribute("class", "task_element")
     task_list.appendChild(new_task);
     input.value = "";
   }
   console.log(new_task.id)
    monitorTaskPriority(new_task.id);
 }

 function submittedTask(event) {
   event.preventDefault()
   let tasks = document.getElementById("tasks")
   createTask(tasks);
   
 }

document.addEventListener("DOMContentLoaded", () => {
 form = document.getElementById("create-task-form");
 form.addEventListener("submit", submittedTask);



});
