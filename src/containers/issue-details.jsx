import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import history from '../history';

import IssueDetails from '../components/issue-details';
import { addIssueDetail } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      console.log("Logging out..");
      dispatch({ type: "LOGOUT" });
      history.push('./');
    },
    addIssueDetail: (issueId, detailType, message) => {
      console.log("Adding Issue");
      dispatch(addIssueDetail(issueId, detailType, message));
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