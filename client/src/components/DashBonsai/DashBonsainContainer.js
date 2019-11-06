import {connect} from "react-redux"
import DashBonsai from "./DashBonsai"
import {fetchBonsais} from "../../modules/bonsai"

const mapStateToProps = state => ({
  bonsais: state.bonsai.all,
})

const mapDispatchToProps = {fetchBonsais}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBonsai)
