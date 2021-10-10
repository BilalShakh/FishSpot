import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Registration from "./components/Registration/Registration";
import Results from "./components/Results/Results";
import Spot from "./components/Spot/Spot";
import Search from "./components/Search/Search";
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
        <Route
          path="/results"
          exact
          render={props => <Results {...props} />}
        />
        <Route
          path="/search"
          exact
          render={props => <Search {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
