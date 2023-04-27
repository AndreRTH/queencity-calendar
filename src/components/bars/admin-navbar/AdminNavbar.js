import { Link } from 'react-router-dom';
import './AdminNavbar.css';

function AdminNavbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://d368g9lw5ileu7.cloudfront.net/races/race68999-fulllogo.bDhJNM.png"
            alt="crown icon"
            className="crownimg"
          />
        </div>
        <div className="links-container">
          <ul>
            <li>
              <Link to='/' className='active'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/calendar'>Calendar</Link>
            </li>
            <li>
              <Link to='/Adminforum'>Forum</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;

