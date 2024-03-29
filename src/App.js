
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

// You can think of these components as "pages"
// in your app.

// function Home() {
// return (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
// }

// function About() {
// return (
//   <div>
//     <h2>About</h2>
//   </div>
// );
// }

// function Dashboard() {
// return (
//   <div>
//     <h2>Dashboard</h2>
//   </div>
// );
// }

export default App;




   
