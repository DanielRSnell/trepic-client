import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";

class MiddleComponent extends Component {
  render() {
    let influencer = this.props.influencer;

    return (
      <Container fluid={true}>
        <Grid
          columns={2}
          stackable
          style={{ padding: "4rem" }}
          verticalAlign="middle"
          centered
        >
          <Grid.Column
            id="iframe-container"
            computer={7}
            style={{ marginRight: "2rem" }}
          >
            <iframe
              id="iframe-container"
              src={influencer.meta_box.vrGroup[0].url}
              height="300px"
              width="100%"
            />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row style={{ fontSize: 24, padding: "1rem" }}>
              <span style={{ color: "#dadada" }}>About </span>{" "}
              <span>// @{influencer.meta_box.name}</span>
            </Grid.Row>
            <Grid.Row>
              <p style={{ padding: "1rem" }}>
                {influencer.meta_box.description}
              </p>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default MiddleComponent;
