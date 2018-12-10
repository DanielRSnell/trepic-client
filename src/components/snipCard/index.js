import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
const SnipCard = () => (
  <Container id="home__container" verticalAlign="middle" fluid={true}>
    <Grid columns={4} stackable>
      <Grid.Row style={{ marginBottom: ".5rem" }}>
        <span style={{ fontSize: 24, fontWeight: "600" }}>Explore Trepic</span>
      </Grid.Row>
      <Grid.Row style={{ marginLeft: "1rem" }}>
        <Grid.Column
          style={{
            marginBottom: "1rem",
            marginLeft: ".5rem",
            marginRight: "1rem"
          }}
        >
          <Grid
            style={{
              height: 75,
              boxShadow: "0px 2px 8px rgba(0, 0, 0, .15)",
              background: "white",
              borderRadius: 3,
              marginBottom: ".5rem",
              border: "1px solid #f6f6f6"
            }}
            verticalAlign="middle"
          >
            <Grid.Column
              width={6}
              style={{
                margin: 0,
                padding: 0,
                height: "100%",
                backgroundImage:
                  'url("https://trepic.co/wp-content/uploads/2018/11/Untitled-design-2.jpg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            />
            <Grid.Column
              style={{
                margin: 0,
                padding: 0
              }}
              verticalAlign="middle"
            >
              <span style={{ fontSize: 17, fontWeight: "bold" }}>
                Influencers
              </span>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column
          style={{
            marginBottom: "1rem",
            marginLeft: "1rem",
            marginRight: "1rem"
          }}
        >
          <Grid
            style={{
              height: 75,
              boxShadow: "0px 2px 8px rgba(0, 0, 0, .15)",
              background: "white",
              borderRadius: 3,
              marginBottom: ".5rem",
              border: "1px solid #f6f6f6"
            }}
            verticalAlign="middle"
          >
            <Grid.Column
              width={6}
              style={{
                margin: 0,
                padding: 0,
                height: "100%",
                backgroundImage:
                  'url("https://trepic.co/wp-content/uploads/2018/11/Untitled-design-2.jpg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            />
            <Grid.Column
              style={{
                margin: 0,
                padding: 0
              }}
              verticalAlign="middle"
            >
              <span style={{ fontSize: 17, fontWeight: "bold" }}>
                Destinations
              </span>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column
          style={{
            marginBottom: "1rem",
            marginLeft: "1rem"
          }}
        >
          <Grid
            style={{
              height: 75,
              boxShadow: "0px 2px 8px rgba(0, 0, 0, .15)",
              background: "white",
              borderRadius: 3,
              marginBottom: ".5rem",
              border: "1px solid #f6f6f6"
            }}
            verticalAlign="middle"
          >
            <Grid.Column
              width={6}
              style={{
                margin: 0,
                padding: 0,
                height: "100%",
                backgroundImage:
                  'url("https://trepic.co/wp-content/uploads/2018/11/Untitled-design-2.jpg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            />
            <Grid.Column
              style={{
                margin: 0,
                padding: 0
              }}
              verticalAlign="middle"
            >
              <span style={{ fontSize: 17, fontWeight: "bold" }}>
                Activities
              </span>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
export default SnipCard;
