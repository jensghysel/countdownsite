import {Component} from "react";
import React from "react";

export default class Geslacht extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            name: '',
            gender:'boy'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <section className="section container">
                <h2 className="section-title">
                    <span>Geboortegokje</span>
                </h2>
                <form onSubmit={this.handleSubmit} style={{width: '30%', margin: '0 auto'}}>
                    <div className="form-group">
                        <label className="radio-inline">
                            <p>boy</p>
                            <input name="gender" type="radio" id="inlineRadio1" value="boy" checked={this.state.gender === 'boy'} onChange={this.handleChange} />
                        </label>
                        <label className="radio-inline">
                            <p>girl</p>
                            <input name="gender" type="radio" id="inlineRadio2" value="girl" checked={this.state.gender === 'girl'} onChange={this.handleChange} />
                        </label>
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="exampleInputName2">Naam</label>
                        <input required type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="exampleInputName2" placeholder="Julie Castelein" style={{textAlign: "center"}} />
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input required type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="juliecastelein@jensiscewl.com" style={{textAlign: "center"}} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-default" />
                </form>
            </section>
        );
    }

    handleChange (evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }
}