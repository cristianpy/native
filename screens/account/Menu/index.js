import {PureComponent} from 'react'
import {Platform} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {connect} from 'react-redux'

import composeWithRef from '@/lib/composeWithRef'
import {signOut} from '@/redux/modules/auth'
import {withUserListings} from '@/graphql/modules/user/containers'
import {Shell, Body, Footer} from '@/components/layout'
import BottomTabs from '@/screens/containers/BottomTabs'
import Menu from '@/components/account/Menu'
import EditProfileScreen from '../EditProfile'
import HeaderScreen from './Header'

class AccountMenuScreen extends PureComponent {
  static screenName = 'account.Menu'

  static options = {
    topBar: {
      component: {name: HeaderScreen.screenName},
      title: {text: 'Perfil'}
    },
    bottomTab: {
      title: 'Perfil'
    }
  }

  navigateTo = (component) => () => {
    Navigation.push(this.props.componentId, {component})
  }

  onSignOut = () => {
    const {signOut} = this.props
    signOut()
    Navigation.popToRoot(this.props.componentId)
  }

  render() {
    const {userListings} = this.props
    return (
      <Shell style={{marginTop: Platform.OS === 'ios' ? 20 : 0}}>
        <Body>
          <Menu
            listingsCount={!userListings.loading && userListings.data.length}
            onSignOut={this.onSignOut}
            onEditProfile={this.navigateTo({
              id: 'edit_profile',
              name: EditProfileScreen.screenName
            })}
            onViewListings={this.navigateTo({
              id: 'user_listings',
              name: null
            })}
          />
        </Body>
        <Footer>
          <BottomTabs />
        </Footer>
      </Shell>
    )
  }
}

export default composeWithRef(connect(null, {signOut}), withUserListings)(
  AccountMenuScreen
)
