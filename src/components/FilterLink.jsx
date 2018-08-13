import React, { Component } from 'react';
import styles from './FilterLink.less';
import { setFilter } from '../actions';
import {connect} from 'react-redux';
@connect(null,mapDispatchToProps)
export default class FilterLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return <span className={styles.active}>{children}</span>;
        }

        return <span className={styles.root} onClick={onClick}>{children}</span>;
    }
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onClick: ()=> dispatct(setFilter(ownProps.filter))
    };
}