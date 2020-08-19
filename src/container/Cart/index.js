import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Cart from '../../component/Cart'


const mapStateToProps = state => ({
    cartCount: state.CartItems,
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators (Actions,dispatch)
})


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Cart)