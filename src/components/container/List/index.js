import React, { Component } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import HorMetaCard from "../../metaCard/h_metaCard";

class List extends Component {
  state = {
    data: [],
    page: 1,
    results: 12,
    header: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const arr = [];
    const { pathname } = this.props.location;
    if (pathname.includes("influencers")) {
      for (var i = 0; i < 12; i++) {
        arr.push({
          id: i,
          image:
            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/11/28205158/sanctoo-villa.jpg",
          type: "Influencer - Traveler",
          Location: "Thailand",
          name: "Emily Ford",
          blurb: "Traveling in style!",
          label: "Last Adventure",
          postType: "influencer"
        });
      }
      this.setState({ data: arr, header: "Trepics Top Influencers" });
    } else if (pathname.includes("destinations")) {
      for (var i = 0; i < 12; i++) {
        arr.push({
          id: i,
          image:
            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/15165642/56007735e4b08122cf2520e2.jpg",
          type: "Lodge - Exotic",
          Location: "Thailand",
          name: "The Springs",
          blurb: "Exotic Hideout",
          label: "Location",
          postType: "lodge"
        });
      }
      this.setState({ data: arr, header: "Trepics Top Destinations" });
    } else if (pathname.includes("activities")) {
      for (var i = 0; i < 12; i++) {
        arr.push({
          id: i,
          image:
            "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/15164734/55f61586e4b0111ca4e34006.jpg",
          type: "Outdoor - Surfing",
          Location: "Sydney, Austrailia",
          name: "Fordham Beach",
          blurb: "Narly Waves",
          label: "Location",
          postType: "activity"
        });
      }
      this.setState({ data: arr, header: "Trepics Top Activities" });
    }
  }
  render() {
    return (
      <div>
        <HorMetaCard data={this.state.data} header={this.state.header} />
      </div>
    );
  }
}

export default withRouter(List);
