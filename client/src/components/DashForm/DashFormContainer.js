import {connect} from "react-redux"
import DashForm from "./DashForm"
import {createBonsai} from "../../modules/bonsai"

const mapStateToProps = state => ({})

const mapDispatchToProps = {createBonsai}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashForm)
