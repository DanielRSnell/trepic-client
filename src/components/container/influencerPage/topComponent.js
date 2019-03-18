import React, { Component } from "react";
import { Grid, Container, Image, Button, Icon } from "semantic-ui-react";
class TopComponent extends Component {
  componentWillReceiveProps() {}
  render() {
    let influencer = this.props.influencer.profile;
    console.log(this.props);
    return (
      <Container fluid={true}>
        <Grid
          style={{
            background: "#f6f6f6"
          }}
          centered
          stackable
          verticalAlign={true}
        >
          <Grid.Column only="tablet mobile">
            <Grid
              columns={2}
              style={{ padding: "0rem 0rem" }}
              verticalAlign={true}
              centered
            >
              <Grid.Column width={6}>
                <Image
                  src={influencer.meta_box.cover[0].full_url}
                  size="small"
                  style={{
                    marginLeft: "2rem",
                    border: ".5rem solid white",
                    borderRadius: 5
                  }}
                />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginTop: "1rem" }}>
                <Grid.Row style={{ marginBottom: ".5rem" }}>
                  <span style={{ fontSize: 17, fontWeight: "bold" }}>
                    @{influencer.meta_box.name}
                  </span>
                </Grid.Row>
                <Grid.Row>
                  <Button color="facebook" icon="facebook" size="tiny" />
                  <Button
                    style={{ margin: ".5rem" }}
                    color="twitter"
                    icon="twitter"
                    size="tiny"
                  />
                  <Button
                    style={{ margin: ".5rem" }}
                    color="instagram"
                    icon="instagram"
                    size="tiny"
                  />
                  <Button
                    style={{ margin: ".5rem" }}
                    color="youtube"
                    icon="youtube"
                    size="tiny"
                  />
                </Grid.Row>
                <Grid.Row>
                  <Button
                    size="tiny"
                    onClick={() => this.props.onFollow()}
                    style={{
                      background:
                        this.props.follower === false
                          ? "transparent"
                          : "#f6008a",
                      border: "1px solid #f6008a",
                      marginTop: "1rem",
                      color: this.props.follower === false ? "#f6008a" : "white"
                    }}
                  >
                    Follow
                  </Button>
                </Grid.Row>
                <Grid.Row
                  style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
                  centered
                />
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column computer={6} style={{ padding: "4rem" }} only="computer">
            <Grid stackable doubling>
              <Grid.Row
                columns={1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                  alignContent: "stretch",
                  alignItems: "stretch"
                }}
              >
                <Grid.Column
                  style={{
                    flex: "0 1 auto",
                    height: 300,
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${
                      influencer.meta_box.cover[0].full_url
                    })`,
                    border: "1rem solid white",
                    borderRadius: 5
                  }}
                />
              </Grid.Row>

              <Grid.Row centered>
                <span style={{ fontSize: 24, fontWeight: "bold" }}>
                  @{influencer.meta_box.name}
                </span>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column centered style={{ marginRight: "2rem" }}>
                  <Button color="facebook" icon="facebook" />
                </Grid.Column>
                <Grid.Column style={{ marginRight: "2rem" }}>
                  <Button color="twitter" icon="twitter" />
                </Grid.Column>
                <Grid.Column style={{ marginRight: "2rem" }}>
                  <Button color="instagram" icon="instagram" />
                </Grid.Column>
                <Grid.Column style={{ marginRight: "2rem" }}>
                  <Button color="youtube" icon="youtube" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row
                style={{
                  paddingLeft: "3rem",
                  paddingRight: "3rem"
                }}
                stretched={true}
                centered
              >
                <Button
                  onClick={() => this.props.onFollow()}
                  style={{
                    background:
                      this.props.follower === false ? "transparent" : "#f6008a",
                    border: "1px solid #f6008a",
                    color: this.props.follower === false ? "#f6008a" : "white",
                    paddingRight: "4rem",
                    paddingLeft: "4rem"
                  }}
                >
                  {this.props.follower ? "Followed" : "Follow"}
                </Button>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column only="tablet mobile">
            <Image
              src={influencer.meta_box.gallery[0].full_url}
              size="massive"
              style={{ height: "100%" }}
            />
          </Grid.Column>
          <Grid.Column
            only="tablet mobile"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Button
              icon="heart"
              style={{
                color: this.props.heart === true ? "#f6008a" : null
              }}
              onClick={() => this.props.onHeart()}
            />
          </Grid.Column>
          <Grid.Column
            only="computer"
            id="influencer__image"
            computer={10}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url(${
                influencer.meta_box.gallery[0].full_url
              })`,
              display: "flex",
              padding: "4rem",
              justifyContent: "space-between",
              flexDirection: "column"
            }}
          >
            <Button
              icon="heart"
              style={{
                color: this.props.heart === true ? "#f6008a" : null,
                display: "flex",
                alignSelf: "flex-end"
              }}
              onClick={() => this.props.onHeart()}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default TopComponent;
