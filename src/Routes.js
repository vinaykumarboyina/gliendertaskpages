import { Switch, Route, BrowserRouter } from "react-router-dom";
import Forgot from "./components/login/Forgot";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/forgot">
          <Forgot />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
