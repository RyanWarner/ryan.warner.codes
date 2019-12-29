# Analytics

This boilerplate supports [Amplitude](https://amplitude.com/) and [Google Analytics](https://analytics.google.com/analytics/web/) out of the box.

## Setup

### Amplitude

1. Create an Amplitude account
1. Set the `AMPLITUDE_KEY` environment variable

### Google Analytics

1. Create a Google Analytics account
1. Set the `GOOGLE_ANALYTICS_TRACKING_ID` environment variable

## Usage

```js
import analytics, { analyticsEventTypes } from 'app/analytics'

analytics.event(analyticsEventTypes.buttonClick)
```

See the analytics class `src/analytics/analytics.js`
