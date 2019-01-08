import {Component} from "react";
import React from "react";
import GenderResult from "./GenderResult";
import { withAlert } from 'react-alert'

class Geslacht extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            gender: 'boy'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (

                <section className="section container">
                    <h2 className="section-title" style={{"marginBottom": "0px"}}>
                        <span>Scorebord</span>
                    </h2>
                    <GenderResult/>
                    <h2 className="section-title">
                        <span>Jouw pronostiek</span>
                    </h2>
                    <form onSubmit={this.handleSubmit} className="genderForm">
                        <div className="form-group">
                            <label className="radio-inline genderLabel">
                                <img src="static/img/itsaboy.png" alt="its a boy" /> <br/>
                                <input name="gender" type="radio" id="inlineRadio1" value="boy"
                                       checked={this.state.gender === 'boy'} onChange={this.handleChange}/>
                            </label>
                            <label className="radio-inline genderLabel marginLeftTen">
                                <img src="static/img/itsagirl.png" alt="its a girl" /> <br/>
                                <input name="gender" type="radio" id="inlineRadio2" value="girl"
                                       checked={this.state.gender === 'girl'} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            {/*<label htmlFor="exampleInputName2">Naam</label>*/}
                            <input required type="text" name="name" value={this.state.name} onChange={this.handleChange}
                                   className="form-control" id="exampleInputName2" pattern="[a-zA-Z]+" placeholder="Baby Naam"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            {/*<label htmlFor="exampleInputEmail1">Email</label>*/}
                            <input required type="email" name="email" value={this.state.email}
                                   onChange={this.handleChange}
                                   className="form-control" id="exampleInputEmail1"
                                   placeholder="email adres"/>
                        </div>
                        <br/>
                        <input type="submit" value="Submit" className="btn btn-default"/>
                    </form>
                </section>
        );
    }

    handleChange(evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(event) {
        this._storeGokje();
        event.preventDefault();
    }

    _storeGokje() {
        fetch('http://localhost:8080/gok', {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'AUTH': 'JKLDGHBKSZDFQ135QDZQ3F3QDFZ31'},
            body: JSON.stringify(this.state)
        }).then(response => {
            if (response.status === 200) {
                // alert("successvol opgeslagen");
                this.props.alert.success('Je gokje werd succesvol opgeslagen');
                this.setState({
                    email: '',
                    name: '',
                    gender: 'boy'
                });
            } else if (response.status === 500) {
                response.json().then(r => {
                    if (r.message.toLowerCase().includes("email")) {
                        // alert("Email werd al gebruikt");
                        this.props.alert.info('Dit email adres werd al geregistreerd');
                    }
                });
            } else {
                // alert("Er is iets misgelopen");
                this.props.alert.error('Er is iets misgelopen, probeer opnieuw');
            }
        });
    }
}

export default withAlert(Geslacht);