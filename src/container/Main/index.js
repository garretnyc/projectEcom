import { connect } from 'react-redux'
import Main from '../../component/Main'
import { addToCart  } from '../../actions'

export default connect(null, { addToCart })(Main)