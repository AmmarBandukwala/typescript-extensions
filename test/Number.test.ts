import { expect } from "chai";
import '../src/Number'

describe("Number", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("thousandsSeperator", function () {
    const numericalValue = 1000000
    var displayValue = numericalValue.thousandsSeperator();
    expect(displayValue).equal('1,000,000');
  });
});
