import history from "../history";
import auth0 from "auth0-js";
import axios from "axios";
require("dotenv").config();

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  CreateCustomer(data) {
    axios
      .get(`${process.env.REACT_APP_BASE}customer?search=${data.name}`)
      .then(x => {
        if (x.data.length === 0) {
          axios
            .post(
              `${process.env.REACT_APP_BASE}customer`,
              {
                title: data.name,
                status: "publish",
                meta_box: {
                  email: data.name,
                  picture: data.picture
                }
              },
              {
                headers: {
                  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
                }
              }
            )
            .then(res => localStorage.setItem("USER_ID", res.id))
            .catch(e => console.error(e));
        } else {
          localStorage.setItem("USER_ID", x.data[0].id);
        }
      });
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      this.CreateCustomer(authResult.idTokenPayload);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/");
      } else if (err) {
        history.replace("/");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    history.replace("/");
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
    history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
