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
  <Segment style={{ paddingTop: '5rem' }} vertical>
    <Container textAlign="center">
     
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
