import React, { Component } from 'react';
import styles from './FilterLink.less';

export default class FilterLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return <span className={styles.active}>{children}</span>;
        }

        return <span className={styles.root} onClick={onClick}>{children}</span>;
    }
}