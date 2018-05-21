import React, { Component } from 'react';

import { uuid } from "../../util/uuid";
import { REJECTED, ACCEPTED } from '../../util/constants';

import styles from './Ask.css';


export class Ask extends Component {
    state = {
        question: '',
        askee: '',
        status: '',
    };

    resetQuestion = () => {
        this.setState({
            question: '',
            askee: '',
            status: '',
        });
    };

    handleInputChange = evt => {
        this.setState({ [evt.target.id]: evt.target.value });
    };

    handleQuestionSubmit = evt => {
        evt.preventDefault();

        const { askee, question } = this.state;
        const { buildQuestions } = this.props;
        const { id } = evt.target;

        this.setState({
            status: id,
        });

        buildQuestions({
            id: uuid(),
            timestamp: Date.now(),
            question,
            askee,
            status: id,
        });

        this.resetQuestion();
        this.input.focus();
    };

    render() {
        const { question, askee } = this.state;
        const btnDisabled = !(question && askee);

        return (
            <div className={styles.ask}>
                <div className={styles.labelInputPair}>
                    <label htmlFor="question"
                           className={styles.label}>Rejection Question</label>
                    <input id="question"
                           value={question}
                           className={styles.input}
                           type="text"
                           ref={node => this.input = node}
                           onChange={this.handleInputChange}/>
                </div>

                <div className={styles.labelInputPair}>
                    <label htmlFor="askee"
                           className={styles.label}>Name of the person asked</label>
                    <input id="askee"
                           value={askee}
                           className={styles.input}
                           type="text"
                           onChange={this.handleInputChange}/>
                </div>

                <div className={styles.buttons}>
                    <button id={ACCEPTED}
                            className={styles.button}
                            onClick={this.handleQuestionSubmit}
                            disabled={btnDisabled}>
                        Accepted
                    </button>
                    <button id={REJECTED}
                            className={styles.button}
                            onClick={this.handleQuestionSubmit}
                            disabled={btnDisabled}>
                        Rejected
                    </button>
                </div>
            </div>
        );
    }
}
