const typeTokens = {
  fontFamily: 'Clear Sans, sans-serif'
}

export default {
  light: {
    ...typeTokens,
    background: '#FCFCF9',
    text10: '#313F47',
    text20: '#485D69',
    rule: 'rgba(0, 0, 0, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  },
  dark: {
    ...typeTokens,
    background: '#161E25',
    text10: '#E9F7FF',
    text20: '#C9E2F0',
    rule: 'rgba(255, 255, 255, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  }
}
