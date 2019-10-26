import {connect} from "react-redux"
import RegisterModal from "./RegisterModal"
import {toggleRegister} from "../../modules/modal"

const mapStateToProps = state => ({})

const mapDispatchToProps = {toggleRegister}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterModal)
