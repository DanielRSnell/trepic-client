import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Loader } from "semantic-ui-react";
import * as actions from "../../../actions/StoryPageActions";
import moment from "moment";
import TopComponent from "./topComponent";
import DatePicker from "./datePicker";

class StoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      influencerId: null,
      gallery: [],
      count: 47,
      current: 0,
      storyid: this.props.match.params.id,
      story: false,
      influencer: false,
      lodge: false
    };
    window.scroll(0, 0);
    this.props.actions.GetStory(this.state.storyid).then(() => {
      this.setState({ story: true });
      this.props.actions
        .GetInfluencer(
          this.props.story.profile.meta_box["story_to_influencer_from"][0]
        )
        .then(res => {
          this.setState({ influencer: true });
          this.props.actions
            .GetLodge(this.props.story.profile.meta_box["story_to_lodge_to"][0])
            .then(res => {
              this.props.actions
                .hotelAction(this.props.lodge.profile.meta_box.zumataid)
                .then(() => {
                  this.setState({ lodge: true });
                  const arr = [];
                  for (var i = 0; i < 10; i++) {
                    arr.push({
                      image: `${this.props.zumata.hotel.image_details.prefix +
                        `${i + 1}` +
                        this.props.zumata.hotel.image_details.suffix}`
                    });
                  }
                  this.setState({ gallery: arr });
                });
            });
        });
    });
  }

  componentDidMount() {}

  onViewPackages(data) {
    const config = {
      id: this.props.lodge.profile.meta_box.zumataid,
      startDate: moment(data.startDate).format("YYYY-MM-DD"),
      endDate: moment(data.endDate).format("YYYY-MM-DD"),
      adults: data.adults,
      children: data.children
    };
    console.log(config);
    this.props.actions.hotelPackages(config);
  }

  onChangeImage(label) {
    if (label === "next") {
      if (
        this.state.current + 1 ===
        this.props.story.profile.meta_box.gallery.length
      ) {
        this.setState({ current: 1 });
      } else {
        this.setState({ current: this.state.current + 1 });
      }
    } else {
      if (this.state.current - 1 !== 0) {
        this.setState({ current: this.state.current - 1 });
      }
    }
  }

  render() {
    console.log(this.state, this.props);

    return (
      <Container
        fluid={true}
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column"
        }}
      >
        {this.state.story === true && this.state.influencer === true ? (
          <TopComponent
            {...this.state}
            {...this.props}
            onPrevious={this.onChangeImage.bind(this)}
            onNext={this.onChangeImage.bind(this)}
            style={{ marginBottom: "2rem" }}
          />
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
        <Container
          fluid={true}
          style={{
            display: "flex",
            height: "80%",
            flexDirection: "column"
          }}
        >
          <DatePicker
            {...this.state}
            {...this.props}
            ViewPackages={this.onViewPackages.bind(this)}
          />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StoryPage));
