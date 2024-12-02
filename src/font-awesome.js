import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faMagnifyingGlass,
  faThumbsUp,
  faPlay,
  faFire,
  faFolderOpen
} from '@fortawesome/free-solid-svg-icons'

import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(faMagnifyingGlass, faThumbsUp, faPlay, faStar, faFire, faFolderOpen)

export { FontAwesomeIcon }
