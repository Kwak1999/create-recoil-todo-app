import logo from './logo.svg';
import './App.css';
import TodoItemCreator from "./components/TodoItemCreator";
import {useRecoilValue} from "recoil";
import {filteredTodoListState, todoListState} from "./todoAtom";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";

function App() {
    const todoList = useRecoilValue(todoListState)
    const filteredTodoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="App">
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
