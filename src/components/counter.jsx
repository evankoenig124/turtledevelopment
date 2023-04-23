import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Counter extends Component {
    state = {
        count: 0
    };

    handleAdd = () => {
        this.setState({count: this.state.count + 1});
    }
    handleSubtract = () => {
        this.setState({count: this.state.count - 1})
    }

    render() { 
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{fontSize: 100, marginBottom: 130 }}>{this.formatCount()}</span>
                <button onClick={this.handleAdd} style={{ padding: '10px 20px', fontSize: 20 }}>
                    Add</button>
                <button onClick={this.handleSubtract} style={{ padding: '10px 20px', fontSize: 20}}>
                    Subtract</button>
            </div>
             
        );
    }

    formatCount(){
        const {count} = this.state;
        return <h1>{this.state.count}</h1>;
    }
}

const counter=()=>{
    return(
        <h1>Hello</h1>
  
    )

}
 
export default Counter;