let total = 0;
let completed = 0;

function updateCounters() {

    document.getElementById("totalTasks").innerText = total;

    document.getElementById("completedTasks").innerText = completed;

    document.getElementById("pendingTasks").innerText =
    total - completed;
}

function addTask() {

    const title =
    document.getElementById("taskTitle").value;

    if (title === "") {
        alert("Enter Task");
        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML = `
        ${title}

        <button onclick="completeTask(this)">
        ✓
        </button>

        <button onclick="deleteTask(this)">
        🗑
        </button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    total++;

    updateCounters();

    document.getElementById("taskTitle").value = "";

    document.getElementById("taskDescription").value = "";
}

function completeTask(btn) {

    btn.parentElement.style.textDecoration =
    "line-through";

    completed++;

    updateCounters();

    btn.disabled = true;
}

function deleteTask(btn) {

    btn.parentElement.remove();

    total--;

    updateCounters();
}