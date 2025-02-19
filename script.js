const chapters = {
    "Chapter 1: Introduction to Project Management": [
        { name: "Project Charter", status: "Completed" },
        { name: "Stakeholder Register", status: "In Progress" },
        { name: "Business Case", status: "Remaining" },
        { name: "Feasibility Study", status: "Completed" }
    ],
    "Chapter 2: Project Scope Management": [
        { name: "Scope Management Plan", status: "Completed" },
        { name: "Work Breakdown Structure (WBS)", status: "In Progress" },
        { name: "Scope Statement", status: "Remaining" },
        { name: "Requirements Documentation", status: "Completed" },
        { name: "Change Request Forms (Scope-related)", status: "Remaining" }
    ],
    "Chapter 3: Project Time Management": [
        { name: "Schedule Management Plan", status: "Completed" },
        { name: "Project Schedule (Gantt Chart, Critical Path Analysis)", status: "Remaining" },
        { name: "Activity List and Attributes", status: "In Progress" },
        { name: "Milestone List", status: "Completed" }
    ]
};

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (const chapter in chapters) {
        const chapterRow = document.createElement("tr");
        chapterRow.innerHTML = `<td colspan="2" class="chapter-header"><strong>${chapter}</strong></td>`;
        taskList.appendChild(chapterRow);

        chapters[chapter].forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.name}</td>
                <td class="status ${task.status.toLowerCase().replace(" ", "-")}">${task.status}</td>
            `;
            taskList.appendChild(row);
        });
    }
}

document.addEventListener("DOMContentLoaded", renderTasks);
