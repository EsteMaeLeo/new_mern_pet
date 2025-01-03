import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Header() {
  const { closeSession } = useAuth();
  return (
    <header className="py-10 bg-indigo-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-2xl text-indigo-200 text-center">
          Vet Patient {""}
          <span className="text-white font-black">Management </span>
        </h1>
        <nav className="flex lex-col lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to="/admin" className="text-white text-xl">
            Patients
          </Link>
          <Link to="/admin" className="text-white text-xl">
            Profile
          </Link>

          <button
            type="button"
            className="text-white text-sm uppercase font-bold"
            onClick={closeSession}
          >
            Close Session
          </button>
        </nav>
        <nav className="flex lex-col lg:flex-row gap-4 mt-5 lg:mt-0"></nav>
      </div>
    </header>
  );
}

export default Header;
