import ReactGA from 'react-ga'

const gaTrackingId = process.env.GOOGLE_ANALYTICS_TRACKING_ID

export default class GoogleAnalytics {
  static initialize = () => {
    ReactGA.initialize(gaTrackingId, { debug: false })
  }

  static pageView = ({ pathname }) => {
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }

  static event = ({ category, action, label }) => {
    ReactGA.event({ category, action, label })
  }

  static setUserId = ({ userId }) => {
    ReactGA.set({ userId })
  }
}
