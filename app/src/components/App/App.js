import React, { Component } from 'react';

import { REJECTED } from '../../util/constants';
import logo from '../../logo.svg';
import { Ask } from '../Ask/Ask';
import { QuestionList } from '../QuestionList/QuestionList';

import styles from './App.css';


class App extends Component {
    state = {
        questions: [],
        points: 0,
    };

    buildQuestions = question => {
        const { questions, points } = this.state;

        this.setState({
            questions: [ ...questions, question ],
            points: points + (question.status === REJECTED ? 10 : 1),
        });
    };

    render() {
        const { questions, points } = this.state;

        console.log(questions);

        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Rejection Application</h1>
                </header>

                <Ask buildQuestions={this.buildQuestions}/>

                <QuestionList questions={questions}/>

                <h2>{`Total Points ${points}`}</h2>

            </div>
        );
    }
}

export default App;
