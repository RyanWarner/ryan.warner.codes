// const paths = require('../config/paths')
const argv = require('yargs').argv
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const chalk = require('chalk')
const chalkColor = '#3D87C9'

const gitBranchToFirebaseMap = {
  production: 'production',
  staging: 'default'
}

const firebaseProject = gitBranchToFirebaseMap[argv.branch]

const { FIREBASE_DEPLOY_TOKEN } = process.env
const token = FIREBASE_DEPLOY_TOKEN ? `--token ${FIREBASE_DEPLOY_TOKEN}` : ''
const firebase = './node_modules/.bin/firebase'

const DEPLOY_ENV = firebaseProject || process.argv[2] || process.env.DEPLOY_ENV
// require('dotenv').config({ path: `${paths.dotenv}.${DEPLOY_ENV}` })

const firebaseUse = async () => {
  const message = `Using Firebase project: ${DEPLOY_ENV}`
  console.log(chalk.hex(chalkColor).bold(message))

  const { stdout, stderr } = await exec(`${firebase} use ${DEPLOY_ENV} ${token}`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const firebaseDeploy = async () => {
  const message = 'Deploying to Firebase'
  console.log(chalk.hex(chalkColor).bold(message))

  try {
    const deployTargets = 'functions,hosting'

    const { stdout, stderr } = await exec(`${firebase} deploy --only ${deployTargets} ${token}`)
    if (stdout) console.log('stdout', stdout)
    if (stderr) console.log('stderr', stderr)
  } catch (error) {
    console.log(error.stdout)
    console.log(error.stderr)
    throw new Error('Error deploying Firebase: ', error)
  }
}

const deploy = async () => {
  const message = `Deploying to: ${DEPLOY_ENV}`
  console.log(chalk.hex(chalkColor).bold(message))

  try {
    await firebaseUse()
    await firebaseDeploy()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

deploy()
