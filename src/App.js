import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <ProfilePage />
    </Router>
  );
}

export default App;
