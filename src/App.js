import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";
import "./App.css";
import Shop from "./Shop/Shop";
import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      routes: "",
    };
  }
  componentDidMount() {}

  handleRoutes = (e, { name }) => {
    this.setState({
      routes: `${name}`,
    });
  };
  render() {
    return (
      <div>
        <Sticky>
          <Menu
            className="ui secondary menu"
            style={{
              fontSize: 25,
              fontFamily: "Nerko One",
              backgroundColor: "white",
            }}
          >
            <Router>
              <Menu.Item>Sweets</Menu.Item>
              <div className="ui centered container">
                <Link to="">
                  <Menu.Item name="" onClick={this.handleRoutes}>
                    Shop
                  </Menu.Item>
                </Link>
                <Link to="/about">
                  <Menu.Item name="about" onClick={this.handleRoutes}>
                    About
                  </Menu.Item>
                </Link>
                <Link to="/faq">
                  <Menu.Item name="faq" onClick={this.handleRoutes}>
                    FAQ
                  </Menu.Item>
                </Link>
                <Link to="/contact">
                  <Menu.Item name="contact" onClick={this.handleRoutes}>
                    Contact
                  </Menu.Item>
                </Link>
              </div>
              <div className="ui container">
                <Link to="/cart">
                  <img
                    style={{ width: "75%", height: "75%" }}
                    src="https://img.icons8.com/dusk/64/000000/shopping-cart.png"
                  />
                </Link>
                <Link to="/account">Account</Link>
              </div>
            </Router>
          </Menu>
        </Sticky>
        {this.state.routes === "" ? <Shop /> : false}
        {this.state.routes === "about" ? <About /> : false}
        {this.state.routes === "faq" ? <FAQ /> : false}
        {this.state.routes === "contact" ? <Contact /> : false}
      </div>
    );
  }
}

export default App;
