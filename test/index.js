/**
 * Imports
 */

const test = require('tape')
const readRegion = require('..')
const co = require('co')

process.env.HOME = __dirname

/**
 * Tests
 */

test('should grab region from .aws/config', co.wrap(function * (t) {
  t.plan(1)
  t.deepEqual(yield readRegion(), {region: 'us-west-1'})
}))

test('should use profile to grab region', co.wrap(function * (t) {
  t.plan(1)

  process.env.AWS_PROFILE = 'josh'

  t.deepEqual(yield readRegion(), {region: 'us-east-1'})
}))

test('should grab region from environment if set', co.wrap(function * (t) {
  t.plan(1)

  process.env.AWS_REGION = 'us-west-2'

  t.deepEqual(yield readRegion(), {region: 'us-west-2'})
}))
