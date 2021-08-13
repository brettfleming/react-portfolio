import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

console.log(process.env)
const routePrefix = (process.env.NODE_ENV === "production") ? "/react-portfolio/": "/"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={`${routePrefix}`} component={Home}/>
          <Route exact path={`${routePrefix}projects`} component={Projects}/>
          <Route path={`${routePrefix}about`} component={About}/>
          <Route exact path={`${routePrefix}contact`} component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
