// @ts-nocheck
import s from "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import PrivateRoute from "./routes/privateRoute/PrivateRoute";
// import Admin from "./routes/admin/Admin";
import About from "./routes/about/About";
import BackToTop from "./components/backToTop/BackToTop";
import Inbox from "./routes/inbox/Inbox";
import Me from "./routes/me/Me";
import Heart from "./routes/heart/Heart"
import Explore from './routes/exploreSearch/ExporeSearch';
import Search from "./components/search/Search";
import SinglePage from "./routes/singlePage/SinglePage";
import Zaregistrirovatcya from "./routes/zaregistrirovatcya/Zaregistrirovatcya";




function App() {
  return (
    <div className={s.App}>
      <Router>
        <Navbar />
        <BackToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/rrr" component={Zaregistrirovatcya} />

          {/* <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute> */}
          <Route path="/about" component={About} />
          <Route path="/direct/inbox" component={Inbox} />
          <Route path="/me" component={Me} />
          <Route path="/heart" component={Heart} />
          <Route path="/explore" component={Explore} />
          <Route path="/search" component={Search} />
          <Route path="/p/:id" component={SinglePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
