import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          {/* <Route exact path='/saved' component={Saved}/>
          <Route component={NoMatch}/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
