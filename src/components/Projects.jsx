import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Card,
  Grid,
  Cell,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import Logo1 from "./assets/img/logo1.png";
import mawingu from "./assets/img/mawingu.png";
import Logo from "./assets/img/react-logo.png";
import { Link, withRouter } from "react-router-dom";

class Projects extends Component {
  state = {
    activeTab: 0,
  };

  goToGithub = () => {
    console.log("Its getting here");
    this.props.history.push("https://github.com/ndanuu/newlivechat");
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "150px",
                backgroundImage: `url( ${Logo1})`,
              }}
              onClick
            ></CardTitle>
            <CardText>
              A live chat System to enhance the customer interactions with the
              customer service at Mawingu.
            </CardText>
            <CardActions border>
              <a
                className="btn btn-info"
                onClick={this.goToGithub}
                href="https://github.com/ndanuu/newlivechat"
              >
                Github
              </a>
              
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                backgroundImage: `url( ${mawingu})`,
              }}
            ></CardTitle>
            <CardText>
              An Admin System that shows the CRUD operations for the Admin of
              the HotSpot Product in Mawingu.
            </CardText>
            <CardActions border>
            <a
                className="btn btn-info"
                onClick={this.goToGithub}
                href="https://github.com/ndanuu/newlivechat"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                backgroundImage: `url( ${Logo})`,
              }}
            ></CardTitle>
            <CardText>
              This is my own portfolio as a frontend developer.
            </CardText>
            <CardActions border>
            <a
                className="btn btn-info"
                onClick={this.goToGithub}
                href="https://github.com/ndanuu/newlivechat"
              >
                Github
              </a>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} imgSrc>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                backgroundImage: `url( ${Logo1})`,
              }}
            >
              Lets Talk Mawingu
            </CardTitle>
            <CardText>
              A live chat System to enhance the customer interactions with the
              customer service at Mawingu.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "black", height: "100px" }}></CardTitle>
            <CardText>
              A live chat System to enhance the customer interactions with the
              customer service at Mawingu.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    //  else if (this.state.activeTab === 3){
    //     return(
    //         <div><h1>This is html/css</h1></div>
    //     )

    // }
  }

  render() {
    return (
      <div className="category-tab">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
        >
          <Tab>React</Tab>
          <Tab>Redux</Tab>
          <Tab>html/css</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Projects);
