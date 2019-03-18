import React from "react";
import { Grid, Button, Container } from "semantic-ui-react";

const Hero = () => (
  <Container id="home__container" fluid={true} style={{ marginTop: "2rem" }}>
    <Grid
      id="home__background"
      columns={1}
      verticalAlign="middle"
      style={{
        height: "100%",
        padding: "4rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderRadius: 5
      }}
    >
      <Grid.Row>
        <Grid.Column mobile={16} computer={6}>
          <Grid.Row style={{ marginBottom: "1rem" }}>
            <span style={{ fontSize: 32, color: "white" }}>
              Make Your Trepic Epic
            </span>
          </Grid.Row>
          <Grid.Row style={{ marginBottom: "1rem" }}>
            <p
              style={{
                marginBottom: "1rem",
                fontSize: 14,
                color: "white"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vestibulum gravida fermentum. Maecenas finibus lacus metus.
            </p>
          </Grid.Row>
          <Button size="medium" id="form__button">
            {" "}
            Explore
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
export default Hero;
