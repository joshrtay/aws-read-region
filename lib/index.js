/**
 * Imports
 */

const path = require('path')
const fs = require('mz/fs')
const ini = require('ini')
const co = require('co')

/**
 * Vars
 */

const env = process.env

/**
 * Exports
 */

module.exports = co.wrap(readRegion)

/**
 * read-region
 */

function * readRegion () {
  const config = {}

  // environment vars take precedence
  config.region = env.AWS_REGION || env.AMAZON_REGION
  if (config.region) return config

  // grab region from ~/.aws/config
  const profile = env.AWS_PROFILE || 'default'
  const awsDir = path.join(env.HOME, '.aws')

  try {
    var configFile = yield fs.readFile(path.join(awsDir, 'config'), 'utf-8')
  } catch (e) {
    throw new Error("Can't read region, it has not been set in enviornment and ~/.aws/config does not exist.")
  }

  let dotAWSConfig = ini.parse(configFile)[profile]

  if (!dotAWSConfig) {
    throw new Error("Can't read region, no ~/.aws/config for profile: " + profile)
  }

  config.region = dotAWSConfig.region

  if (!config.region) {
    throw new Error("Can't read region, no region specified in ~/.aws/config for profile: " + profile)
  }

  return config
}
