import React, { Component } from 'react';

import { REJECTED } from '../../util/constants';
import logo from '../../logo.svg';
import { Ask } from '../Ask/Ask';
import { QuestionList } from '../QuestionList/QuestionList';

import styles from './App.css';


const LOCAL_STORAGE__KEY = 'questions';

class App extends Component {
    state = {
        questions: [],
    };

    componentDidMount() {
        const localStorageQuestions = JSON.parse(localStorage.getItem(LOCAL_STORAGE__KEY));

        if (localStorageQuestions) {
            this.setState({ questions: localStorageQuestions });
        }
    }

    componentDidUpdate() {
        localStorage.setItem(LOCAL_STORAGE__KEY, JSON.stringify(this.state.questions));
    }

    buildQuestions = question => {
        this.setState({
            questions: [ ...this.state.questions, question ],
        });
    };

    removeQuestion = id => {
        this.setState({
            questions: this.state.questions.filter(q => q.id !== id),
        })
    };

    render() {
        const { questions } = this.state;

        const points = questions.reduce((acc, q) => {
            return acc + (q.status === REJECTED ? 10 : 1);
        }, 0);

        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Rejection Application</h1>
                </header>

                <Ask buildQuestions={this.buildQuestions}/>

                <QuestionList questions={questions}
                              removeQuestion={this.removeQuestion}/>

                <h2>{`Total Points ${points}`}</h2>
            </div>
        );
    }
}

export default App;
