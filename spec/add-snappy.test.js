let fs = require('fs')
let assert = require('chai').assert

describe('index.js', () => {
  it('should contain the word snappy @add-snappy', () => {
    let file = fs.readFileSync('index.js')
    let fileString = file.toString()

    let m = fileString.match(/snappy/g)
    assert(m != null, "You didn't write snappy.")
  })
})