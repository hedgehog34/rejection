import React, { Component } from 'react';

import { uuid } from '../../util/uuid';
import { REJECTED } from '../../util/constants';
import logo from '../../logo.svg';
import { Ask } from '../Ask/Ask';
import { QuestionList } from '../QuestionList/QuestionList';

import styles from './App.css';


class App extends Component {
    state = {
        question: '',
        askee: '',
        status: '',
        questions: [],
        points: 0,
    };

    resetQuestion = () => {
        this.setState({
            question: '',
            askee: '',
            status: '',
        });
    };

    buildQuestions = question => {
        const { questions, points } = this.state;
        this.setState({
            questions: [ ...questions, question ],
            points: points + (question.status === REJECTED ? 10 : 1),
        });
    };

    handleInputChange = evt => {
        this.setState({ [evt.target.id]: evt.target.value });
    };

    handleQuestionSubmit = evt => {
        evt.preventDefault();

        const { askee, question } = this.state;
        const { id } = evt.target;

        this.setState({
            status: id,
        });

        this.buildQuestions({
            id: uuid(),
            timestamp: Date.now(),
            question,
            askee,
            status: id,
        });

        this.resetQuestion();
    };

    render() {
        const { question, askee, questions, points } = this.state;

        console.log(questions);

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
