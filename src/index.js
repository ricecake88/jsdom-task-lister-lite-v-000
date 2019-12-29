 let list_counter_id = 1;
 
 function deleteTask(element) {
   element.parentNode.parentNode.removeChild(element.parentNode)
 }

function setColor(task) {
 task_item = document.getElementById(task);
 task_item.value.style.color = red;
}

 function createPriorityForm(unique_task_id) {
   event.preventDefault()
   let priorities = ['high', 'medium', 'low'];
   let priority_form = document.createElement("form")
   let select_priority = document.createElement("select");
   priority_form.setAttribute("method", "POST");
   priority_form.setAttribute("name", "priorityForm")
   priority_form.appendChild(select_priority);
   select_priority.setAttribute("name", "dropdown");
   select_priority.onclick = setColor(unique_task_id);
   select_priority.setAttribute("class", "medium");
   for (let i = 0; i < priorities.length; i++) {
      let option = document.createElement("option");
      option.value = priorities[i];
      if (priorities[i] == "high") {
        option.text = "h";
        option.setAttribute("class", "high");
      } else if (priorities[i] == "medium") {
        option.text = 'm';
        option.setAttribute("class", "normal")
      } else if (priorities[i] == "low") {
        option.text = 'l';
        option.setAttribute("class", "low")        
      }
      select_priority.appendChild(option); 
   }
   return priority_form;
 }
 
 function createTask(task_list) {
   let new_task = document.createElement("li")
   let input = document.getElementById("new-task-description");   
   new_task.id = "task" + list_counter_id.toString(10);
   if (input.value !== "") {
     const delete_task_html = '<button id=delete onclick="deleteTask(this);">x</button>';
     const priority_form_html = createPriorityForm(new_task.id);
     new_task.innerHTML = priority_form_html.outerHTML + " " + input.value + delete_task_html;
     console.log(new_task);
     new_task.setAttribute("class", "task_element")
     task_list.appendChild(new_task);
     input.value = "";
   }
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
