import React, { Component } from "react";
import {
  Grid,
  Container,
  Image,
  Button,
  Icon,
  Rating
} from "semantic-ui-react";

export default class TopComponent extends Component {
  componentWillReceiveProps() { }
 

  render() {
    console.log('TOP', this.props)
    
    return (
      <Container fluid={true} >
      <Grid columns={2} stackable verticalAlign='middle' style={{background: `linear-gradient(0deg,rgba(0, 0, 0,0.3),rgba(0, 0, 0,0.5)),url(${this.props.story.profile.meta_box.cover[0].full_url}) 50% 50% no-repeat`, height: '60vh', width: '100%'}}>
      <Grid.Row verticalAlign='middle' style={{height: '100%'}}>
      <Grid.Column style={{marginLeft: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}} textAlign='center' verticalAlign='middle'>
        <h1 style={{color: 'white', fontSize: '4rem', display: 'block'}}>{this.props.story.profile.meta_box.name}</h1>
     
        <h2 style={{color: 'white', fontSize: '2rem'}}>
        {this.props.story.profile.meta_box.location}
        </h2>
        </Grid.Column>
        <Grid.Column />
        </Grid.Row>
        </Grid>
        <Grid columns={4} style={{padding: '2rem 2rem'}} doubling>
        {this.props.story.profile.meta_box.gallery.map((item, index) => {
          if (index < 4) {
            return (<Grid.Column><Image src={item.full_url} style={{maxHeight: 200, width: '100%'}}/></Grid.Column>)
          }
        })}
          </Grid>
        </Container>
    );
  }
}


