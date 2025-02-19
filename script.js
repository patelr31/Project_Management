const chapters = {
    "Chapter 1: Introduction to Project Management": [
        { name: "Project Charter", status: "Remaining" },
        { name: "Stakeholder Register", status: "Remaining" },
        { name: "Business Case", status: "Remaining" },
        { name: "Feasibility Study", status: "Remaining" }
    ],
    "Chapter 2: Project Scope Management": [
        { name: "Scope Management Plan", status: "Remaining" },
        { name: "Work Breakdown Structure (WBS)", status: "Remaining" },
        { name: "Scope Statement", status: "Remaining" },
        { name: "Requirements Documentation", status: "Remaining" },
        { name: "Change Request Forms (Scope-related)", status: "Remaining" }
    ],
    "Chapter 3: Project Time Management": [
        { name: "Schedule Management Plan", status: "Remaining" },
        { name: "Project Schedule (Gantt Chart, Critical Path Analysis)", status: "Remaining" },
        { name: "Activity List and Attributes", status: "Remaining" },
        { name: "Milestone List", status: "Remaining" }
    ],
    "Chapter 4: Project Cost Management": [
        { name: "Cost Management Plan", status: "Remaining" },
        { name: "Budget Estimates", status: "Remaining" },
        { name: "Cost Baseline", status: "Remaining" },
        { name: "Expense Tracking Reports", status: "Remaining" }
    ],
    "Chapter 5: Project Quality Management": [
        { name: "Quality Management Plan", status: "Remaining" },
        { name: "Quality Metrics", status: "Remaining" },
        { name: "Quality Assurance Reports", status: "Remaining" },
        { name: "Quality Control Checklists", status: "Remaining" }
    ],
    "Chapter 6: Project Resource Management": [
        { name: "Resource Management Plan", status: "Remaining" },
        { name: "Resource Breakdown Structure (RBS)", status: "Remaining" },
        { name: "Team Assignments", status: "Remaining" },
        { name: "Responsibility Assignment Matrix (RAM)", status: "Remaining" },
        { name: "Resource Utilization Reports", status: "Remaining" }
    ],
    "Chapter 7: Project Communication Management": [
        { name: "Communication Plan", status: "Remaining" },
        { name: "Meeting Agendas and Minutes", status: "Remaining" },
        { name: "Project Status Reports", status: "Remaining" },
        { name: "Stakeholder Communication Logs", status: "Remaining" }
    ],
    "Chapter 8: Project Risk Management": [
        { name: "Risk Management Plan", status: "Remaining" },
        { name: "Risk Register", status: "Remaining" },
        { name: "Risk Response Plans", status: "Remaining" },
        { name: "Updated Risk Assessment Reports", status: "Remaining" }
    ],
    "Chapter 9: Project Procurement Management": [
        { name: "Procurement Plan", status: "Remaining" },
        { name: "Vendor Contracts", status: "Remaining" },
        { name: "Purchase Orders", status: "Remaining" },
        { name: "Procurement Performance Reviews", status: "Remaining" }
    ],
    "Chapter 10: Project Integration Management": [
        { name: "Project Management Plan", status: "Remaining" },
        { name: "Change Log", status: "Remaining" },
        { name: "Issue Log", status: "Remaining" },
        { name: "Lessons Learned Document", status: "Remaining" }
    ],
    "Chapter 11: Project Monitoring and Control": [
        { name: "Performance Reports (Earned Value Analysis)", status: "Remaining" },
        { name: "Variance Reports", status: "Remaining" },
        { name: "Control Charts", status: "Remaining" },
        { name: "Updated KPI Reports", status: "Remaining" }
    ],
    "Chapter 12: Project Closure": [
        { name: "Final Project Report", status: "Remaining" },
        { name: "Handover Document", status: "Remaining" },
        { name: "Client Acceptance Form", status: "Remaining" },
        { name: "Project Closure Checklist", status: "Remaining" },
        { name: "Archived Project Records", status: "Remaining" }
    ]
};

function updateTaskCounts() {
    let completedCount = 0, inProgressCount = 0, remainingCount = 0;

    for (const chapter in chapters) {
        chapters[chapter].forEach(task => {
            if (task.status === "Completed") completedCount++;
            else if (task.status === "In Progress") inProgressCount++;
            else remainingCount++;
        });
    }

    document.getElementById("completed-count").innerText = completedCount;
    document.getElementById("in-progress-count").innerText = inProgressCount;
    document.getElementById("remaining-count").innerText = remainingCount;
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (const chapter in chapters) {
        const chapterRow = document.createElement("tr");
        chapterRow.innerHTML = `<td colspan="4" class="chapter-header"><strong>${chapter}</strong></td>`;
        taskList.appendChild(chapterRow);

        chapters[chapter].forEach((task, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${task.name}</td>
                <td class="status ${task.status.toLowerCase().replace(" ", "-")}">${task.status}</td>
                <td>
                    <button class="complete-btn" onclick="updateStatus('${chapter}', ${index}, 'Completed')">Complete</button>
                    <button class="progress-btn" onclick="updateStatus('${chapter}', ${index}, 'In Progress')">In Progress</button>
                    <button class="reset-btn" onclick="updateStatus('${chapter}', ${index}, 'Remaining')">Reset</button>
                </td>
            `;

            taskList.appendChild(row);
        });
    }

    updateTaskCounts();
}

function updateStatus(chapter, index, newStatus) {
    chapters[chapter][index].status = newStatus;
    renderTasks();
}

document.addEventListener("DOMContentLoaded", renderTasks);
