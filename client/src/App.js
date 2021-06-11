import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

function App() {
  return (
    <div className="App ">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={UserLogin} />
          <Route path="/register" component={UserRegister} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
