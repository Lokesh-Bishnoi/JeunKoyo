// import logo from './logo.svg';
import "./App.css";
import "./Footer.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Main />
      <Testimonials />
      <Footer />
      <Slider />

      {/* <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Testimonials" component={Testimonials} />
        <Route exact path="/Footer" component={Footer} />
      </Switch> */}
    </>
  );
}

export default App;
