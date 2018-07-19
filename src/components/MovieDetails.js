import React, { Component } from 'react';
  import '../Styles.css';

export class MovieDetails extends Component {



    render() {
       let MovieDetails = this.props.selectedMovieDetails
    let MovieDetailsItems =
    <div id="movieDetailsDiv">   
                        <div>    
                            <h2>{MovieDetails.Title}</h2> 
                            <img src={MovieDetails.Poster}/>
                        </div>     
                         <div id="movieDetailsDiv">
                            <ul>
                                <li>{MovieDetails.Year}</li>
                                <li>{MovieDetails.Rated}</li>
                                <li>{MovieDetails.Director}</li>
                                <li>{MovieDetails.Released}</li>
                            </ul>  
                        </div>
                        </div>     
      return (
        
        <div>
        {MovieDetailsItems}             
    </div>
    )
    }  
}