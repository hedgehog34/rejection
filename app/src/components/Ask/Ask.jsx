import React, { Component } from 'react';
import styles from './Ask.css';


export class Ask extends Component {
    render() {
        const { handleInputChange, handleQuestionSubmit } = this.props;
        return (
            <div className={styles.ask}>
                <div className={styles.labelInputPair}>
                    <label htmlFor="question"
                           className={styles.label}>Rejection Question</label>
                    <input id="question"
                           className={styles.input}
                           type="text"
                           onChange={handleInputChange}/>
                </div>

                <div className={styles.labelInputPair}>
                    <label htmlFor="askee"
                           className={styles.label}>Name of the person asked</label>
                    <input id="askee"
                           className={styles.input}
                           type="text"
                           onChange={handleInputChange}/>
                </div>

                <div className={styles.buttons}>
                    <button id="accepted"
                            className={styles.button}
                            onClick={handleQuestionSubmit}>
                        Accepted
                    </button>
                    <button  id="rejected"
                             className={styles.button}
                            onClick={handleQuestionSubmit}>
                        Rejected
                    </button>
                </div>
            </div>
        );
    }
}
