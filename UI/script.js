const apiUrl = "http://localhost:8080/tasks";

async function fetchTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task.title}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">
                <img src="trash-icon.png" alt="Delete">
            </button>
        `;
        taskList.appendChild(li);
    });
}

async function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") return;
    
    await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: taskInput, completed: false })
    });
    
    document.getElementById("taskInput").value = "";
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchTasks();
}

fetchTasks();
