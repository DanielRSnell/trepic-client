import React, { Component } from "react";
import { Container, Grid, Form, Button, Input, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./style.css";

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

  handleRegister() {}

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
