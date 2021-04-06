import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FooTer from "./Components/FooTer";

function App() {
  return (
    <Router>
      <NavBar />

      <Route
        path="/profile/me"
        exact
        render={(routeProps) => <ProfilePage {...routeProps} />}
      />
      <FooTer />
    </Router>
  );
}

export default App;
