import React, { Component } from "react";
import { Icon, Loader } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "./style.css";

import HorMetaCard from "../../metaCard/h_metaCard";
import HorOverlayCard from "../../overlayCard/h_overlayCard";
import Hero from "../../hero";
import SnipCard from "../../snipCard";
import axios from "axios";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

class Home extends Component {
  state = {
    influencers: [],
    showAll: true,
    influencerHeader: "Top Rated Influencers",
    areas: [],
    data: [],
    loading: true
  };

  componentDidMount() {
    const dest = [];

    axios
      .get("https://admin.trepic.co/wp-json/wp/v2/influencer?per_page=6")
      .then(res => {
        this.setState({ data: res.data, loading: false });
      });

    for (var i = 0; i < 5; i++) {
      dest.push({
        image:
          "http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/10/30225653/apotek_05.jpg",
        location: "London",
        blurb: "",
        id: "ENG"
      });
    }
    this.setState({ areas: dest });
  }

  render() {
    return (
      <div>
        {this.state.loading === false ? (
          <div>
            <SnipCard />
            <Hero />
            <HorOverlayCard data={this.state.areas} />
            <HorMetaCard
              influencer={this.state.data}
              showAll={this.state.showAll}
              header={this.state.influencerHeader}
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
      </div>
    );
  }
}

export default Home;
