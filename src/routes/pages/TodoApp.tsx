import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  reorderTodos,
  setTodos,
  addTodo,
  deleteTodo,
  setStatus,
} from "../../todoSlice";
import "./TodoApp.css";
import gsap from "gsap";
import Button from "@mui/material/Button";
import AddTodoForm from "../../AddTodoForm";
import TodoList from "../../TodoList";

const przykadoweTodos = [
  {
    id: 1,
    tytul: "Zadanie!!",
    opis: "Zrobić zadanie",
    daily: false,
    kategoria: "Praca",
  },
  {
    id: 2,
    tytul: "Trening",
    opis: "Przebiec 3 kilometry",
    daily: true,
    kategoria: "Osobiste",
  },
];

function ToDoApp() {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [buttonClicked, setButtonClicked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const caleRef = useRef<HTMLDivElement>(null);

  interface Todo {
    id: number;
    tytul: string;
    opis: string;
    daily: boolean;
    kategoria: string;
  }

  useEffect(() => {
    dispatch(setStatus("laduje"));
    setTimeout(() => {
      dispatch(setTodos(przykadoweTodos));
    }, 1000);
  }, [dispatch]);

  const handleClick = () => {
    if (!buttonClicked) {
      gsap.to(buttonRef.current!, {
        x: 200,
        rotation: 1200,
        duration: 10,
        opacity: 0,
        scale: 3,
        yoyo: true,
        ease: "elastic.out(1, 0.3)",
        onComplete: () => setButtonClicked(true),
      });
    }

    gsap.fromTo(
      caleRef.current!,
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 8, rotate: 720, y: 0 }
    );
  };

  const handleAddTodo = (newTodo: Todo) => {
    dispatch(addTodo(newTodo));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleReorder = (reorderedItems: Todo[]) => {
    dispatch(reorderTodos(reorderedItems));
  };

  return (
    <div className="page">
      <div className="App flex flex-col items-center justify-center">
        <Button
          ref={buttonRef}
          onClick={handleClick}
          disabled={buttonClicked}
          variant="contained"
          style={{ marginTop: "100px" }}
        >
          Zacznij
        </Button>
      </div>

      <div
        ref={caleRef}
        className="caleRef flex flex-col items-center justify-center mt-20 p-5 opacity-0"
      >
        <AddTodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todo={todos}
          onDeleteTodo={handleDeleteTodo}
          onReorder={handleReorder}
        />
      </div>
    </div>
  );
}

export default ToDoApp;
