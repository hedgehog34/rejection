import React from 'react';

import { REJECTED } from '../../util/constants';

import styles from './QuestionList.css';

const Question = ({ q, removeQuestion }) => {
    const pointsEarned = q.status === REJECTED ? 10 : 1;
    const date = new Date(q.timestamp).toLocaleDateString("en-GB");

    return (
        <li className={styles.li}>
            <span className={styles.date}>{date}</span>
            I asked <b>{q.askee}</b>, '{q.question}',
            and my request get <b>{q.status.toUpperCase()}</b>
            <span className={styles.points}>{`+${pointsEarned}`}</span>
            <span className={styles.remove}
                  onClick={() => removeQuestion(q.id)}>X</span>
        </li>
    )
};

//TODO: React type check of `questions` object
export const QuestionList = ({ questions, removeQuestion }) => {
    const questionList = questions.map((q, i) => (
        <Question key={i}
                  q={q}
                  removeQuestion={removeQuestion}/>
    ));

    return (
        <ul>
            {questionList}
        </ul>
    );
};