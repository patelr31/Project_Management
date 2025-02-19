const chapters = {
    "Chapter 1: Introduction to Project Management": [
        { name: "Project Charter", status: "Completed" },
        { name: "Stakeholder Register", status: "In Progress" },
        { name: "Business Case", status: "Completed" },
        { name: "Assumption Log", status: "Completed" }
    ],
    "Chapter 2: Project Scope Management": [
        { name: "Scope Management Plan", status: "Completed" },
        { name: "Work Breakdown Structure (WBS)", status: "Completed" },
        { name: "Scope Statement", status: "Completed" },
        { name: "Requirements Documentation", status: "Completed" },
        { name: "Change Request Forms (Scope-related)", status: "Remaining" }
    ],
    "Chapter 3: Project Time Management": [
        { name: "Schedule Management Plan", status: "Completed" },
        { name: "Project Schedule (Gantt Chart, Critical Path Analysis)", status: "Completed" },
        { name: "Activity List and Attributes", status: "Remaining" },
        { name: "Milestone List", status: "Completed" }
    ],
    "Chapter 4: Project Cost Management": [
        { name: "Cost Management Plan", status: "Remaining" },
        { name: "Budget Estimates", status: "Remaining" },
        { name: "Cost Baseline", status: "Remaining" },
        { name: "Expense Tracking Reports", status: "Remaining" }
    ],
    "Chapter 5: Project Quality Management": [
        { name: "Quality Management Plan", status: "Completed" },
        { name: "Quality Metrics", status: "Completed" },
        { name: "Quality Assurance Reports", status: "Remaining" },
        { name: "Quality Control Checklists", status: "Completed" }
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
