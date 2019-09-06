var form = document.getElementById('addForm');
var taskList = document.getElementById("tasks");
var filter = document.getElementById("filter");

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
filter.addEventListener('keyup', filterTasks);

function addTask(e){
	e.preventDefault();

	var newTask = document.getElementById('task').value;
	var li = document.createElement('li');
	li.className = "list-group-item";
	li.appendChild(document.createTextNode(newTask));

	var deleteBtn = document.createElement('button');
	deleteBtn.className = "btn btn-sm btn-danger float-right delete";
	deleteBtn.appendChild(document.createTextNode('X'));
	li.appendChild(deleteBtn);

	taskList.appendChild(li);
}

function removeTask(e){
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you sure?")) {
			var li = e.target.parentElement;
			taskList.removeChild(li);
		}
	}
}

function filterTasks(e){
	var text = e.target.value.toLowerCase();
	var tasks = taskList.getElementsByTagName('li');

	Array.from(tasks).forEach(function(task){
		var taskName = task.firstChild.textContent.toLowerCase();
		if (taskName.indexOf(text) != -1) {
			task.style.display = 'block';
		} else{
			task.style.display = 'none';
		}
	})
}