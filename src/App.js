import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Registration from "./components/Registration/Registration";

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
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
