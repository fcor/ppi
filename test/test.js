const expect = require('chai').expect;
const ppi = require('..').default;

describe('#dpi', function () {
  it('Resolution: 1600×900 Diagonal:13.3', function () {
    const dpi = ppi(1600, 900, 13.3);
    expect(dpi).to.equal(138);
  })

  it('Resolution: 1920×1080 Diagonal:11.6', function () {
    const dpi = ppi(1920, 1080, 11.6);
    expect(dpi).to.equal(190);
  })
})
