
import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import '../Styles.css';

export class MovieLists extends Component {



    render() {
       let movies = this.props.movies
        console.log(movies)
       let movieItems= movies.map((movie) => {
        return (
          
          <Card key={movie.imdbID} id="movieListCard">
            <CardImg id="movieImage" src={movie.Poster} alt="Card image cap" />
            <CardBody>
              <Button id="movieTitleBtn"  onClick={() =>this.props.handleMovieTitleBtnClick(movie.imdbID)}>{movie.Title}</Button>
            </CardBody>
          </Card>
        )      
      })


      return (
        <div>
          <h1>Movie Lists</h1>
        <div id="movieListCardDiv">
         
        {movieItems}
        </div>
        </div>
    )
  }
}



  
       