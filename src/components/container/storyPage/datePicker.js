import React, { Component } from "react";
import {
  Container,
  Grid,
  Button,
  Divider,
  Input,
  Rating,
  Rail,
  Sticky,
  Image
} from "semantic-ui-react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import StoryForm from './StoryForm.js'

import { DateRangePicker, DayPickerRangeController } from "react-dates";
import Exp from './experience';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      adults: 1,
      children: 0,
      viewPackages: false
    };
  }

  changeAdult(label) {
    if (label === 'add') {
      this.setState({adults: this.state.adults + 1})
    } else {
      if (this.state.adults !== 0) {
        this.setState({ adults: this.state.adults - 1 })
      }
    }
  }

  changeChild(label) {
    if (label === 'add') {
      this.setState({children: this.state.children + 1})
    } else {
      if (this.state.children !== 0) {
        this.setState({ children: this.state.children - 1 })
      }
    }
  }

  createMarkup(content) {
    return { __html: content };
  }

  handleContextRef = contextRef => this.setState({ contextRef });

  ViewPackages(state) {
    this.setState({viewPackages: true})
  }

  render() {
    const { contextRef } = this.state;
    const content = this.props.zumata.hotel.description;
    return (
      <Container style={{ marginBottom: "1rem", padding: '2rem 2rem' }} fluid={true}>
       
        <Grid columns={2} centered style={{ padding: "2rem 1rem" }} stackable doubling>
          <Grid.Column width={10} style={{ paddingRight: "5rem" }}>
            <Grid.Row>
              <span style={{ fontSize: 32, fontWeight: "bold" }}>
                {this.props.zumata.hotel.name}
              </span>
            </Grid.Row>

            <Divider style={{ margin: "1rem 0rem", padding: 0 }} />
            <Grid.Row>
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
              />
            </Grid.Row>
            <Divider style={{ margin: "1rem 0rem", padding: 0 }} />
            <Grid.Row>
            <Grid columns={5} doubling stackable>
          {this.props.gallery.map((item, i) => {
            return (
              <Grid.Column key={i} style={{ padding: 10, margin: 0 }} >
                <div style={{ background: `url(${item.image}) 50% 50% no-repeat`, width: '100%', height: 125}} />
              </Grid.Column>
            );
          })}
        </Grid>
            </Grid.Row>
            <Divider style={{ margin: "1rem 0rem", padding: 0 }} />
            {this.props.story.profile ? (<Exp data={this.props.story.profile.meta_box.experiences} />
              ): null}

            
            
          </Grid.Column>

          <Grid.Column width={6} style={{ margin: 0 }} centered>
            
            <Sticky context={contextRef}>
            {this.state.viewPackages === false ? (
              <div>
              <Grid.Row
                style={{ border: "1px solid #dadada", padding: "2rem" }}
              >
                <Grid.Row>
                  <Grid.Row style={{ marginBottom: 10 }}>
                    <span style={{ fontSize: 24, fontWeight: "bold" }}>
                      Select Your Dates
                      </span>
                  </Grid.Row>
                  <Grid.Row>
                    <Rating
                      icon="star"
                      defaultRating={5}
                      maxRating={5}
                      size="mini"
                      style={{ marginRight: 10 }}
                    />
                    108 Reviews
                  </Grid.Row>
                </Grid.Row>
                <Divider
                  style={{
                    width: "100%",
                    margin: 0,
                    marginBottom: "1rem",
                    marginTop: "1rem"
                  }}
                />
                <Grid.Row style={{ marginBottom: "1rem" }}>
                  <DateRangePicker
                    numberOfMonths={1}
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => {
                      
                      this.setState({ startDate, endDate });
                    }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => {
                      this.setState({ focusedInput });
                    }}
                  />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Row columns={2} style={{ textAlign: "right" }}>
                    <label
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        float: "left",
                        marginTop: ".75rem"
                      }}
                    >
                      Adults:
                    </label>
                    <Button
                      icon="plus"
                      size="mini"
                      style={{
                        marginRight: "1rem",
                        borderRadius: 100,
                        color: "#f6008a",
                        background: "white",
                        border: "2px solid #f6008a"
                      }}
                        onClick={() => this.changeAdult('add')}
                    />
                    <Input
                      style={{
                        width: 50,
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        marginRight: "1rem",
                        textAlign: "center"
                      }}
                      value={this.state.adults}
                      size="tiny"
                    />
                    <Button
                      icon="minus"
                      size="mini"
                      style={{
                        borderRadius: 100,
                        color: "#f6008a",
                        background: "white",
                        border: "2px solid #f6008a"
                      }}
                      onClick={() => this.changeAdult('minus')}
                    />
                  </Grid.Row>
                  <Grid.Row
                    columns={2}
                    style={{ marginTop: "1rem", textAlign: "right" }}
                  >
                    <label
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        float: "left",
                        marginTop: ".75rem"
                      }}
                    >
                      Children:
                    </label>
                    <Button
                      icon="plus"
                      size="mini"
                      style={{
                        marginRight: "1rem",
                        borderRadius: 100,
                        color: "#f6008a",
                        background: "white",
                        border: "2px solid #f6008a"
                      }}
                      onClick={() => this.changeChild('add')}
                    />
                    <Input
                      style={{
                        width: 50,
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        marginRight: "1rem",
                        textAlign: "center"
                      }}
                      value={this.state.children}
                      size="tiny"
                    />
                    <Button
                      icon="minus"
                      size="mini"
                      style={{
                        borderRadius: 100,
                        color: "#f6008a",
                        background: "white",
                        border: "2px solid #f6008a"
                      }}
                      onClick={() => this.changeChild('minus')}
                    />
                  </Grid.Row>
                </Grid.Row>
                <Divider
                  style={{
                    width: "100%",
                    margin: 0,
                    marginBottom: "1rem",
                    marginTop: "1rem"
                  }}
                />
                <Grid.Row>
                  <Button
                    size="huge"
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      marginRight: "1rem",
                      background: "#f6008a",
                      color: "white"
                    }}
                    onClick={() => this.ViewPackages(this.state)}
                    disabled={
                      this.state.endDate !== null &&
                      this.state.startDate !== null
                        ? false
                        : true
                    }
                  >
                    View Packages
                  </Button>
                </Grid.Row>
                <Grid.Row style={{ textAlign: "center", marginTop: "1rem" }}>
                  <span style={{ fontWeight: "bold" }}>
                    You won't be charged!
                  </span>
                </Grid.Row>
              </Grid.Row>
              <Grid.Row />
              </div>
              ): (<StoryForm data={this.props} other={this.state} />)
}
            </Sticky>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default DatePicker;
