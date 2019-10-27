import {connect} from "react-redux"
import LoginModal from "./LoginModal"
import {toggleLogin} from "../../modules/modal"
import {login} from "../../modules/user"

const mapStateToProps = state => ({})

const mapDispatchToProps = {toggleLogin, login}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModal)
