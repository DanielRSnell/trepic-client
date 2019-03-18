import React from "react";
import { Menu, Button, Input } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import "./style.css";

class NavTop extends React.Component {
  componentDidMount() {}

  handleCLick(label) {
    this.props.history.push(`${"/" + label}`);
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Menu borderless={true} size="huge" style={{ padding: 10 }} stackable>
        <Menu.Item style={{ padding: "1rem" }}>
          <img
            onClick={() => this.handleCLick("")}
            src={
              "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/12/03194038/512x512bb.jpg"
            }
            id="nav__search"
          />
          <Input
            icon="search"
            placeholder='Try "Amsterdam"'
            iconPosition="left"
            style={{ border: "none", marginLeft: "1rem" }}
            size="large"
          />
        </Menu.Item>

        <Menu.Item position="right">
          {/* <Button
            style={{ background: "white", color: "slate", fontSize: 14 }}
            onClick={() => this.handleCLick("register")}
          >
            Become a Destination
          </Button>
          <Button
            style={{ background: "white", color: "slate", fontSize: 14 }}
            onClick={() => this.handleCLick("register")}
          >
            Become a influencer
          </Button> */}
          {!localStorage.getItem("access_token") ? (
            <div>
              <Button
                onClick={this.login.bind(this)}
                style={{
                  fontSize: 14,
                  marginRight: "1rem",
                  background: "#f6f6f6"
                }}
                size="tiny"
              >
                Log in
              </Button>
              <Button
                id="button__primary"
                onClick={this.login.bind(this)}
                style={{ fontSize: 14 }}
                size="tiny"
              >
                Sign up
              </Button>
            </div>
          ) : (
            <Button
              onClick={this.logout.bind(this)}
              style={{
                fontSize: 14,
                marginRight: "1rem",
                background: "#f6f6f6"
              }}
              size="tiny"
            >
              Logout
            </Button>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavTop);
