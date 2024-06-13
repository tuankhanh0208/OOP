class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo);
    }

    getTodos() {
        return this.todos;
    }
}
class View {
    constructor() {
        this.app = this.getElement("body");

        this.todoWrapper = this.createElement("div", "todo");
        this.form = this.createElement("form", "todo-form")
        this.form.autocomplete = "off";

        this.input = this.createElement("input", "todo-input");
        this.input.type = "text";
        this.input.placeholder = "Enter your task";
        this.input.name = "todo";

        this.submit = this.createElement("button", "todo-submit");
        this.submit.type = "submit";
        this.submit.textContent = "Add"
        this.form.append(this.input, this.submit);

        this.todoList = this.createElement("div", "todo-list");
        this.todoWrapper.append(this.form, this.todoList);
        this.app.append(this.todoWrapper);
    }

    //createElement
    createElement(tag, className) {
        const elm = document.createElement(tag);
        if (className) elm.classList.add(className);
        return elm;
    }
    //getElement
    getElement(selector) {
        const elm = document.querySelector(selector);
        return elm;
    }
    //
    get _todoValue() {
        return this.input.value;
    }
    _resetValue() {
        this.input.value = ""
    }
    // displayTodos(todos) {
    //     if (todos.length > 0) {
    //         todos.forEach(totoText => {
    //             const div = this.createElement("div", "todo-item");
    //             const span = this.createElement("span", "todo-text");
    //             span.textContent = totoText;
    //             const icon = this.createElement("i");
    //             icon.className = "fa fa-trash todo-remove";
    //             icon.setAttribute("data-value", todoText);
    //             div.append(span, icon);
    //             this.todoList.append(div);
    //         })
    //     }
    // }
    displayTodos(todos) {
        // Clear the existing list
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        // Display each todo
        if (todos.length > 0) {
            todos.forEach(todoText => {
                const div = this.createElement("div", "todo-item");
                const span = this.createElement("span", "todo-text");
                span.textContent = todoText;
                const icon = this.createElement("i");
                icon.className = "fa fa-trash todo-remove";
                icon.setAttribute("data-value", todoText);
                div.append(span, icon);
                this.todoList.append(div);
            });
        }
    }
    viewAddTodo(handler) {
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            if (this._todoValue) {
                handler(this._todoValue);
                this._resetValue();
            }
        });
    }
    viewRemoveTodo(handler) {
        this.todoList.addEventListener("click", e => {
            if (e.target.matches(".todo-remove")) {
                const value = e.target.dataset.value;
                handler(value);
            }
        });
    }
}
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // Display initial todos
        this.view.displayTodos(this.model.getTodos());

        // Add todo handler
        this.view.viewAddTodo(this.handleAddTodo.bind(this));

        // Remove todo handler
        this.view.viewRemoveTodo(this.handleRemoveTodo.bind(this));
    }

    handleAddTodo(todo) {
        this.model.addTodo(todo);
        this.view.displayTodos(this.model.getTodos());
    }

    handleRemoveTodo(todo) {
        this.model.removeTodo(todo);
        this.view.displayTodos(this.model.getTodos());
    }
}
const app = new Controller(new Model(), new View())