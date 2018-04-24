import {Component} from 'react'

import Header from '@/components/listings/Search/ResultsHeader'

export default class ResultsHeaderApp extends Component {
  onPress = () => {
    const {navigation} = this.props
    const {params, key} = navigation.state
    navigation.navigate('search', {...params, parent: key})
  }

  render() {
    return <Header onPress={this.onPress} />
  }
}
