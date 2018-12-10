import React, { Component } from "react";
import {
  Container,
  Grid,
  Button,
  Icon,
  Image,
  Divider,
  Item,
  Label
} from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";

import axios from "axios";
import { WP_API } from "../../../keys";
import "./style.css";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);
class Influencer extends Component {
  state = {
    photoGallery: false,
    primaryImage: "",
    photos: [],
    heart: false,
    follower: false,
    areas: [],
    id: this.props.location.pathname.split("/")[2],
    influencer: [],
    stories: []
  };
  componentDidMount() {
    window.scroll(0, 0);

    const dest = [];
    for (var i = 0; i < 2; i++) {
      dest.push({
        image:
          "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/30225653/apotek_05.jpg",
        location: "London",
        blurb: "",
        id: "ENG"
      });
    }
    this.setState({ areas: dest });
    axios
      .get(`https://admin.trepic.co/wp-json/wp/v2/influencer/${this.state.id}`)
      .then(res => {
        this.setState({
          influencer: res.data,
          photos: res.data.meta_box.gallery,
          primaryImage: res.data.meta_box.gallery[0].full_url,
          avatar: res.data.meta_box.cover[0].full_url
        });
        return Promise.resolve();
      })
      .then(() => {
        axios
          .get(`https://admin.trepic.co/wp-json/wp/v2/story`, {
            include: this.state.influencer.meta_box["story_to_influencer_to"]
          })
          .then(res => {
            this.setState({ stories: res.data });
          });
      });
  }
  fetchStoryIds() {}
  galleryClick(e) {
    this.setState({
      primaryImage: this.state.photos[e].full_url
    });
  }

  galleryChange() {
    if (this.state.photoGallery === true) {
      this.setState({ photoGallery: false });
    } else {
      this.setState({ photoGallery: true });
    }
  }

