const SKU_FEEDBACK = process.env.SKU_FEEDBACK

export default {
  small: {
    title: 'Indie devs+',
    amount: '297',
    sku: SKU_FEEDBACK,
    features: [
      '60 minute video chat',
      'Actionable written notes',
      'Discord invite',
      'Livestream shoutout'
    ],
    cta: 'Buy Feedback'
  },
  medium: {
    title: 'Indie devs',
    amount: '197',
    sku: SKU_FEEDBACK,
    features: [
      'Screencast video',
      'Actionable written notes',
      'Discord invite',
      'Livestream shoutout'
    ],
    cta: 'Buy Feedback'
  },
  large: {
    title: 'Businesses',
    amount: 'Custom',
    features: [
      'Ongoing feedback',
      'Video calls',
      'Actionable written notes',
      'Discord invite'
    ],
    cta: 'Contact me'
  }
}
