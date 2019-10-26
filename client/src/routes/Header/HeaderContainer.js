import {connect} from "react-redux"
import Header from "./Header"
import {toggleRegister, toggleLogin} from "../../modules/modal"

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = {toggleRegister, toggleLogin}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