  onHeartClick() {
    if (this.state.heart === false) {
      this.setState({ heart: true });
    } else {
      this.setState({ heart: false });
    }
    axios
      .get("https://admin.trepic.co/wp-json/wp/v2/influencer?per_page=6")
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  onFollowClick() {
    if (this.state.follower === false) {
      this.setState({ follower: true });
    } else {
      this.setState({ follower: false });
    }
  }
  render() {
    console.log(this.props, this.state);
    return (
      <Container fluid={true}>
        {this.state.influencer ? (
          <div>
            <Container fluid={true}>
              <Grid
                style={{
                  background: "#f6f6f6"
                }}
                centered={true}
                stackable
              >
                <Grid.Column only="tablet mobile">
                  <Grid columns={2} style={{ padding: "0rem 2rem" }}>
                    <Grid.Column width={4}>
                      <Image src={this.state.avatar} size="small" />
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Grid.Row style={{ marginBottom: ".5rem" }}>
                        <span style={{ fontSize: 17, fontWeight: "bold" }}>
                          Jack Ford - @JackFordPhotography
                        </span>
                      </Grid.Row>
                      <Grid.Row>
                        <Button
                          color="facebook"
                          icon="facebook"
                          size="tiny"
                          style={{ margin: ".5rem" }}
                        />
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

                        <Button
                          size="tiny"
                          onClick={() => this.onFollowClick()}
                          style={{
                            background:
                              this.state.follower === false
                                ? "transparent"
                                : "#f6008a",
                            border: "1px solid #f6008a",
                            color:
                              this.state.follower === false
                                ? "#f6008a"
                                : "white",
                            marginLeft: "1rem"
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
                <Grid.Column
                  computer={6}
                  style={{ padding: "4rem" }}
                  only="computer"
                >
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
                          backgroundImage: `url(${this.state.avatar})`,
                          border: "1rem solid white",
                          borderRadius: 5
                        }}
                      />
                    </Grid.Row>

                    <Grid.Row centered={true}>
                      <span style={{ fontSize: 24, fontWeight: "bold" }}>
                        {this.state.influencer.meta_box
                          ? `@ ${this.state.influencer.meta_box["name"]}`
                          : null}
                      </span>
                    </Grid.Row>
                    <Grid.Row centered={true}>
                      <Grid.Column
                        centered={true}
                        style={{ marginRight: "2rem" }}
                      >
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
                        onClick={() => this.onFollowClick()}
                        style={{
                          background:
                            this.state.follower === false
                              ? "transparent"
                              : "#f6008a",
                          border: "1px solid #f6008a",
                          color:
                            this.state.follower === false ? "#f6008a" : "white",
                          paddingRight: "4rem",
                          paddingLeft: "4rem"
                        }}
                      >
                        Follow
                      </Button>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
                <Grid.Column only="tablet mobile">
                  <Image
                    src={this.state.primaryImage}
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
                      color: this.state.heart === true ? "#f6008a" : null
                    }}
                    onClick={() => this.onHeartClick()}
                  />
                  <Button
                    style={{ marginLeft: "2rem" }}
                    onClick={() => this.galleryChange()}
                  >
                    <Icon name="grid layout" />
                    {this.state.photoGallery === true ? "Hide" : "Show"} Jack's
                    Photos
                  </Button>
                </Grid.Column>
                <Grid.Column
                  only="computer"
                  id="influencer__image"
                  computer={10}
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url(${
                      this.state.primaryImage
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
                      color: this.state.heart === true ? "#f6008a" : null,
                      display: "flex",
                      alignSelf: "flex-end"
                    }}
                    onClick={() => this.onHeartClick()}
                  />
                  <Button
                    style={{ display: "flex", alignSelf: "flex-end" }}
                    onClick={() => this.galleryChange()}
                  >
                    <Icon name="grid layout" />
                    {this.state.photoGallery === true ? "Hide" : "Show"} Jack's
                    Photos
                  </Button>
                </Grid.Column>
              </Grid>
            </Container>
            <Container fluid={true} style={{ margin: "3rem" }}>
              {this.state.photoGallery ? (
                <Grid
                  columns={10}
                  doubling
                  style={{ marginLeft: "4rem", marginRight: "4rem" }}
                >
                  {this.state.photos.map((x, i) => {
                    return (
                      <Grid.Column>
                        <Image
                          index={i}
                          key={x.id}
                          id="smoothframe"
                          onClick={() => this.galleryClick(i)}
                          src={x.url}
                          size="small"
                          style={{
                            height: "100%",
                            width: "100%",
                            border: ".5rem solid #f6f6f6",
                            cursor: "pointer",
                            transition: ".5s"
                          }}
                        />
                      </Grid.Column>
                    );
                  })}
                </Grid>
              ) : null}
            </Container>
            <Container fluid={true}>
              <Grid
                columns={2}
                stackable
                style={{ padding: "4rem" }}
                verticalAlign="middle"
                centered={true}
              >
                <Grid.Column
                  id="iframe-container"
                  computer={7}
                  style={{ marginRight: "2rem" }}
                >
                  <iframe
                    id="iframe-container"
                    src={
                      "https://player.omnivirt.com/2018/05/23/16/30/37/71e0969f-fa10-4e25-9e6a-39b38953944b/player.html?player=true&autoplay=true&referer=%2A&host=www.vroptimal-3dx-assets.com&noad=false&videoId=22290&cst=0&streaming=https%3A%2F%2Feu-storage-bitcodin.storage.googleapis.com%2FbitStorage%2F11836_b244ec6935fc37363fe13e529631771a%2F725474_12f9c0b70d28d63240c238d949e987b6%2Fm3u8s%2F725474.m3u8%3Fv%3D2%26cb%3D1527094135%3A%3Ahttps%3A%2F%2Feu-storage-bitcodin.storage.googleapis.com%2FbitStorage%2F11836_b244ec6935fc37363fe13e529631771a%2F725474_12f9c0b70d28d63240c238d949e987b6%2Fmpds%2F725474.mpd%3Fcb%3D1527094135&version=2.8.65"
                    }
                    height="300px"
                    width="100%"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row style={{ fontSize: 24, padding: "1rem" }}>
                    <span style={{ color: "#dadada" }}>About </span>{" "}
                    <span>// Jack Ford</span>
                  </Grid.Row>
                  <Grid.Row>
                    <p style={{ padding: "1rem" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum placerat tortor dui, eu sollicitudin nisl
                      consectetur nec. Aliquam a odio quis lectus placerat
                      ornare. In ultrices finibus nisl at sagittis. Quisque a
                      faucibus enim, eget condimentum orci. Sed consequat nunc
                      lorem, a finibus mauris lobortis a. Mauris metus ligula,
                      auctor.
                    </p>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Container>
            <Divider />
            <Container fluid={true}>
              <Grid
                columns={2}
                stackable
                style={{ padding: "4rem", marginBottom: "2rem" }}
                doubling
              >
                <Grid.Column>
                  <Grid.Row style={{ marginBottom: "2rem" }}>
                    <span style={{ fontSize: 24, fontWeight: "bold" }}>
                      Jack's Favorite Places To Stay
                    </span>
                  </Grid.Row>
                  <Grid.Row
                    style={{ paddingLeft: "1rem", paddingRight: "3rem" }}
                  >
                    <Grid columns={4} doubling>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={
                            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025048/560894a9e4b0b7fe3d9bde6f-150x150.jpg"
                          }
                          size="small"
                        />
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row style={{ marginBottom: "2rem" }}>
                    <span style={{ fontSize: 24, fontWeight: "bold" }}>
                      Jack's Top Stories
                    </span>
                  </Grid.Row>
                  <Grid.Row>
                    <Item.Group divided>
                      <Item>
                        <Item.Image src="http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/16025042/55cd5b33e4b0cb995e2c5e9d-150x150.png" />

                        <Item.Content>
                          <Item.Header as="a">Tokyo Hideout</Item.Header>
                          <Item.Meta>
                            <span className="cinema">
                              Lo Pi District, Japan
                            </span>
                          </Item.Meta>
                          <Item.Description>{paragraph}</Item.Description>
                          <Item.Extra>
                            <Label>Sunny</Label>
                            <Label content="Romantic" />
                          </Item.Extra>
                          <Button primary floated="right" id="button__primary">
                            Explore Story
                            <Icon name="right chevron" />
                          </Button>
                        </Item.Content>
                      </Item>

                      <Item>
                        <Item.Image src="http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/11/28205129/IMG_3835-150x150.jpg" />

                        <Item.Content>
                          <Item.Header as="a">Exotic Outdoors</Item.Header>
                          <Item.Meta>
                            <span className="cinema">Sao Pao, Spain</span>
                          </Item.Meta>
                          <Item.Description>{paragraph}</Item.Description>
                          <Item.Extra>
                            <Label>Limited</Label>
                            <Label>Outdoors</Label>
                            <Label>Pet Friendly</Label>
                          </Item.Extra>
                          <Button primary floated="right" id="button__primary">
                            Explore Story
                            <Icon name="right chevron" />
                          </Button>
                        </Item.Content>
                      </Item>

                      <Item>
                        <Item.Image src="http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/11/28205112/IMG_3833-150x150.jpg" />

                        <Item.Content>
                          <Item.Header as="a">
                            Endless Summer Journey
                          </Item.Header>
                          <Item.Meta>
                            <span className="cinema">Maui, Hawaii</span>
                          </Item.Meta>
                          <Item.Description>{paragraph}</Item.Description>
                          <Item.Extra>
                            <Label>Limited</Label>
                          </Item.Extra>

                          <Button primary floated="right" id="button__primary">
                            Explore Story
                            <Icon name="right chevron" />
                          </Button>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
        ) : null}
      </Container>
    );
  }
}

export default withRouter(Influencer);
