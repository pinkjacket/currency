const expect = require('chai').expect;
const assert = require('assert');
import * as Money from "../src/money.js";

describe ("Money", function() {

  describe("moneyTrade", function(){
    it("should convert dollars to pounds", function(){
      expect(Money.moneyTrade(1, "usdtogbp")).to.equal(.72);
    });
  });

  describe("moneyTrade", function(){
    it("should convert pounds to dollars", function(){
      expect(Money.moneyTrade(1, "gbptousd")).to.equal(1.39);
    });
  });

  describe("moneyTrade", function(){
    it("should convert dollars to euros", function(){
      expect(Money.moneyTrade(1, "usdtoeuro")).to.equal(.81);
    });
  });

})
