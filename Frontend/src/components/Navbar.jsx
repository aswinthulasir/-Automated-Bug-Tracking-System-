// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//       <Link className="navbar-brand" to="/">Bug Tracker</Link>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
//           <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
//           <li className="nav-item"><Link className="nav-link" to="/bugs">Dashboard</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <ul>
        {isLoggedIn && <li><Link to="/bugs">Dashboard</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
