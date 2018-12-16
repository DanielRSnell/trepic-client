import React, { Component } from "react";
import { Container, Image, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../../actions/influencerActions";
import * as storyActions from "../../../actions/storyActions";

import "./style.css";
import BottomComponent from "./bottomComponent";
import MiddleComponent from "./middleComponent";
import TopComponent from "./topComponent";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);
class Influencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    window.scroll(0, 0);
    this.props.actions.GetInfluencer(this.state.id).then(res => {
      this.props.storyActions.multipleStoryAction(res);
    });
  }
  galleryClick(e) {
    this.setState({
      primaryImage: this.state.photos[e].url
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
  }

  onFollowClick() {
    console.log("FOLLOW");
    if (this.state.follower === false) {
      this.setState({ follower: true });
    } else {
      this.setState({ follower: false });
    }
  }
  render() {
    return (
      <Container fluid={true}>
        {this.props.story ? (
          <div>
            <TopComponent
              {...this.state}
              {...this.props}
              onFollow={this.onFollowClick.bind(this)}
              onHeart={this.onHeartClick.bind(this)}
            />
            <MiddleComponent influencer={this.props.influencer.profile} />

            <BottomComponent
              influencer={this.props.influencer.profile}
              story={this.props.story.list}
            />
          </div>
        ) : (
          <div
            style={{
              display: "inherit",
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1
            }}
          >
            <Loader
              style={{ alignSelf: "center" }}
              active
              inline="centered"
              size="massive"
            />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  storyActions: bindActionCreators(storyActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Influencer));
