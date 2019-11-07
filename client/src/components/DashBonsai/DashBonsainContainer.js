import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import DashBonsai from "./DashBonsai"
import {fetchBonsais, deleteBonsai} from "../../modules/bonsai"
import {toggleDelete} from "../../modules/modal"

const mapStateToProps = state => ({
  bonsais: state.bonsai.all,
  modal: state.modal,
})

const mapDispatchToProps = {fetchBonsais, toggleDelete, deleteBonsai}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(DashBonsai))
