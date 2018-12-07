import { connect } from 'react-redux';
import history from '../history';

import Home from '../components/home';

const mapDispatchToProps = dispatch => ({
  logout: () => {
    console.log("Logging out..");
    dispatch({ type: "LOGOUT" });
    history.push('./');
  },
  addIssue: () => {
    console.log("Adding Issue");
    dispatch({ type: "ADD_ISSUE" });

  }
});

const mapStateToProps = state => ({
  issues: state.issues,
  details: state.details
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);