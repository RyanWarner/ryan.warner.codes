import { analyticsEventTypes as types } from './analytics'

const amplitudeApiKey = process.env.AMPLITUDE_API_KEY

export default class AmplitudeAnalytics {
  static initialize = async () => {
    if (typeof window !== 'undefined') {
      const amplitude = await require('amplitude-js')
      this.Amplitude = amplitude.getInstance()
      const options = { includeReferrer: true, includeUtm: true }
      this.Amplitude.init(amplitudeApiKey, null, options)
    }
  }

  static pageView = ({ pathname, props }) => {
    const timestamp = Date.now()
    const eventProps = {
      pathname,
      timestamp,
      ...props
    }

    this.Amplitude.logEventWithTimestamp(types.pageView, eventProps, timestamp)
  }

  static event = ({ eventType, pathname, props }) => {
    const timestamp = Date.now()
    const eventProps = {
      pathname,
      timestamp,
      ...props
    }
    this.Amplitude.logEventWithTimestamp(eventType, eventProps, timestamp)
  }
}
