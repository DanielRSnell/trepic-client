import React, { Component } from "react";
import { Container, Grid, Form, Button, Input, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./style.css";
import * as apiUtils from "../../../utils/apiUtils";

const Field = Form.Field;

class Register extends Component {
  state = {
    fullName: null,
    password: null,
    email: null,
    phoneNumber: null,
    error: false
  };

  componentWillMount() {}

  handleInput(e, prop) {
    this.setState({ [prop.type]: e.target.value });
  }

  handleRegister() {
    apiUtils
      .adminCreate({
        username: this.state.fullName.split(" ").join(""),
        name: this.state.fullName,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => console.log(res))
      .catch(e => console.error(e));
  }

  changeRoute() {
    this.props.history.push(`/login`);
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
      <Container>
        <Button onClick={this.login.bind(this)}>Activate</Button>
      </Container>
    );
  }
}

export default withRouter(Register);
