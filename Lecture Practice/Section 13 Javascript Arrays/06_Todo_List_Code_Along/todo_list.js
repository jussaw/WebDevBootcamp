var todos = []
window.setTimeout(function () {
    // put all of your JS code from the lecture here
    var input = prompt("What would you like to do?");
    while (input !== "quit") {
        // List all todos
        if (input === "list") {
            console.log(todos);
        }

        // Add new todo to list
        else if (input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
        }

        // Ask for new input 
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP");
}, 500);