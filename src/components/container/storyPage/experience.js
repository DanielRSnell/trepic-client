import React, { Component } from 'react';
import { Grid, Item, Image } from 'semantic-ui-react'


class Exp extends Component {



    render() {
        return (
            <Grid.Row>
                <h1>Epic Experiences</h1>
                <Item.Group divided>
                {this.props.data ? (
                    this.props.data.map((item, index) => {
                        return <Item>
                            <Item.Image size="medium" src={item.exp_gallery} style={{maxHeight: 250}}/>
                            <Item.Content>
                                <Item.Header as='a'>{item.exp_title}</Item.Header>
                                <Item.Description>
                                    {item.exp_about}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    })   
                    ) : null}
                    </Item.Group>
            </Grid.Row>
        )
    }
}

export default Exp;