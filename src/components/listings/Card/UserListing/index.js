import {View, Dimensions} from 'react-native'

import * as colors from '@/assets/colors'
import Text from '@/components/shared/Text'
import Icon from '@/components/shared/Icon'
import Image from '@/components/listings/Image'
import Touchable from '@/components/shared/Touchable'
import styles from './styles'

function Button({title, icon, onPress, color: colorKey}) {
  return (
    <View style={styles.buttonContainer}>
      <Touchable onPress={onPress}>
        {({active}) => (
          <View
            style={[
              styles.button,
              {
                borderColor: active
                  ? colors[colorKey].medium
                  : colors.gray.lighter
              },
              active && [styles.buttonActive]
            ]}
          >
            <Icon
              style={styles.buttonIcon}
              color={colors[colorKey].medium}
              name={icon}
              size={22}
            />
            <Text
              style={[
                styles.buttonText,
                {color: active ? colors[colorKey].medium : colors.gray.medium}
              ]}
            >
              {title}
            </Text>
          </View>
        )}
      </Touchable>
    </View>
  )
}

export default function UserListingCard({
  style,
  address,
  images,
  width,
  testUniqueID,
  onEdit,
  onViewStats,
  onViewListing
}) {
  const image = images[0] || {}
  const padding = 30
  const cellSpacing = 10
  const imageSize = {
    width: (width - padding * 2) / 3 - cellSpacing,
    height: ((width - padding * 2) / 3 - cellSpacing) * 0.64
  }

  return (
    <View style={[styles.container, style]}>
      <View testID={`listing_card(${testUniqueID})`}>
        <View style={styles.header}>
          <View style={styles.info}>
            <Text style={styles.neighborhood}>
              {address.neighborhood.toUpperCase()}
            </Text>
            <Text style={styles.street} numberOfLines={2} ellipsizeMode="tail">
              {address.street}, {address.streetNumber}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image thumbnail style={styles.image} {...image} {...imageSize} />
          </View>
        </View>
        <View style={[styles.body, styles.row]}>
          <Button
            onPress={onViewListing}
            title="Visualizar"
            icon="eye"
            color="orange"
          />
          <View style={{margin: cellSpacing / 2}} />
          <Button onPress={onEdit} title="Editar" icon="edit" color="red" />
          <View style={{margin: cellSpacing / 2}} />
          <Button
            onPress={onViewStats}
            title="Estatísticas"
            icon="chart-bar"
            color="green"
          />
        </View>
      </View>
    </View>
  )
}

UserListingCard.defaultProps = {
  testUniqueID: '',
  get width() {
    return Dimensions.get('window').width
  }
}
