import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import History from "./history";
import Auth from "./Auth/Auth";
import NavTop from "./components/navbar";
import Home from "./components/container/Home";
import Page from "./components/container/Page";
import Login from "./components/container/Login";
import Register from "./components/container/Register";
import List from "./components/container/List";
import Footer from "./components/footer";
import influencerPage from "./components/container/influencerPage";
import Callback from "./Callback/Callback";
import { tokenAction } from "./actions/sessionActions";
const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class RouteFile extends Component {
  componentDidMount() {
    this.props.tokenAction();
  }

  render() {
    return (
      <Router history={History}>
        <Container fluid={true}>
          <NavTop auth={auth} />
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route
            exact
            path={"/register"}
            render={props => <Register auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route exact path={"/destinations"} component={List} />
          <Route exact path={"/influencers"} component={List} />
          <Route exact path={"/activities"} component={List} />
          <Route
            exact
            path={"/influencer/:id/:id"}
            component={influencerPage}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  tokenAction: () => dispatch(tokenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteFile);
