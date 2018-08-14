import React, { Component } from 'react';
import styles from './Link.less';
export default class Link extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return <span className={styles.active}>{children}</span>;
        }

        return <span className={styles.root} onClick={onClick}>{children}</span>;
    }
}


function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.filter
    };
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onClick: ()=> dispatch(setFilter(ownProps.filter))
    };
}