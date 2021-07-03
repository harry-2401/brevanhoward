import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import AboutUs from "./pages/about";
import Home from "./pages/home";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
