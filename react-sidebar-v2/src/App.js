import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import BI from './pages/BI';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/bi" component={BI}/>
          <Route path="/webapps"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
