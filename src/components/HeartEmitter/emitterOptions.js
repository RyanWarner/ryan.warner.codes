const config = {
  alpha: {
    start: 1,
    end: 0
  },
  scale: {
    start: 1,
    end: 0.01,
    minimumScaleMultiplier: 1
  },
  speed: {
    start: 30,
    end: 1,
    minimumSpeedMultiplier: 1
  },
  acceleration: {
    x: 0,
    y: 0
  },
  maxSpeed: 0,
  startRotation: {
    min: 0,
    max: 360
  },
  noRotation: false,
  rotationSpeed: {
    min: -25,
    max: 25
  },
  lifetime: {
    min: 0.2,
    max: 20
  },
  blendMode: 'normal',
  frequency: 0.15,
  emitterLifetime: -1,
  maxParticles: 500,
  pos: {
    x: 0,
    y: 0
  },
  addAtBack: true,
  spawnType: 'burst',
  particlesPerWave: 1,
  particleSpacing: 0,
  angleStart: 0
}

const clickConfig = {
  ...config,
  emitterLifetime: 0.5,
  frequency: 0.01,
  lifetime: {
    min: 1,
    max: 5
  },
  speed: {
    start: 100,
    end: 1,
    minimumSpeedMultiplier: 1
  },
  spawnType: 'ring',
  spawnCircle: {
    x: 0,
    y: 0,
    r: 40,
    minR: 40
  }
}

const mobileClickConfig = {
  ...config,
  emitterLifetime: 0.5,
  frequency: 0.01,
  lifetime: {
    min: 1,
    max: 5
  },
  speed: {
    start: 70,
    end: 1,
    minimumSpeedMultiplier: 1
  },
  spawnType: 'ring',
  spawnCircle: {
    x: 0,
    y: 0,
    r: 18,
    minR: 18
  }
}

const mobileConfig = {
  ...config,
  lifetime: {
    min: 0.2,
    max: 10
  }
}

export { config, clickConfig, mobileConfig, mobileClickConfig }
