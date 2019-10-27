import {connect} from "react-redux"
import Header from "./Header"
import {toggleRegister, toggleLogin} from "../../modules/modal"
import {logout} from "../../modules/user"

const mapStateToProps = state => ({
  modal: state.modal,
  user: state.user,
})

const mapDispatchToProps = {toggleRegister, toggleLogin, logout}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
