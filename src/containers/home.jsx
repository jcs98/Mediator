import { connect } from 'react-redux';
import history from '../history';

import Home from '../components/home';
import { addIssue } from '../actions'

const mapDispatchToProps = dispatch => ({
  logout: () => {
    console.log("Logging out..");
    dispatch({ type: "LOGOUT" });
    history.push('./');
  },
  addIssue: (title, body, tags) => {
    console.log("Adding Issue");
    dispatch(addIssue(title, body, tags));

  }
});

const mapStateToProps = state => ({
  issues: state.issues,
  details: state.details
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);