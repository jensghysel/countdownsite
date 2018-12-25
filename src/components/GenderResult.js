import React, {Component} from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

export default class GenderResult extends Component {

    constructor(props){
        super(props);
        this.state = {
            boyPercentage: 0,
            girlPercentage: 0
        };
        this.updateData = this.updateData.bind(this);
    }

    render(){
        this.updateData();
        return(
            <div>
                <SemiCircleProgressBar percentage={this.state.boyPercentage} showPercentValue stroke="#89cff0" strokeWidth={20} />
                <SemiCircleProgressBar percentage={this.state.girlPercentage} showPercentValue stroke="#FFB6C1" strokeWidth={20} />
            </div>
        );
    }

    updateData(){
        let self = this;
        fetch("http://localhost:8080/gok/gender").then(response => {
            response.json().then(r => {
                let boyPercentage = r.percentageBoys;
                let girlPercentage = r.percentageGirls;
                if(!isNaN(boyPercentage) && !isNaN(girlPercentage) && (boyPercentage !== self.state.boyPercentage || girlPercentage !== self.state.girlPercentage)){
                    self.setState({boyPercentage: boyPercentage, girlPercentage: girlPercentage});
                }
            })
        });
    }
}