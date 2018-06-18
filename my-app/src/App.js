import React, { Component } from 'react';
import './App.css';
import Author from './Author.js'
import Home from './components/Home.js'
import History from './components/History.js'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
//import './mycomponent.js'


class App extends Component {
  //console.log(this.props.match.params)

  render() {
    const style = { color: 'red' }
    console.log("test", this.props.params)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HOME</h1>
          </header>
          <BrowserRouter>
          <div className="nav-bar">
            <ul>
            <li><NavLink to ="/" activeOnlyWhenExact={true}   > Accueil </NavLink></li>
            <li><NavLink to ="/notre-histoire" activeClassName="selected" > Notre histoire </NavLink></li>
            </ul>
         
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History}/>
          </Switch>

          </div>
          </BrowserRouter>
         
 
        <div className="content">
        <BrowserRouter>

          
        </BrowserRouter>
      

         <Author name="bob" />
         </div>
      </div>
    );
  }
}



export default App;
/*activeStyle={style} className ="navLink"
const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
      <OldSchoolMenuLink to="/about" label="About" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);*/
