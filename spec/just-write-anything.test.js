let fs = require('fs')
let assert = require('chai').assert

describe('index.js', () => {
  it('should contain anything @just-write-anything', () => {
    let file = fs.readFileSync('index.js')
    let fileString = file.toString()

    let m = fileString.match(/\w+/g)
    assert(m != null, "You didn't write anything.")
  })
})