import { config, clickConfig } from './emitterOptions'

import bigHeart from '../../images/heartEmitter/bigHeart.png'
import red from '../../images/heartEmitter/red.png'
import orange from '../../images/heartEmitter/orange.png'
import yellow from '../../images/heartEmitter/yellow.png'
import green from '../../images/heartEmitter/green.png'
import blue from '../../images/heartEmitter/blue.png'
import violet from '../../images/heartEmitter/violet.png'

export default class Particles {
  static initialize = async () => {
    if (typeof window !== 'undefined') {
      const PIXI = await require('pixi.js')
      const particles = await require('pixi-particles')
      this.PIXI = PIXI
      this.particles = particles
    }
  }

  static destroy = () => {
    this.app.destroy({ removeView: true })
  }

  static handleHeartClick = () => {
    const { particles, CONTAINER, ART } = this

    const clickEmitter = new particles.Emitter(
      CONTAINER,
      ART,
      clickConfig
    )

    clickEmitter.updateOwnerPos(this.stageWidth / 2, this.stageHeight / 2)
    clickEmitter.playOnceAndDestroy()
  }

  static start = () => {
    const { PIXI, particles } = this

    this.app = new PIXI.Application({
      transparent: true
    })

    const app = this.app

    app.renderer.autoResize = true

    const element = document.querySelector('#heartEmitter')
    this.stageWidth = element.offsetWidth
    this.stageHeight = element.offsetHeight

    app.renderer.resize(this.stageWidth, this.stageHeight)
    element.appendChild(app.view)

    const imagePaths = [red, orange, yellow, green, blue, violet]

    let emitter = null

    // Calculate the current time
    let elapsed = Date.now()

    app.ticker.add(() => {
      const now = Date.now()
      if (emitter) { emitter.update((now - elapsed) * 0.001) }
      elapsed = now
    })

    // Preload the particle images and create PIXI textures from it
    const loader = PIXI.Loader.shared

    if (!this.loaded) {
      for (let i = 0; i < imagePaths.length; ++i) {
        loader.add('img' + i, imagePaths[i])
      }
    }

    loader.load(() => {
      this.loaded = true
      const art = []
      for (let i = 0; i < imagePaths.length; ++i) {
        art.push(PIXI.Texture.from(imagePaths[i]))
      }
      this.ART = art

      // Create the new emitter and attach it to the stage
      const emitterContainer = new PIXI.Container({ sortableChildren: true })
      this.CONTAINER = emitterContainer

      // Add clickable heart
      const greenHeart = PIXI.Texture.from(bigHeart)
      const clickableHeart = new PIXI.Sprite(greenHeart)

      clickableHeart.width = 268
      clickableHeart.height = 245
      clickableHeart.interactive = true
      clickableHeart.x = app.renderer.screen.width / 2 - (clickableHeart.width / 2)
      clickableHeart.y = app.renderer.screen.height / 2 - (clickableHeart.height / 2)
      clickableHeart.zIndex = 2

      app.stage.addChild(emitterContainer)

      emitter = new particles.Emitter(
        emitterContainer,
        art,
        config
      )

      // Center on the stage
      emitter.updateOwnerPos(this.stageWidth / 2, this.stageHeight / 2)

      window.addEventListener('resize', () => {
        this.stageWidth = element.offsetWidth
        this.stageHeight = element.offsetHeight
        emitter.updateOwnerPos(this.stageWidth / 2, this.stageHeight / 2)
      })
    })
  }
}
