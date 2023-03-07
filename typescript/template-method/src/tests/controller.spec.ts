import { describe } from "mocha";
import chaiAsPromised from 'chai-as-promised';
import { assert } from "chai";
import { Controller } from "../app/controller";

var chai = require('chai');

chai.use(chaiAsPromised);
const expect = chai.expect;

/*------------------------------------------*/

describe('Controller Testing the entryPointEven', () => {
  it('should pass', () => {
     const even = new Controller()
     assert.equal(even.entryPointEven(2,5), "Valid");
  });
});


describe('Controller Testing the entryPointEven failures', () => {
  let even: Controller;

  beforeEach(() => {
    even = new Controller();
  });

  it('Zero number', () => {
    const even = new Controller()
    expect(() => even.entryPointEven(0,0)).to.throw(Error, "The number must be greater than 0");

 });

  it('Even number', () => {
    const even = new Controller()
    expect(() => even.entryPointEven(3,20)).to.throw(Error, "The number must be even");

 });
  it('Number too high', () => {
    const result = even.entryPointEven(10,100);
    expect(result).to.equal("Invalid");
 
  });
});

describe('Testing the entryPointOdd', () => {
    it('should pass', () => {
       const odd = new Controller()
       assert.equal(odd.entryPointOdd(3,5), "Valid");
    });
  });
  
  
  describe('Testing the entryPointOdd failures', () => {
    let odd: Controller;
  
    beforeEach(() => {
      odd = new Controller();
    });
  
    it('Zero number', () => {
      const odd = new Controller()
      expect(() => odd.entryPointOdd(0,0)).to.throw(Error, "The number must be greater than 0");
  
   });
  
    it('Even number', () => {
      const odd = new Controller()
      expect(() => odd.entryPointOdd(4,20)).to.throw(Error, "The number must be odd");
  
   });
    it('Number too high', () => {
      const result = odd.entryPointOdd(13,100);
      expect(result).to.equal("Invalid");
   
    });
  });

  describe('Testing the entryPointDivision', () => {
    it('should pass', () => {
       const odd = new Controller()
       assert.equal(odd.entryPointDivision(3,5), "Valid");
    });
  });
  
  
  describe('Testing the entryPointDivision failures', () => {
    let odd: Controller;
  
    beforeEach(() => {
      odd = new Controller();
    });
  
    it('Zero number', () => {
      const odd = new Controller()
      expect(() => odd.entryPointDivision(0,0)).to.throw(Error, "The number must be greater than 0");
  
   });
  
    it('Division by zero', () => {
      const result = odd.entryPointDivision(0,100);
      expect(result).to.equal("Invalid");
   
    });
  });