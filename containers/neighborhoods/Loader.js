import {connect} from 'react-redux'

import {getNeighborhoods} from '@/redux/modules/neighborhoods/selectors'

const props = (...args) => ({
  neighborhoods: getNeighborhoods(...args)
})

export default connect(props)
