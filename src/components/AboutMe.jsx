import React, { Component } from "react";
import Content from "./Content";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="col-md-6" data-aos="fade-up">
          <h4>01</h4>
          <h1 className="size-50">
            Know <br />
            About me
          </h1>
          <Content>
            <p>
              Hello, my name is Lisbeth Mbuvi. I'm a front end engineer with
              experience in  React,Redux, Vanilla Html and css
            </p>

            <p>
              My dream is to one day Create systems and softwares for the Government.
              I realised this dream when i was interning for the County Government of Laikipia.
              I have since then gone ham on myself until the day i will live this dream
                (currently working on some ideas).
            </p>

            <p>
              I'm constantly learning new things. currently those things include
              gaining more experience with React, Express, and Node
              JS
            </p>

            <p>
              My latest projects are Let's Talk Mawingu and Mawingu customer care system
              check them out on 
              
              <a
                onClick={this.goToGithub}
                href="https://github.com/ndanuu/newlivechat"
              >
                Github
              </a>
              , or on the Projectspage. They are built with React, Redux and Node JS.

            </p>

            <p>
              When I'm not learning something new chances are I'm 
              going on a solo picnic or an adventure out in the wild or rather i am cleaning and cooking.
            </p>
          </Content>
        </div>
      </div>
    );
  }
}

export default AboutMe;
