import { Colors } from 'styles'

export default {
  plain: {
    backgroundColor: Colors.blue10,
    color: Colors.text10
  },
  styles: [
  //   {
  //   types: ['keyword'],
  //   style: {
  //     color: Colors.rainbowViolet
  //   }
  // },
  // {
  //   types: ['string'],
  //   style: {
  //     color: Colors.glow10
  //   }
  // },
  {
    types: ['tag'],
    style: {
      color: Colors.rainbowRed
    }
  }, {
    types: ['comment'],
    style: {
      color: Colors.blue50
    }
  }]
}
