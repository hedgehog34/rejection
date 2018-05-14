import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Ask } from "../Ask/Ask";

import styles from './App.css';

class App extends Component {
    state = {
        question: '',
        askee: '',
        submit: '',
        questions: [],
    };

    resetQuestion = () => {
        this.setState({
            question: '',
            askee: '',
            submit: '',
        });
    };

    buildQuestions = question => {
        this.setState({ questions: [ ...this.state.questions, question ] });
    };

    handleInputChange = evt => {
        this.setState({ [evt.target.id]: evt.target.value });
    };

    handleQuestionSubmit = evt => {
        evt.preventDefault();

        this.setState({ submit: evt.target.id });

        this.buildQuestions({
            question: this.state.question,
            askee: this.state.askee,
            submit: evt.target.id
        });

        this.resetQuestion();
    };

    render() {
        console.log(this.state);
        const { question, askee } = this.state;
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Rejection Application</h1>
                </header>

                <Ask question={question}
                     askee={askee}
                     handleInputChange={this.handleInputChange}
                     handleQuestionSubmit={this.handleQuestionSubmit}/>
            </div>
        );
    }
}

export default App;
