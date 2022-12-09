import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/GetInvolved">Get Involved</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  )
};

export default Layout;