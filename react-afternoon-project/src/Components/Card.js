import React from 'react'
import '../App.css'


    function Card(props) {
        console.log(props)
        return(

            <div>
                <h1 >{props.info.name.first}, {props.info.name.last}</h1>
                <h1>From:    {props.info.city}, {props.info.country}</h1>
                <h1>Job Title: {props.info.title}</h1>
                <h1>Employer: {props.info.employer}</h1>
                <h1>Favorite Movie: {props.info.favoriteMovies}</h1>
                
            </div>
        )
  
     
        
    
        
    
    
}
   


export default Card