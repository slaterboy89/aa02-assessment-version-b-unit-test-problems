const assert = require('assert');

const catchZs = require('../problems/04-catch-zs.js');

describe('catchZs()', function() {
  it('should return the total count of "z"s that begin or end a word', function() {

    assert.strictEqual(catchZs("fizz", "buzz"), 2)
    assert.strictEqual(catchZs("time", "to", "go", "to", "the", "zoo"), 1)
    assert.strictEqual(catchZs("Zip", "Zap", "Zop"), 3)
    assert.strictEqual(catchZs("Zzzzzzz"), 2)

  });

  it('should return zero if no words begin or end with "z"', function() {

    assert.strictEqual(catchZs("none", "here"), 0)
    assert.strictEqual(catchZs(), 0)

  });
});
