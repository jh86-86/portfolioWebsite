import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bio from '../Pages/Bio';
import Tech from '../Pages/Tech';
import ProjectPage from '../Pages/ProjectPage';



function Navbar() {


  return (
<Router>
<div >
  <ul id="navbar">
    <li>
      <Link to="/">Bio</Link>
    </li>
    <li>
      <Link to="/tech">TechStack</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
  </ul>

  <Switch>
    <Route path="/projects">
      <ProjectPage />
    </Route>
    <Route path="/tech">
      <Tech />
    </Route>
    <Route path="/">
      <Bio />
    </Route>
  </Switch>
</div>
</Router>
);
}

export default Navbar;