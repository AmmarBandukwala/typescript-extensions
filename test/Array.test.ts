import { expect } from "chai";
import "../src/Array";

describe("Array", function () {
  
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  it("median", function () {
    const ds: Array<number> = [1, 2, 2, 3, 3, 3, 4, 5, 6];
    var result: number = ds.median();
    expect(result).equal(3);
  });

  it("mode", function () {
    const ds: Array<number> = [1, 2, 2, 3, 3, 3, 4, 5, 6];
    var result: number = ds.mode();
    expect(result).equal(3);
  });

  it("sum", function () {
    const ds: Array<number> = [1, 2, 2, 3, 3, 3, 4, 5, 6];
    var result: number = ds.sum();    
    expect(result).equal(29);
  });

  it("mean", function () {
    const ds: Array<number> = [1, 2, 2, 3, 3, 3, 4, 5, 6];
    var result: number = ds.mean();
    var compare = ds.sum() / ds.length;
    expect(result).equal(compare);
  });
});
