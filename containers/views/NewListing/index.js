import {createStackNavigator} from 'react-navigation'

import * as address from './Address'
import * as properties from './Properties'

export default class AddressFormScreen extends Component {
  onSubmit = (value) => {
    const {navigation} = this.props
    navigation.navigate(
      'properties',
      Object.assign({}, navigation.state.params, value)
    )
  }

  render() {
    return (
      <Shell title="Endereço">
        <Address onSubmit={this.onSubmit} />
      </Shell>
    )
  }
)
