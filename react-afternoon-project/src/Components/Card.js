import React from 'react'
import '../App.css'


    function Card(props) {
        console.log(props)
        return(
          <div> 
            <div className='Card-counter'>
                <h1 className='employee-name'>{props.info.name.first}, {props.info.name.last}</h1>
                <h1> {props.index +1} / {props.data.length-1}</h1>
            </div>
            <div className='Card-1'>
                <h1 className='From'>From: </h1>                    
                <h1 className='City-country'>{props.info.city}, {props.info.country} </h1>
            </div>
            
            <div className='Card-2'>
                <h1 className='job-title'>Job Title:</h1>
                <h1 className='title'> {props.info.title}</h1>
            </div>
             
            <div className='Card-3'>
                <h1 className='Employer'>Employer: </h1>
                <h1 className='Employer-name'>{props.info.employer}</h1>
            </div>
            
            <div className='Card-4'>
                <h1 className='Favorite' >Favorite Movie:</h1>
                <h1 className='Favorite-movie'> {props.info.favoriteMovies}</h1>
            </div>

        </div>    
       )
  
        }   
      
        
    
        
    
    

   


export default Card