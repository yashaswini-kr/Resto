import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
Route,
Link} from 'react-router-dom'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from  './components/RestaurantUpdate'
import RestaurantList from './components/RestaurantList'
import Login from './components/Login'
import Home from './components/Home'
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faList, faHome, faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'




function App() {
  return (
    <div className="App">
        <Router>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} color="orange" />Home</Link></Nav.Link>
      <Nav.Link href="#list"><Link to="/list"><FontAwesomeIcon icon={faList} color="orange" />List</Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/create"><FontAwesomeIcon icon={faPlus} color="orange" />Create</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} color="orange" />Search</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} color="orange" />Login</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Route path="/list">
          <RestaurantList/>
        </Route>
        <Route path="/create">
          <RestaurantCreate/>
        </Route>
        <Route path="/search">
          <RestaurantSearch/>
        </Route>
        <Route path="/update/:id"
        render={props=>
          <RestaurantUpdate {...props} />
          }
        >
        </Route>
        {/* */}
        <Route path="/login"
        render={props=>
          <Login {...props} />
          }
        >
        </Route>

         {/* */}
        <Route path="/detail">
          <RestaurantDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        </Router>
    </div>
  );
}

export default App;

