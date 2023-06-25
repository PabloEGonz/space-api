import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet,
} from 'react-router-dom';
import {
  Navbar, Nav, Container, NavbarBrand,
} from 'react-bootstrap';
import logo from './img/planet.jpg';
import NavItem from './components/NavItem';
import ProfilePage from './pages/ProfilePage';
import Rocket from './components/Rockets';
import Page404 from './pages/Page404';
import MissionsPage from './pages/MissionsPage';
import './styles/header.scss';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Rocket />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Page404 />} />
      </Route>,
    ),
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => (
  <>
    <Navbar>
      <Container className="header">
        <div className="d-flex gap5">
          <NavbarBrand>
            <img
              src={logo}
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </NavbarBrand>
          <h1>Space Travelers Hub</h1>
        </div>
        <Nav className="nav-menu d-flex">
          <NavItem to="/">Rockets</NavItem>
          <NavItem to="/missions">Missions</NavItem>
          <span className="separator">|</span>
          <NavItem to="/profile">Profile</NavItem>
        </Nav>
      </Container>
    </Navbar>
    <div className="wrapper">
      <Outlet />
    </div>
  </>
);

export default App;
