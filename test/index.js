/**
 * Imports
 */

import test from 'tape'
import readRegion from '../src'

process.env.HOME = __dirname

/**
 * Tests
 */

test('should grab region from .aws/config', (t) => {
  t.plan(1)
  t.deepEqual(readRegion(), {region: 'us-west-1'})
})

test('should use profile to grab region', (t) => {
  t.plan(1)

  process.env.AWS_PROFILE = 'josh'

  t.deepEqual(readRegion(), {region: 'us-east-1'})
})

test('should grab region from environment if set', (t) => {
  t.plan(1)

  process.env.AWS_REGION = 'us-west-2'

  t.deepEqual(readRegion(), {region: 'us-west-2'})
})
