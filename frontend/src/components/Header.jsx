import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-10 bg-indigo-600">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-2xl text-indigo-200">
          Vet Patient {""}
          <span className="text-white font-black">Management </span>
        </h1>
        <nav className="flex gap-4">
          <Link to="/admin" className="text-white text-xl">
            Patients
          </Link>
          <Link to="/admin" className="text-white text-xl">
            Profile
          </Link>

          <button type="button" className="text-white text-sm uppercase font-bold">Close Session</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
