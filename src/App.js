import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import AboutUs from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about-us" component={AboutUs}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
