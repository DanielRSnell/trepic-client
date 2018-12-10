import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Container, Button, Grid } from "semantic-ui-react";

class HorOverlayCard extends Component {
  render() {
    let data = this.props.data;
    return (
      <Container fluid={true} id="home__container">
        <Grid columns={5} doubling>
          <Grid.Row style={{ marginLeft: "0rem", marginBottom: ".5rem" }}>
            <span style={{ fontSize: 24, fontWeight: "600" }}>
              Recommended For You
            </span>
          </Grid.Row>
          <Grid.Row>
            {data.map((x, i) => {
              return (
                <Grid.Column style={{ height: 300 }}>
                  <div
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75)), url(${
                        x.image
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom right",
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: 3
                    }}
                  >
                    <div style={{ marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontSize: 17,
                          color: "white",
                          fontWeight: "bold",
                          alignSelf: "center"
                        }}
                      >
                        {x.location}
                      </span>
                    </div>
                    <div>
                      <Button id="form__button" location={x.id} size="tiny">
                        Explore
                      </Button>
                    </div>
                  </div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ marginTop: "2rem" }}>
              <span style={{ fontSize: 17, fontWeight: "bold", color: "teal" }}>
                <Link to="/destinations"> Show all Destinations ></Link>
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

HorOverlayCard.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default withRouter(HorOverlayCard);
