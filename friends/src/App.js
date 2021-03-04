import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/friendList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <h1>Not Logged in</h1>

          <Login />
        </Route>

        <PrivateRoute exact path="/dashboard" component={FriendList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
