import React, { Component } from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter personal Details"/>
                    <TextField
                        hintText = "Enter your Occupation"
                        floatingLabelText = "Occupation"
                        onChange = {handleChange('occupation')}
                        defaultValue = {values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Your City"
                        floatingLabelText = "City"
                        onChange = {handleChange('city')}
                        defaultValue = {values.city}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter your Bio"
                        floatingLabelText = "Bio"
                        onChange = {handleChange('bio')}
                        defaultValue = {values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label = "Continue"
                        primary = {true}
                        styles = {styles.button}
                        onClick = {this.continue}

                    />
                    <RaisedButton
                        label = "Back"
                        primary = {false}
                        styles = {styles.button}
                        onClick = {this.back}

                    />
                </React.Fragment>
            </MuiThemeProvider>

        
        )
    }
}
const styles = {
    button : {
        margin : 15
    }
}
export default FormUserDetails
