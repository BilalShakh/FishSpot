import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import Home from './components/Home/Home';
//import Registration from "./components/Registration/Registration";
//import Spot from "./components/Spot/Spot";
//import { Submission } from "./components/Submission/Submission";
import Result from "./components/Result/Result"
import Search from "./components/Search/Search"
//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/search"
          exact
          component={() => <Search />}
        />
        <Route
          path="/result"
          exact
          component={() => <Result />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

