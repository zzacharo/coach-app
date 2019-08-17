import { connect } from "react-redux";
import CompleteLogin from "./CompleteLogin";
import { login } from "./state/actions";

const mapDispatchToProps = dispatch => ({
  login: oAuthCode => dispatch(login(oAuthCode))
});
export default connect(
  state => ({
    loading: state.login.loading,
    data: state.login.data,
    error: state.login.error,
    userSession: state.session
  }),
  mapDispatchToProps
)(CompleteLogin);
