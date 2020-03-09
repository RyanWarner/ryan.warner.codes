'use strict'

import Config from './config.js'
import hadouken from '../../images/hadouken.png'

function Fireball(position) {
  console.log('position', position)
  this.x = position.x
  this.y = position.y
  this.angle = position.angle
  this.velocity = position.velocity || Config.LASER_SPEED
  this.index = position.index

  this.container = document.createElement('div')
  this.container.style.width = '80px'
  this.container.style.height = '80px'
  this.container.style.position = 'absolute'
  this.container.style.left = '0px'
  this.container.style.top = '0px'
  this.container.style.webkitJustifyContent = 'center'
  this.container.style.webkitAlignItems = 'flex-end'
  this.container.style.webkitTransform = 'rotate( ' + this.angle + 'deg) translate3d(' + position.x + 'px, ' + position.y + 'px, 0) rotate(' + this.angle + 'deg)'

  this.element = document.createElement('div')
  this.element.style.width = '80px'
  this.element.style.height = '80px'
  this.element.style.backgroundImage = `url(${hadouken})`
  this.element.style.backgroundSize = 'cover'

  this.container.appendChild(this.element)
  window.document.body.appendChild(this.container)
}

Fireball.prototype.doMovement = function () {
  var newX = this.x + (this.velocity * Math.cos(Math.PI / 180 * this.angle))
  var newY = this.y + (this.velocity * Math.sin(Math.PI / 180 * this.angle))

  if (newX >= window.innerWidth - 300 && newY >= window.innerHeight - 300) {
    // Hit!
    window.document.body.removeChild(this.container)
    return "hit"
  }

  if ((newX >= window.innerWidth) || (newX <= 0) || (newY >= window.innerHeight) || (newY <= 0)) {
    window.document.body.removeChild(this.container)
    return "delete"
  }

  this.x = newX
  this.y = newY

  this.container.style.webkitTransform = 'translate3d(' + newX + 'px, ' + newY + 'px, 0) rotate(' + this.angle + 'deg)'
}

export default Fireball
