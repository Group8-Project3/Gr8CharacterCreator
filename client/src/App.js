import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterCreator from "./pages/CharacterCreator";
import Login from "./pages/Login";
import CharacterList from "./pages/CharacterList";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/CharacterCreator">
            <CharacterCreator />
          </Route>
          <Route path="/CharacterList">
            <CharacterList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
