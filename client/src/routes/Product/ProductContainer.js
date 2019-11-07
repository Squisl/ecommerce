import {connect} from "react-redux"
import Product from "./Product"
import {fetchBonsai} from "../../modules/bonsai"

const mapStateToProps = state => ({
  bonsai: state.bonsai,
})

const mapDispatchToProps = {fetchBonsai}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product)
