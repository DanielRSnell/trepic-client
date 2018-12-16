import React, { Component } from "react";
import {
  Grid,
  Divider,
  Container,
  Image,
  Item,
  Button,
  Icon
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class BottomComponent extends Component {
  onRoute(route) {
    this.props.history.push(`/story/${route}`);
  }

  render() {
    let influencer = this.props.influencer;
    let story = this.props.story;
    return (
      <Container fluid={true}>
        <Divider />
        <Grid
          columns={2}
          stackable
          style={{ padding: "4rem", marginBottom: "2rem" }}
          doubling
        >
          {story ? (
            <Grid.Column>
              <Grid.Row style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: 24, fontWeight: "bold" }}>
                  @{influencer.meta_box.name} Most Recent Story
                </span>
              </Grid.Row>
              <Grid.Row style={{ paddingLeft: "1rem", paddingRight: "3rem" }}>
                <Grid columns={4} mobile={3}>
                  {story[0].meta_box.gallery.map((x, i) => {
                    return (
                      <Grid.Column style={{ padding: 2, cursor: "pointer" }}>
                        <Image
                          src={x.url}
                          size="small"
                          onClick={() =>
                            this.onRoute(
                              `${story[0].id + "/" + influencer.meta_box.name}`
                            )
                          }
                        />
                      </Grid.Column>
                    );
                  })}
                </Grid>
              </Grid.Row>
            </Grid.Column>
          ) : null}
          <Grid.Column>
            <Grid.Row style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: 24, fontWeight: "bold" }}>
                {influencer.meta_box ? `@${influencer.meta_box.name}` : null}
                Top Stories
              </span>
            </Grid.Row>
            <Grid.Row>
              {story ? (
                <Item.Group divided>
                  {story.map((x, i) => {
                    return (
                      <Item>
                        <Item.Image src={x.meta_box.cover[0].full_url} />

                        <Item.Content>
                          <Item.Header as="a">{x.meta_box.name}</Item.Header>
                          <Item.Meta>
                            <span className="cinema">
                              {x.meta_box.location}
                            </span>
                          </Item.Meta>
                          <Item.Description>
                            {x.meta_box.about}
                          </Item.Description>

                          <Button
                            primary
                            floated="right"
                            id="button__primary"
                            style={{ marginTop: "1.5rem" }}
                            onClick={() =>
                              this.onRoute(
                                `${story[0].id +
                                  "/" +
                                  influencer.meta_box.name}`
                              )
                            }
                          >
                            Explore Story
                            <Icon name="right chevron" />
                          </Button>
                        </Item.Content>
                      </Item>
                    );
                  })}
                </Item.Group>
              ) : null}
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(BottomComponent);
