import React, { useState, ChangeEvent } from "react";

interface Todo {
  id: number;
  tytul: string;
  opis: string;
  daily: boolean;
  kategoria: string;
}

interface AddTodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [tytul, setTytul] = useState("");
  const [opis, setOpis] = useState("");
  const [daily, setDaily] = useState(false);
  const [kategoria, setKategoria] = useState("Praca");

  const handleTytulChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTytul(e.target.value);
  };

  const handleOpisChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOpis(e.target.value);
  };

  const handleDailyChange = () => {
    setDaily(!daily);
  };

  const handleKategoriaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setKategoria(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tytul.trim() || !opis.trim() || !kategoria.trim()) return;
    onAddTodo({
      id: Date.now(),
      tytul,
      opis,
      daily,
      kategoria,
    });
    setTytul("");
    setOpis("");
    setDaily(false);
    setKategoria("Praca");
  };

  return (
    <div className="dodawacz flex flex-col items-center justify-center w-2/5 p-5 border border-gray-300 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <input
          className="tytul w-11/12 my-5 p-4 border border-gray-300 rounded-md text-lg font-bold"
          value={tytul}
          type="text"
          placeholder="Tytuł"
          onChange={handleTytulChange}
        />
        <textarea
          className="w-11/12 mb-5 p-4 border border-gray-300 rounded-md text-base"
          value={opis}
          placeholder="Opis zadania"
          onChange={handleOpisChange}
        />
        <div className="check flex items-center justify-center text-lg font-bold py-4">
          Daily?
          <input
            className="ml-2"
            checked={daily}
            type="checkbox"
            onChange={handleDailyChange}
          />
        </div>
        <label className="kat flex items-center justify-center text-xl font-bold mb-5">
          Kategoria:&nbsp;
          <select
            className="ml-2"
            value={kategoria}
            onChange={handleKategoriaChange}
          >
            <option value="Praca">Praca</option>
            <option value="Osobiste">Osobiste</option>
            <option value="Zakupy">Zakupy</option>
            <option value="Sport">Sport</option>
          </select>
        </label>
        <button
          type="submit"
          className="dodaj px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Dodaj zadanie
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
