const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

describe("SmokeTest", function () {
  it("checks equality", function () {
    expect(true).to.be.true;
  });
});
