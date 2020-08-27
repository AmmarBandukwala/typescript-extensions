import { expect } from "chai";
import '../src/index'

describe("String", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("stripHtml", function () {
    const testString: string = "<title>helloworld</title>";
    var result = testString.stripHtml();
    expect(result).equal("helloworld");
  });

  it("isInvalid", function () {
    const testString: string = "";
    var result = testString.isInvalid();
    expect(result).equal(true);
  });
});
