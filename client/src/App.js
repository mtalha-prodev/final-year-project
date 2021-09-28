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
import Shop from "./pages/Shop";
// private route
import PrivateRouter from "./components/common/PrivateRouter";

// user account components
import YourAccount from "./pages/YourAccount";
import ChangePassword from "./components/userProfile/profileOption/ChangePassword";
import SellerIntro from "./components/userProfile/sellerAccount/SellerIntro";

// user data check imp
import setAuthToken from "./utils/setAuthToken";
import { SET_USER_LOGIN } from "./redux/constants/types";
import Categories from "./pages/Categories";
import Page from "./pages/Page";

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
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/pages">
              <Page />
            </Route>
            <Route path="/login">
              <UserLogin />
            </Route>
            <Route path="/register">
              <UserRegister />
            </Route>
            <Route path="/your_account">
              <PrivateRouter>
                <YourAccount />
              </PrivateRouter>
            </Route>
            <Route path="/change_password">
              <PrivateRouter>
                <ChangePassword />
              </PrivateRouter>
            </Route>
            <Route path="/seller_intro">
              <PrivateRouter>
                <SellerIntro />
              </PrivateRouter>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
