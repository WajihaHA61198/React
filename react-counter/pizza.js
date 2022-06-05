import React from 'react';
import pizza from './pizza3.jpg'


const Counter={
    fontSize:"50px",
    backgroundColor:"black",
    borderRadius:"20px",
    width: "200px"
}
const btn = {
    fontSize:"20px",
    padding: "10px",
    backgroundColor:"white",
    borderRadius:"5px",
    margin:"10px"
}
// state component doesn't work in func component
class Pizza extends React.Component{
    // state
    constructor(props){
        super(props)
        this.state = {  
           count:0
      }  
    }
    takeOrder(){
        this.setState({
            count:this.state.count + 1
        })
    }
    cancelOrder(){
        this.setState({
            count:this.state.count -1
        })
    }



    render(){
        return<>
            <img src={pizza} width="200px"/>

            <h1>Pizza Order Counter</h1>
            <h1 style={Counter}>{this.state.count}</h1>
            <div>
            <button style={btn} onClick={() => this.takeOrder()}>Take order</button>
            <button style={btn} onClick={() => this.cancelOrder()}>Cancel order</button> 
            </div>
            
        </>
    }
}
export default Pizza 