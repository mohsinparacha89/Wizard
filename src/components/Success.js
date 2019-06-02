import React, { Component } from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {


    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Success"/>
                    <h1>Thank you for your Submisison!</h1>
                </React.Fragment>
            </MuiThemeProvider>

        
        )
    }
}

export default Success
