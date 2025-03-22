import { Link } from "react-router-dom";

function adminNav() {
  return (
    <nav className="flex gap-3">
      <link to="/admin/profile" className="font-bold uppercase text-gray-500">
        Profile
      </link>
      <link
        to="/admin/change-password"
        className="font-bold uppercase text-gray-500"
      >
        Change Password
      </link>
    </nav>
  );
}

export default adminNav;
