import React, { Component } from 'react'
import {
    Container,
    Grid,
    Button,
    Form,Divider
  } from "semantic-ui-react";

export default class StoryForm extends Component {
    render() {
        return (
            <Grid.Row
              style={{ border: "1px solid #dadada", padding: "2rem" }}
            >
                <Grid.Row>
                    <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    Create Your Account
                    </span>
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
            <form className="ui form" name="Create Account" method="POST" data-netlify="true" >
                <div className="field">
                    <label>First Name</label>
                    <input placeholder="Jon" type="text" name="first name" />
                        </div>
                        <div className="field">
                    <label>Last Name</label>
                    <input placeholder="Smith" type="text" name="last name"/>
                        </div>
                        <div className="field">
                    <label>Email</label>
                    <input placeholder="Jon@Example.com" type="email" name="email"/>
                        </div>
                        <Button
                            size="huge"
                            style={{
                              width: "100%",
                              alignSelf: "center",
                              marginRight: "1rem",
                              background: "#f6008a",
                              color: "white"
                            }}
                            type='submit'>Submit</Button>
                    </form>
                    </Grid.Row>
            </Grid.Row>
        )
    }
}