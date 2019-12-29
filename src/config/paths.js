const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
  dotenv: resolveApp('src/config/.env'),
  src: resolveApp('src'),
  nodeModules: resolveApp('node_modules')
}

module.exports = paths
