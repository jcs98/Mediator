import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import history from '../history';
import IssueDetails from '../components/issue-details';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      console.log("Logging out..");
      dispatch({ type: "LOGOUT" });
      history.push('./');
    }
  };
};

const mapStateToProps = state => {
  return {
    issues: state.issues,
    details: state.details
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IssueDetails));