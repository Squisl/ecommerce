import {connect} from "react-redux"
import RegisterModal from "./RegisterModal"
import {toggleRegister} from "../../modules/modal"
import {register} from "../../modules/user"

const mapStateToProps = state => ({})

const mapDispatchToProps = {toggleRegister, register}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterModal)
