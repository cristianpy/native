import {StyleSheet} from 'react-native'

import * as colors from '@/assets/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  modal: {
    width: '100%',
    height: '100%'
  },
  header: {
    borderColor: colors.gray.lighter,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  },
  heading: {
    padding: 15
  },
  h1: {
    fontSize: 20,
    color: colors.gray.dark,
    marginBottom: 5
  },
  h2: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray.medium
  },
  map: {
    width: '100%',
    height: 300
  }
})

export const markerStyles = StyleSheet.create({
  body: {
    width: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  tip: {
    backgroundColor: 'white'
  }
})

export const markerColor = colors.red.medium
