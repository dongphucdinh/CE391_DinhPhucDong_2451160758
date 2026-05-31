const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const count = document.querySelector("#count");
const filters = document.querySelector(".filters");
const clearCompleted = document.querySelector("#clearCompleted");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const updateCount = () => {
    const left = todos.filter(todo => !todo.completed).length;
    count.textContent = `${left} items left`;
};
const getFilteredTodos = () => {
    if (currentFilter === "active") {
        return todos.filter(todo => !todo.completed);
    }
    if (currentFilter === "completed") {
        return todos.filter(todo => todo.completed);
    }
    return todos;
};
const createTodoElement = (todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;
    if (todo.completed) {
        li.classList.add("completed");
    }
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";
    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
};
const renderTodos = () => {
    todoList.textContent = "";
    getFilteredTodos().forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });
    updateCount();
    saveTodos();
};
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text === "") {
        return;
    }
    todos.push({
        id: Date.now(),
        text,
        completed: false
    });
    todoInput.value = "";
    renderTodos();
});
todoList.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    if (!li) {
        return;
    }
    const id = Number(li.dataset.id);
    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
        return;
    }
    if (e.target.classList.contains("todo-text")) {
        todos = todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        );
        renderTodos();
    }
});
todoList.addEventListener("dblclick", (e) => {
    if (!e.target.classList.contains("todo-text")) {
        return;
    }
    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);
    const todo = todos.find(todo => todo.id === id);
    const input = document.createElement("input");
    input.className = "edit-input";
    input.value = todo.text;
    li.replaceChild(input, e.target);
    input.focus();
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const newText = input.value.trim();
            if (newText !== "") {
                todos = todos.map(todo =>
                    todo.id === id
                        ? { ...todo, text: newText }
                        : todo
                );
            }
            renderTodos();
        }
    });
});
filters.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter")) {
        return;
    }
    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });
    e.target.classList.add("active");
    currentFilter = e.target.dataset.filter;
    renderTodos();
});
clearCompleted.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});
renderTodos();