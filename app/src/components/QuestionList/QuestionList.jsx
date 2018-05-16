import React from 'react';

import { REJECTED } from '../../util/constants';

import styles from './QuestionList.css';


export const QuestionList = ({ questions }) => {
    const questionList = questions.map((q, i) => {
        const pointsEarned = q.status === REJECTED ? 10 : 1;

        return (
            <li key={i}
                className={styles.li}>
                I asked <b>{q.askee}</b>, '{q.question}',
                and my request get <b>{q.status.toUpperCase()}</b>
                <span className={styles.points}>{`+${pointsEarned}`}</span>
            </li>
        )
    });

    return (
        <ul>
            {questionList}
        </ul>
    );
};