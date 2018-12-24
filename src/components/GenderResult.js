import React, {Component} from "react";

export default class GenderResult extends Component {
    state = {
      boyPercentage: 0,
      girlPercentage: 0
    };

    constructor(props){
        super(props);
        // console.log("ier");
        // fetch("http://localhost:8080/gok/gender").then(response => {
        //     response.json().then(r => {
        //         console.log(r);
        //     })
        // });

        // this.setState({boyPercentage: result.percentageBoys, girlPercentage: result.percentageGirls});
    }

    render(){
        return(
            <div>
                <h1>boyPercentage: {this.state.boyPercentage}</h1>
                <h1>girlPercentage: {this.state.girlPercentage}</h1>
            </div>
        );
    }
}