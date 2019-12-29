import amplitude from './amplitude'
import google from './google'

export const analyticsEventTypes = {
  pageView: 'page.view',
  navClick: 'nav.click',
  buttonClick: 'button.click'
}

export default class Analytics {
  static initialize = () => {
    google.initialize()
    return amplitude.initialize()
  }

  static pageView = ({ pathname }) => {
    amplitude.pageView({ pathname })
    google.pageView({ pathname })
  }

  static event = (event) => {
    amplitude.event(event)
    google.event(event)
  }

  static setUserId = ({ userId }) => {
    google.setUserId({ userId })
  }
}
