import heart from '../../images/opacityHeart.svg'
import rainbowHeart from '../../images/rainbow-heart.svg'
import partyCorgi from '../../images/party-corgi.gif'
import ComfyJS from 'comfy.js'
import randomizeSprite from './randomizeSprite'

export default class Hearts {
  static initialize = async () => {
    if (typeof window !== 'undefined') {
      const PIXI = await require('pixi.js-legacy')
      this.PIXI = PIXI
    }
  }

  static start = () => {
    const PIXI = this.PIXI

    const app = new PIXI.Application({
      transparent: true
    })
    app.renderer.view.style.position = 'absolute'
    app.renderer.view.style.display = 'block'
    app.renderer.view.style.zIndex = '2'
    app.renderer.view.style.top = '0'
    app.renderer.autoResize = true
    app.renderer.resize(window.innerWidth, window.innerHeight)

    document.body.appendChild(app.view)

    // Get the texture for rope.
    const starTexture = PIXI.Texture.from(heart)

    const starAmount = 250
    let cameraZ = 0
    const fov = 20
    const baseSpeed = 0.025
    let speed = 0
    let warpSpeed = 0
    const starStretch = 5
    const starBaseSize = 2.5

    const twitchChannel = 'RyanWarnerCodes'
    ComfyJS.Init(twitchChannel)

    // Create the stars
    const stars = []
    for (let i = 0; i < starAmount; i++) {
      const star = {
        sprite: new PIXI.Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0
      }
      star.sprite.anchor.x = 0.5
      star.sprite.anchor.y = 0.7
      randomizeSprite(star, true, cameraZ)
      app.stage.addChild(star.sprite)
      stars.push(star)
    }

    ComfyJS.onCommand = (user, command, message, flags, extra) => {
      console.log('command')
      if (command === 'warpspeed') {
        warpSpeed = 1
      }

      if (command === 'chillspeed') {
        warpSpeed = 0
      }
    }

    // Listen for animate update
    app.ticker.add((delta) => {
      // Simple easing. This should be changed to proper easing function when used for real.
      speed += (warpSpeed - speed) / 20
      cameraZ += delta * 10 * (speed + baseSpeed)
      for (let i = 0; i < starAmount; i++) {
        const star = stars[i]
        if (star.z < cameraZ) randomizeSprite(star, false, cameraZ)

        // Map star 3d position to 2d with really simple projection
        const z = star.z - cameraZ
        star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2
        star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2

        // Calculate star scale & rotation.
        const dxCenter = star.sprite.x - app.renderer.screen.width / 2
        const dyCenter = star.sprite.y - app.renderer.screen.height / 2
        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)
        const distanceScale = Math.max(0, (2000 - z) / 2000)
        star.sprite.scale.x = distanceScale * starBaseSize
        // Star is looking towards center so that y axis is towards center.
        // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
        star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width
        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2
      }
    })
  }
}
