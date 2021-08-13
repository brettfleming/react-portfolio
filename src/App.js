import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
