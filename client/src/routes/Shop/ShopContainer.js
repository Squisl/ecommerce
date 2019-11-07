import {connect} from "react-redux"
import Shop from "./Shop"
import {fetchBonsais} from "../../modules/bonsai"

const mapStateToProps = state => ({
  bonsais: state.bonsai.all,
})

const mapDispatchToProps = {fetchBonsais}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shop)
