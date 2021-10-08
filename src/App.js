import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Registration from "./components/Registration/Registration";
import Spot from "./components/Spot/Spot";
import { Submission } from "./components/Submission/Submission";

//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        {/* <Route
          path="/FreeClass"
          exact
          render={props => <FreeClass {...props} />}
        /> */}
        <Route
          path="/signup"
          exact
          render={props => <Registration {...props} />}
        />
        <Route
          path="/spot"
          exact
          render={props => <Spot {...props} />}
        />
        <Route
          path="/submission"
          exact
          render={props => <Submission {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
