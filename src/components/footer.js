import React from "react";
import {
  Grid,
  List,
  Segment,
  Header,
  Container,
  Divider,
  Image,
  Item
} from "semantic-ui-react";

const footer = () => (
  <Segment style={{ padding: "5em 0em" }} vertical>
    <Container textAlign="center">
      <Divider section />
      <Grid columns={4} stackable>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4" content="Group 1" />
            <List link>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" content="Group 2" />
            <List link>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" content="Group 3" />
            <List link>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" content="Footer Header" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider section />
      <Image
        src="http://s3-us-east-2.amazonaws.com/trepic-admin/wp-content/uploads/2018/12/03194038/512x512bb.jpg"
        centered
        size="mini"
      />
      <List horizontal link size="small">
        <List.Item as="a" href="#">
          Site Map
        </List.Item>
        <List.Item as="a" href="#">
          Contact Us
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default footer;
