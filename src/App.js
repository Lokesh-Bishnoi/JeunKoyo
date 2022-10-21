// import logo from './logo.svg';
import "../src/css/App.css";
import "../src/css/Footer.css";
import "../src/css/Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Pattey from "./components/Pattey";
import Beffypatty from "./components/Beffypatty";
=======
import Menupage from "./components/Menupage";
>>>>>>> bd0474f58019dfab3385cbe496c1d8765416bfe7
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
<<<<<<< HEAD
      <Pattey />
      <Beffypatty />

=======
      <Menupage />
>>>>>>> bd0474f58019dfab3385cbe496c1d8765416bfe7
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
