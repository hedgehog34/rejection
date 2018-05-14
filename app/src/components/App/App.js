import React, {Component} from 'react';
import logo from '../../logo.svg';
import { Ask } from "../Ask/Ask";

import styles from './App.css';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Rejection Application</h1>
                </header>
                <Ask />
            </div>
        );
    }
}

export default App;
