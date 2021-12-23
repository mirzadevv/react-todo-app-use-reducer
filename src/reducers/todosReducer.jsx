const todosReducer = (todos, action) => {
  const todo = action.payload;
  switch (action.type) {
    case "add": {
      const newTodos = [...todos];
      newTodos.unshift(action.payload);
      return newTodos;
    }
    case "completedChange": {
      const newTodos = todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, isCompleted: !todo.isCompleted };
        } else {
          return item;
        }
      });
      return newTodos;
    }
    case "delete": {
      const newTodos = todos.filter((todoItem) => todoItem.id !== todo.id);
      return newTodos;
    }
    default:
      return todos;
  }
};

export default todosReducer;
