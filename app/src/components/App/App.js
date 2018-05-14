import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Ask } from "../Ask/Ask";

import styles from './App.css';

class App extends Component {
    state = {
        question: '',
        askee: '',
        submit: '',
        questions: {},
    };

    handleInputChange = evt => {
        this.setState({ [evt.target.id]: evt.target.value });
    };

    handleQuestionSubmit = evt => {
        // console.log(evt.target.id);
        // this.setState({ [evt.target.id]: !this.state[evt.target.id] })
        evt.preventDefault();
        this.setState({ submit: evt.target.id });
    };

    render() {
        console.log(this.state);
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Rejection Application</h1>
                </header>
                <Ask handleInputChange={this.handleInputChange}
                     handleQuestionSubmit={this.handleQuestionSubmit}/>
            </div>
        );
    }
}

export default App;
