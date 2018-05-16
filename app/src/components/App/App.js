import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Ask } from "../Ask/Ask";

import { uuid } from "../../util/uuid";
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

        const { askee, question } = this.state;

        this.buildQuestions({
            question,
            askee,
            submit: evt.target.id,
            id: uuid(),
        });

        this.resetQuestion();
    };

    render() {
        const { question, askee, questions } = this.state;

        const questionList = questions.map((q, i) => (
            <li key={i}>
                I asked <b>{q.askee}</b>, '{q.question}',
                and my request get <b>{q.submit.toUpperCase()}</b>
            </li>
        ));

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

                <ul>
                    {questionList}
                </ul>

            </div>
        );
    }
}

export default App;
