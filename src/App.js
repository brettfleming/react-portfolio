import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route exact path='/saved' component={Saved}/>
          <Route path='/about' component={About}/>
          <Route component={NoMatch}/> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
