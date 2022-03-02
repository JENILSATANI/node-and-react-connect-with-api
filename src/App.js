import './App.css';
import Copy from './Copy';
import Lol from './Lol'
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
import Pp from './Pp';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Copy /> */}
        {/* <Pp /> */}
        {/* <Lol/> */}
        <Switch>
          <Route exact path='/' component={Lol} />
          <Route exact path='/:id' component={Pp} />
          {/* <Route exact path="/:id" component={Pp} render={(props) => {
            < Lol id={props.match.params.id} />
          }} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
