import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Drawer, Navigation, Layout, Header, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer'

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Title" scroll>
          <Navigation>
            <Link to="/homepage">Home Page</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/homepage">Home Page </Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
          <Footer/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
