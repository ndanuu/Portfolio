import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Developer from "./assets/img/Developer.jpeg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
         <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Developer} className="avatar-img" />

            <div className="banner-text">
              <h1>Frontend Developer</h1>
              <hr />
              <p>HTML/CSS | Bootsrap | React | Redux</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>

                {/* Github */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ion-icon name="logo-react"></ion-icon>
                </a>

                {/* Youtube*/}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
