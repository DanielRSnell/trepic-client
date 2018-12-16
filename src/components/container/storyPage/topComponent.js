import React, { Component } from "react";
import {
  Grid,
  Container,
  Image,
  Button,
  Icon,
  Rating
} from "semantic-ui-react";
class TopComponent extends Component {
  componentWillReceiveProps() {}
  render() {
    return (
      <Container
        fluid={true}
        style={{
          display: "flex",
          height: "80%",
          flexDirection: "column"
        }}
      >
        {this.props.story.profile.meta_box !== undefined &&
        this.props.influencer.profile.meta_box !== undefined ? (
          <Grid
            style={{
              display: "inherit",
              flexDirection: "row",
              flex: 1,
              background: "#f6f6f6"
            }}
            stackable
          >
            <Grid.Column
              computer={6}
              style={{
                padding: "4rem",
                alignSelf: "center",
                flex: 1
              }}
              only="computer"
              verticalAlign="middle"
            >
              <Grid.Row>
                <span style={{ fontSize: "2rem" }}>
                  @{this.props.influencer.profile.meta_box.name}
                </span>
              </Grid.Row>
              <Grid.Row style={{ marginTop: "2rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
                  {this.props.story.profile.meta_box.name}
                </span>
              </Grid.Row>
              <Grid.Row style={{ marginTop: "2rem" }}>
                <span style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                  {this.props.story.profile.meta_box.about}
                </span>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column
              id="influencer__image"
              computer={10}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)), url(${
                  this.props.story.profile.meta_box.gallery[this.props.current]
                    .full_url
                })`,
                backgroundPosition: "bottom",
                display: "flex",
                padding: "4rem",
                justifyContent: "space-between",
                flexDirection: "column"
              }}
            >
              <Grid.Row style={{ display: "inherit", alignSelf: "flex-end" }}>
                <Button
                  icon="heart"
                  style={{
                    color: this.props.heart === true ? "#f6008a" : null,
                    display: "flex",
                    alignSelf: "flex-end",
                    background: "white"
                  }}
                  onClick={() => this.props.onHeart()}
                />
              </Grid.Row>
              <Grid.Row
                style={{ display: "inherit", justifyContent: "space-between" }}
              >
                <Button
                  icon="angle left"
                  style={{
                    background: "white",
                    display: "flex"
                  }}
                  onClick={() => this.props.onPrevious("prev")}
                />
                <Button
                  icon="angle right"
                  style={{
                    background: "white",
                    display: "flex"
                  }}
                  onClick={() => this.props.onNext("next")}
                />
              </Grid.Row>
            </Grid.Column>
          </Grid>
        ) : null}
      </Container>
    );
  }
}

export default TopComponent;
