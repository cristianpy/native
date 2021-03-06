import {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

import {getNeighborhoods} from '@/redux/modules/neighborhoods/selectors'
import {Modal, Body, Footer} from '@/components/layout'
import Button from '@/components/shared/Button'
import Text from '@/components/shared/Text'
import Icon from '@/components/shared/Icon'
import styles, {validTextColor, invalidTextColor} from './styles'

class ListingCreatedScreen extends Component {
  static defaultProps = {
    params: {}
  }

  static screenName = 'listingForm.Created'

  get isValidAddress() {
    const {
      neighborhoods,
      params: {address}
    } = this.props
    return (
      address.state === 'RJ' &&
      neighborhoods.findIndex((value) => value === address.neighborhood) !== -1
    )
  }

  renderMessage() {
    const valid = this.isValidAddress
    return (
      <View style={styles.container}>
        <Icon
          style={styles.icon}
          name={valid ? 'check-circle' : 'exclamation-triangle'}
          size={16}
          color={valid ? validTextColor : invalidTextColor}
        />
        <View style={styles.body}>
          <Text
            style={[
              styles.text,
              {
                fontWeight: '500',
                color: valid ? validTextColor : invalidTextColor
              }
            ]}
          >
            {valid
              ? 'Seu imóvel foi cadastrado com sucesso e está dentro da região que a EmCasa atende.'
              : 'Seu imóvel foi cadastrado com sucesso. Por enquanto, a EmCasa não está trabalhando na área do seu imóvel.'}
          </Text>
          <Text style={styles.text}>
            {valid
              ? 'Agora é só aguardar que a nossa equipe entrará em contato.'
              : 'Mas não se preocupe que entraremos em contato assim que chegarmos aí.'}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const {onDismiss} = this.props
    return (
      <Modal testID="@listingForm.Created">
        <Modal.Header inline onDismiss={onDismiss}>
          Imóvel cadastrado
        </Modal.Header>
        <Body style={{padding: 15}}>{this.renderMessage()}</Body>
        <Footer style={{padding: 15}}>
          <Button color="green" onPress={onDismiss}>
            Continuar
          </Button>
        </Footer>
      </Modal>
    )
  }
}

export default connect(
  (state) => ({neighborhoods: getNeighborhoods(state)}),
  null,
  null,
  {withRef: true}
)(ListingCreatedScreen)
