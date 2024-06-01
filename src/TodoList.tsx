import React from "react";
import { Reorder } from "framer-motion";

interface Todo {
  id: number;
  tytul: string;
  opis: string;
  daily: boolean;
  kategoria: string;
}

interface TodoListProps {
  todo: Todo[];
  onDeleteTodo: (id: number) => void;
  onReorder: (reorderedItems: Todo[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todo,
  onDeleteTodo,
  onReorder,
}) => {
  return (
    <div className="wyswietlacz flex flex-col items-center justify-center mt-20 w-2/5 border border-gray-300 rounded-lg shadow-lg">
      <Reorder.Group
        className="reorder-list flex flex-col items-center justify-center w-full my-4"
        values={todo}
        onReorder={onReorder}
      >
        <h2>Todo List</h2>
        {todo.map((todo) => {
        
          return (
            <Reorder.Item
              className="reorder-item w-4/5 mb-2 border border-gray-300 rounded-md bg-gray-100 p-4 hover:bg-gray-200"
              key={todo.id}
              value={todo}
            >
              <span className="reorder-handle">
                <div className="srodek">
                  <b>{todo.tytul}</b>
                  <p>{todo.opis}</p>
                  <p>{todo.daily ? " ✅ Daily" : " ❎ Nie daily "}</p>
                  <p>{todo.kategoria}</p>
                  <button
                    className="usun px-3 py-1 bg-blue-600 text-white rounded-md shadow-md hover:bg-red-600 text-xs"
                    onClick={() => {
                      onDeleteTodo(todo.id);
                    }}
                  >
                    Usuń zadanie
                  </button>
                </div>
              </span>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default TodoList;
