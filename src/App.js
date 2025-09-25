import logo from './logo.svg';
import './App.css';
import TodoItemCreator from "./components/TodoItemCreator";
import {useRecoilValue} from "recoil";
import {filteredTodoListState, todoListState} from "./todoAtom";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import {currentUserNameQuery} from "./userAtoms";
import {Suspense} from "react";

function App() {
    const todoList = useRecoilValue(todoListState)
    const filteredTodoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
          <CurrentUserInfo />
      </Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
    const userName = useRecoilValue(currentUserNameQuery);
    return <div>{userName}</div>
}