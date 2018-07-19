import React, { Component } from 'react';
import {MovieLists} from './components/MovieLists'
import {MovieDetails} from './components/MovieDetails'

import './App.css';
// import './Styles.css'
import { Container, Row, Col } from 'reactstrap';



const APIKEY = 'c173d656'

class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.populateMovies() 
    
    this.state = {
      movies : [],
      selectedMovieDetails : {}
    }

  }

  populateMovies= (() => {
    //const APIKEY = 'c173d656'
    
    fetch('http://www.omdbapi.com/?s=batman&apikey=' + APIKEY)
    .then((response) => response.json())
    .then((json) => {
      
        this.setState({
          movies : json.Search
        })
    })

  })

  handleMovieTitleBtnClick = ((movieId) => {
    fetch('http://www.omdbapi.com/?i=' +  movieId + '&apikey=' + APIKEY)
    .then((response) => response.json())
    .then((json) => {
    //console.log(json)

    this.setState({
      selectedMovieDetails :{Title:json.Title,Poster:json.Poster,Year:json.Year,Rated:json.Rated,Released:json.Released,Director:json.Director}
     
    })
    console.log(this.state.selectedMovieDetails )
  })
})

  render() {
    return (
      <Container id="wrapper">
        <Row>
          <Col><MovieLists movies = {this.state.movies} handleMovieTitleBtnClick = {this.handleMovieTitleBtnClick}>
                   </MovieLists> 
            </Col>
        </Row>
        <br/>
        <hr/>
        <Row>
          <Col><MovieDetails selectedMovieDetails = {this.state.selectedMovieDetails}/></Col>
        </Row>
      </Container>
)
      
  }
}

export default App;
