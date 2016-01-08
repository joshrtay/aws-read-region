/**
 * Imports
 */

import path from 'path'
import fs from 'fs'
import ini from 'ini'

/**
 * Vars
 */

let env = process.env

/**
 * read-region
 */

function readRegion () {
  let config = {}

  // environment vars take precedence
  config.region = env.AWS_REGION || env.AMAZON_REGION
  if (config.region) return config

  // grab region from ~/.aws/config
  let profile = env.AWS_PROFILE || 'default'
  let awsDir = path.join(env.HOME, '.aws')

  try {
    var configFile = fs.readFileSync(path.join(awsDir, 'config'), 'utf-8')
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

/**
 * Exports
 */

export default readRegion
