import React, { Component } from 'react';
import { Store, get, set } from 'idb-keyval';

import { REJECTED } from '../../util/constants';
import logo from '../../logo.svg';
import { Ask } from '../Ask/Ask';
import { QuestionList } from '../QuestionList/QuestionList';

import styles from './App.css';


const STORE = new Store('rejection-app-db', 'rejection-store');
const DB__KEY = 'questions';

class App extends Component {
    state = {
        questions: [],
    };

    componentDidMount() {
        get(DB__KEY, STORE)
            .then(val => this.setState({ questions: val ? val : [] }))
            .then(() => console.log('Data taken from DB!'))
            .catch(err => console.log('Data pull failed', err));
    }

    componentDidUpdate() {
        set(DB__KEY, this.state.questions, STORE)
            .then(() => console.log('DB entries updated'))
            .catch(err => console.log('DB update failed!', err));
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

    removeAllQuestions = () => this.setState({ questions: [] });

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
                              removeQuestion={this.removeQuestion}
                              removeAllQuestions={this.removeAllQuestions}/>

                <h2>{`Total Points ${points}`}</h2>
            </div>
        );
    }
}

export default App;
