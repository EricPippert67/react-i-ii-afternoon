import React, { Component } from 'react'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'
import data from './data'
import './Reset.css'


class App extends Component{
    constructor(){
        super();
        this.state={
            data: data,
            index:0
        }
        this.decrement=this.decrement.bind(this)
        this.increment=this.increment.bind(this)
    }

        decrement() {
            if(this.state.index > 0){
            this.setState({index:this.state.index-1})
            }
}       
        increment() {
            if(this.state.index<this.state.data.length-1){
            this.setState({index:this.state.index+1})
            }
        }
        

    render(){
        

    
  return(

        <div className= 'App'>

    <header className='App-header'>  HOME </header>

        <h1 className='under-header' ></h1>


        <div className='Card'>
       <Card info={this.state.data[this.state.index]}
       index={this.state.index}
       data={this.state.data}/>
       </div>

        <div>
        <Button increment={this.increment}  decrement={this.decrement}/>


         </div>  
  
  
  
  
      </div>
  )
}
  }
  export default App