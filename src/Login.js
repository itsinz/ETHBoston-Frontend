import React, { PureComponent } from "react";
import { Form, Divider, Button, Container, Grid, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends PureComponent {
  handleSignUp = e => {
    e.preventDefault();
  };

  startTorusLogin = e => {

  };
  
  render() {
    return (
      <Container>
        <Grid verticalAlign="middle" columns={4} centered style={{ height: "100vh" }}>
          <Grid.Row>
            <Grid.Column>
              <Image src="logo.svg"></Image>
              <h3>WELCOME</h3>
              <Divider hidden />
              <Form>
                <Form.Field>
                  <input placeholder="Username" />
                </Form.Field>
                <Form.Field>
                  <input placeholder="Password" type="password" />
                </Form.Field>
                <p>
                  Already have an account?
                  <Link to="/signin"> Sign in</Link>
                </p>
                <Button type="submit" onClick={this.handleSignUp} className="btnColor">
                  Sign Up
                </Button>
              </Form>
              <Divider hidden />
              <p>or</p>
              <Divider hidden />
              <img src="torus.svg" className="image-btn" onClick={this.startTorusLogin} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Login;
