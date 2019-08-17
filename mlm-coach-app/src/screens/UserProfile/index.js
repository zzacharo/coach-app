import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { getCurrentUser } from "./state/actions";

const mapDispatchToProps = dispatch => ({
  getCurrentUser: userId => dispatch(getCurrentUser(userId))
});
export default connect(
  state => ({
    loading: state.user.loading,
    data: state.user.data,
    error: state.user.error,
    userSession: state.session
  }),
  mapDispatchToProps
)(UserProfile);
