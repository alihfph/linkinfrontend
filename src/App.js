import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./Pages/ProfilePage";
import OtherProfile from "./Pages/OtherProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FooTer from "./Components/FooTer";
import Homepage from "./Pages/Homepage";
import SignUp from "./Pages/SignUpPage";
import Signin from "./Pages/SigninPage";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={(routeProps) => <Homepage {...routeProps} />}
        />
        <Route
          path="/profile/me"
          exact
          render={(routeProps) => <ProfilePage {...routeProps} />}
        />
        <Route
          path="/signup"
          exact
          render={(routeProps) => <SignUp {...routeProps} />}
        />
        <Route
          path="/signin"
          exact
          render={(routeProps) => <Signin {...routeProps} />}
        />
        <Route
          path="/profile/:userId"
          render={(routeProps) => <OtherProfile {...routeProps} />}
        />
      </Switch>
      <FooTer />
    </Router>
  );
}

export default App;
