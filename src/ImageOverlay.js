// @flow

import { imageOverlay } from 'leaflet'
import { PropTypes } from 'react'

import boundsType from './types/bounds'
import childrenType from './types/children'
import MapLayer from './MapLayer'

export default class ImageOverlay extends MapLayer {
  static propTypes = {
    attribution: PropTypes.string,
    bounds: boundsType.isRequired,
    children: childrenType,
    opacity: PropTypes.number,
    url: PropTypes.string.isRequired,
  }

  createLeafletElement (props: Object): Object {
    const { bounds, url, ...options } = props
    return imageOverlay(url, bounds, this.getOptions(options))
  }

  updateLeafletElement (fromProps: Object, toProps: Object) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url)
    }
    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity)
    }
  }

  render (): null {
    return null
  }
}
