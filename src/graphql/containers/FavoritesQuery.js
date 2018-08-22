import _ from 'lodash'
import {Query} from 'react-apollo'
import {connect} from 'react-redux'
import {compose, mapProps} from 'recompose'

import {
  GET_FAVORITE_LISTINGS_IDS,
  GET_FAVORITE_LISTINGS
} from '@/graphql/modules/user/queries'
import {getToken} from '@/redux/modules/auth/selectors'

const props = (state) => ({jwt: getToken(state)})

const FavoritesQuery = connect(props)(({children, jwt, query}) => {
  const options = {cache: !jwt}
  return (
    <Query fetchPolicy="cache-and-network" query={query(options)}>
      {children}
    </Query>
  )
})

export default FavoritesQuery

const createFavoritesContainer = (query, getProps) => (Target) => (props) => (
  <FavoritesQuery query={query}>
    {(response) => <Target {...props} {...getProps(response)} />}
  </FavoritesQuery>
)

export const withFavoriteListings = createFavoritesContainer(
  GET_FAVORITE_LISTINGS,
  (response) => ({
    favorites: {
      data: !_.isEmpty(response.data)
        ? response.data.userProfile.favorites
        : [],
      loading: response.loading
    }
  })
)

export const withFavoriteListingIDs = createFavoritesContainer(
  GET_FAVORITE_LISTINGS_IDS,
  (response) => ({
    favorites: {
      data: !_.isEmpty(response.data)
        ? response.data.userProfile.favorites
        : [],
      loading: response.loading
    }
  })
)

export const withFavoriteListingByID = compose(
  withFavoriteListingIDs,
  mapProps(({favorites, ...props}) => ({
    ...props,
    favorite:
      favorites.data &&
      favorites.data.findIndex((fav) => fav.id == props.id) !== -1
  }))
)
