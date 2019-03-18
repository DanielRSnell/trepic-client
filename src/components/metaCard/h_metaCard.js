import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Container, Grid, Button } from "semantic-ui-react";

class HorMetaCard extends Component {
  render() {
    let data = this.props.influencer;
    console.log(data);
    return (
      <Container
        id="home__container"
        fluid={true}
        style={{ marginBottom: "5rem" }}
      >
        <Grid columns={4} doubling>
          <Grid.Row style={{ marginLeft: "0rem", marginBottom: ".5rem" }}>
            <span style={{ fontSize: 24, fontWeight: "600" }}>
              {this.props.header}
            </span>
          </Grid.Row>
          {data ? (
            <Grid.Row>
              {data.map((x, i) => {
                return (
                  <Grid.Column
                    key={x.id}
                    style={{ marginBottom: "2rem", paddingRight: "1.5rem" }}
                  >
                    <Link
                      to={`${x.type}/${x.id}/${x.title.rendered}`}
                      style={{ color: "#595959" }}
                    >
                      <div
                        style={{
                          width: "100%",
                          minHeight: 200,
                          maxHeight: 300,
                          backgroundImage: `url(${
                            x.meta_box["cover"][0].full_url
                          })`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: 3
                        }}
                      />
                      <div style={{ margin: 5, padding: 0 }}>
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "1rem",
                            color: "brown"
                          }}
                        >
                          {x.meta_box.about.substring(0, 40)}
                        </span>
                      </div>
                      <div style={{ marginTop: "1rem", padding: 0 }}>
                        <span
                          style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                        >
                          @{x.title.rendered}
                        </span>
                      </div>
                      <div style={{ marginTop: "1rem" }}>
                        <Button
                          style={{ background: "#f6008a", color: "white" }}
                          size="tiny"
                        >
                          View Profile
                        </Button>
                      </div>
                    </Link>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          ) : null}
          {this.props.showAll === true ? (
            <Grid.Row>
              <Grid.Column>
                <span
                  style={{ fontSize: 17, fontWeight: "bold", color: "teal" }}
                >
                  <Link to="/influencers">Show all Influencers ></Link>
                </span>
              </Grid.Column>
            </Grid.Row>
          ) : null}
        </Grid>
      </Container>
    );
  }
}

HorMetaCard.propTypes = {
  data: PropTypes.array.isRequired,
  showAll: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired
};

export default withRouter(HorMetaCard);
