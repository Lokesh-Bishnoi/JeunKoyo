// import logo from './logo.svg';
import "../src/css/App.css";
import "../src/css/Footer.css";
import "../src/css/Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Beffypatty from "./components/Beffypatty";
import Addtocart from "./components/Addtocart";
import Reservations from "./components/Reservations";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Beffypatty" component={Beffypatty} />
        <Route exact path="/Reservations" component={Reservations} />
        <Route exact path="/Addtocart" component={Addtocart} />
      </Switch>
    </>
  );
}

export default App;
