import React, {Component} from 'react';
import {connect} from 'react-redux';
import {attemptLoadDashboard} from './dashboard.actions';
import {logoutAttempt} from '../auth/auth.actions';

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
    loadDashboardData: attemptLoadDashboard,
    attemptLogout: logoutAttempt
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

class Dashboard extends Component {
    logout = () => {
        this.props.attemptLogout();
    }
    render() {
        let dashboardDataDivs = this.props.dashboard.dashboardData ?
            this.props.dashboard.dashboardData.map(({first_name, last_name}, key) => {
                return (<div key={key}>{first_name} {last_name}</div>);
            }) :
            [<div key={'1'}>Loading...</div>];
        return (
          <>
            <div>Users:</div>
              {dashboardDataDivs}

              <button onClick={this.logout}>Log out</button>
          </>
        );
    }

    componentDidMount() {
        this.props.loadDashboardData();
    }
}

export default connectToStore(Dashboard);
