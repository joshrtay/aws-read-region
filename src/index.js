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
  let dotAWSConfig = ini.parse(fs.readFileSync(path.join(awsDir, 'config'), 'utf-8'))[profile]
  config.region = dotAWSConfig.region
  return config
}

/**
 * Exports
 */

export default readRegion
