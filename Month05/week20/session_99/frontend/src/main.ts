import { fetchTasks, createTask, deleteTask, updateTask } from './api'
import './style.css'
import type { Task } from './types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
    <h1>Task manager</h1>
    <form id="task-form">
      <input 
        type="text"
        id="title-input"
        placeholder="New task add ..."
        required
      >

    <input 
      type="text"
      id="desc-input"
      placeholder="Description (optional)"
    >
    <button type="submit">Add Task</button>
  </form>

  <div id="task-list">
    <p>loading ...</p>
  </div>
</div>
`

// DOM elements
const form = document.querySelector<HTMLFormElement>('#task-form')!;
const titleInput = document.querySelector<HTMLInputElement>('#title-input')!;
const descInput = document.querySelector<HTMLInputElement>('#desc-input')!;
const taskListDiv = document.querySelector<HTMLDivElement>('#task-list')!;

// show tasks
function renderTasks(tasks: Task[]): void {
  if (tasks.length === 0) {
    taskListDiv.innerHTML = `
      <p> class="empty" Task байхгүй байна. Эхлээд нэмээрэй! </p>
    `;
    return;
  }
  taskListDiv.innerHTML = tasks.map((task) =>
    `
     <div class="task-item ${task.completed ? 'completed' : ''}">
      <div class="task-content">

        <input
          type="checkbox"
          ${task.completed ? 'checked' : ''}
          data-id="${task.id}"
          class="toggle-btn"
        >
        <div>
          <strong>${task.title}</strong>
          ${task.description ? `<p>${task.description}</p>` : ''}
          <small>${new Date(task.created_at).toLocaleDateString('mn-MN')}</small>
        </div>
      </div>
      <button class="delete-btn" data-id="${task.id}">🗑️</button>
     </div>
    `
  ).join('');

  // Delete button event listeners
  document.querySelectorAll<HTMLButtonElement>('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', async function () {
      const id = Number(btn.dataset.id);
      if (confirm('Delete?')) {
        await deleteTask(id);
        loadTasks();
      }
    });
  });

  // Update task
  document.querySelectorAll<HTMLInputElement>('.toggle-btn').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const target = e.target as HTMLInputElement;
      const id = Number(target.dataset.id);
      const task = tasks.find(t => t.id === id);
      if (task) {
        await updateTask(id, {
          title: task.title,
          description: task.description,
          completed: target.checked,
        });

        loadTasks();
      }

    })
  });
};

// Load Tasks from server
async function loadTasks(): Promise<void> {
  try {
    const tasks = await fetchTasks();
    renderTasks(tasks);
  } catch (error) {
    taskListDiv.innerHTML = `<p class="error">Алдаа: ${error}</p>`;
  }
}

// Form submit
form.addEventListener('submit', async (e: Event) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title) return;

  try {
    await createTask({ title, description });
    titleInput.value = '';
    descInput.value = '';
    loadTasks();
  } catch (error) {
    alert(`Алдаа: ${error}`);
  }

});

//  Delete task


// Initial load
loadTasks();
