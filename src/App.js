import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route to="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
