import "./App.css";
import Navbar from "./components/navbar/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
// user account components
import YourAccount from "./pages/YourAccount";
import ChangePassword from "./components/userProfile/profileOption/ChangePassword";

// user data check imp
import setAuthToken from "./utils/setAuthToken";
import { SET_USER_LOGIN } from "./redux/constants/types";

// check localstorege data
if (localStorage.jwtToken && localStorage.user) {
  // setauthtoken from https headers
  setAuthToken(localStorage.jwtToken);

  // redux setup for user data
  store.dispatch({
    type: SET_USER_LOGIN,
    payload: JSON.parse(localStorage.user),
  });
}

function App() {
  return (
    <div className="App ">
      <Provider store={store}>
        <Router>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={UserLogin} />
            <Route path="/register" component={UserRegister} />
            <Route path="/your_account" component={YourAccount} />
            <Route path="/change_password" component={ChangePassword} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
