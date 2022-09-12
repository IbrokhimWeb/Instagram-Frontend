// @ts-nocheck
import s from "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PrivateRoute from "./routes/private-route/PrivateRoute";
import Admin from "./routes/admin/Admin";
import About from "./routes/about/About";
import BackToTop from "./components/backToTop/BackToTop";

function App() {
  return (
    <div className={s.App}>
      <Router>
        <Navbar />
        <BackToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
