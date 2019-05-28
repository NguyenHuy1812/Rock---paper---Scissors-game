import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar, Card, Row, Container, Col, ListGroup } from 'react-bootstrap';

const choices = [
  "rock",
  "paper",
  "scissors"
]
class myGameHere extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      computerChoice: null,
      gameHistory: [],
      playerChoice: '',
    }
  }


  renderIMGChoice = () => {
    if (this.state.playerChoice === 'rock') {
      return "https://banner2.kisspng.com/20180705/sfh/kisspng-rockpaperscissors-computer-icons-clip-art-paper-scissors-5b3e1287be5a43.5750598415307946317797.jpg"
    }
    if (this.state.playerChoice === 'paper') {
      return "https://www.pinclipart.com/picdir/middle/51-511523_rock-paper-rock-paper-scissors-clipart-png-download.png"
    }
    if (this.state.playerChoice === 'scissors') {
      return "https://i.pinimg.com/736x/e4/ff/99/e4ff99b445b71ba5b5d2316d9295a14a--mickey-disney-mickey-hand.jpg"
    }
  }
  renderChoiceOfuser = () => {
    if (this.state.playerChoice === 'rock') {
      return ` you choose Rock & Computer Choose ${this.state.computerChoice}`
    }
    if (this.state.playerChoice === 'paper') {
      return ` you choose paper & Computer Choose ${this.state.computerChoice}`
    }
    if (this.state.playerChoice === 'scissors') {
      return ` you choose scissors & Computer Choose ${this.state.computerChoice}`
    }
  }

  onLoadUserChoice = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let results = ''
    if (computerChoice === playerChoice) {
      results = 'TIE'
    }
    if (computerChoice === 'rock') {
      if (playerChoice === 'scissors') {
        results = 'Computer Win'
      }
      if (playerChoice === 'paper') {
        results = 'Player Win'
      }
    }
    if (computerChoice === 'paper') {
      if (playerChoice === 'scissors') {
        results = 'Player Win'
      }
      if (playerChoice === 'rock') {
        results = 'Computer Win'
      }
    }
    if (computerChoice === 'scissors') {
      if (playerChoice === 'paper') {
        results = 'Computer Win'
      }
      if (playerChoice === 'rock') {
        results = 'Player Win'
      }
    }
    const newGamehistory = {
      playerChoice,
      computerChoice,
      results
    };

    let gameHistory = this.state.gameHistory;
    gameHistory.push(newGamehistory)



    this.setState({
      gameHistory,
      playerChoice,
      computerChoice
    });
  }
  renderResultHTML = () => {
    const gameHistoryHTML = this.state.gameHistory.map((game) => {
      return <Card.Footer>
        {game.results}
      </Card.Footer>
    })
    return gameHistoryHTML

  }


  render() {
    return (
      <Container style={{ width: '100%', height: '40%' }}>
        <Row className="justify-content-md-center" >
          <Col md lg="8">
            <Card>
              <Card.Img style={{ width: '100%', height: '50%' }} variant="top" src="https://cdn-images-1.medium.com/max/600/1*aZYAQMfiaSiJVucrbiyKqA.gif" />
              <Card.Img style={{ width: '200px', height: '200px' }} variant="top" src={this.renderIMGChoice()} />
              <Card.Body>
                <Card.Text style={{ display: "center" }}>
                  {this.renderChoiceOfuser()}
                </Card.Text>
                <Card.Text style={{ display: "center" }}>

                </Card.Text>
                <Card.Footer className="text-muted ">
                  <Button variant="success" size="lg" onClick={() => this.onLoadUserChoice("rock")} value="rock">Rock</Button>
                  <Button variant="success" size="lg" onClick={() => this.onLoadUserChoice("paper")} value="paper">Paper</Button>
                  <Button variant="success" size="lg" onClick={() => this.onLoadUserChoice("scissors")} value='scissors'>scissors</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
            <br />


          </Col>
          {this.state.gameHistory.length > 0 &&
            <Col md="auto">
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                  {this.renderResultHTML()}
                </ListGroup.Item>
              </ListGroup>,
            <div>

              </div>
            </Col>
          }
          <Col xs lg="2">

          </Col>
        </Row>
      </Container>








    );
  }
}



export default myGameHere;
