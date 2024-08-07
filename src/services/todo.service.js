class ToDoService {

    constructor(todoRepository){
        this.todoRepository = todoRepository;
    }
    create(todoText){
        // any bussiness logic
        if (todoText.length == 0) return;
        todoText = todoText.trim().toUpperCase();
        this.todoRepository.insert(todoText);
    }
    getOneTodo(id){
        return this.todoRepository.get(id);
    }
    getAllTodos(id){
        return this.todoRepository.getAll();
    }
}

module.exports= ToDoService;