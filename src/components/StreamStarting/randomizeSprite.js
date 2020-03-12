export default (star, initial, cameraZ) => {
  star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000

  // Calculate star positions with radial random
  // coordinate so no sprite hits the camera.
  const deg = Math.random() * Math.PI * 2
  const distance = Math.random() * 50 + 1
  star.x = Math.cos(deg) * distance
  star.y = Math.sin(deg) * distance
}
