import { NavLink } from "react-router-dom";

function Hello() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <NavLink to="/todo">
        <div className="bg-blue-100 shadow-lg rounded-lg p-8 max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Aplikacja Todo</h1>
          <div>Kliknij by przejść</div>
        </div>
      </NavLink>
    </div>
  );
}

export default Hello;
