import React, { Component } from 'react';

import { REJECTED, ACCEPTED } from '../../util/constants';

import styles from './Ask.css';


export class Ask extends Component {
    render() {
        const { handleInputChange, handleQuestionSubmit, question, askee } = this.props;
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
                           onChange={handleInputChange}/>
                </div>

                <div className={styles.labelInputPair}>
                    <label htmlFor="askee"
                           className={styles.label}>Name of the person asked</label>
                    <input id="askee"
                           value={askee}
                           className={styles.input}
                           type="text"
                           onChange={handleInputChange}/>
                </div>

                <div className={styles.buttons}>
                    <button id={ACCEPTED}
                            className={styles.button}
                            onClick={handleQuestionSubmit}
                            disabled={btnDisabled}>
                        Accepted
                    </button>
                    <button id={REJECTED}
                            className={styles.button}
                            onClick={handleQuestionSubmit}
                            disabled={btnDisabled}>
                        Rejected
                    </button>
                </div>
            </div>
        );
    }
}
