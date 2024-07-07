import React from "react"; // Importing the React library
import "../styles/Navbar.css"; // Importing the CSS file for Navbar styling
import { Link } from "react-router-dom";
// Defining the Navbar component
function Navbar() {
  return (
    <div className="Navbar-Container">
      {/* Main container div for the Navbar */}
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/add-task">new task</Link>
        </li>
      </ul>
    </div>
  );
}

// Exporting the Navbar component as the default export
export default Navbar;
