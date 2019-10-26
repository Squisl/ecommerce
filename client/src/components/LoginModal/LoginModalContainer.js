import {connect} from "react-redux"
import LoginModal from "./LoginModal"
import {toggleLogin} from "../../modules/modal"

const mapStateToProps = state => ({})

const mapDispatchToProps = {toggleLogin}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModal)
