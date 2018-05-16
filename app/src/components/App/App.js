import React, { Component } from 'react';

import { uuid } from "../../util/uuid";
import logo from '../../logo.svg';
import { Ask } from "../Ask/Ask";
import { QuestionList } from "../QuestionList/QuestionList";

import styles from './App.css';


class App extends Component {
    state = {
        question: '',
        askee: '',
        submit: '',
        questions: [],
        points: 0,
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

        const { askee, question, points } = this.state;
        const { id } = evt.target;

        this.setState({
            submit: id,
            points: points + (id === 'rejected' ? 10 : 1),
        });

        this.buildQuestions({
            question,
            askee,
            submit: id,
            id: uuid(),
        });

        this.resetQuestion();
    };

    render() {
        const { question, askee, questions, points } = this.state;

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

                <QuestionList questions={questions}/>

                <h2>{`Total Points ${points}`}</h2>

            </div>
        );
    }
}

export default App;
