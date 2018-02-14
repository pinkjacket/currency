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
    it("should convert dollars to pounds", function(){
      expect(Money.moneyTrade(1, "usdtogbp")).to.equal(.72);
    });
  });

  describe("moneyTrade", function(){
    it("should convert euros to dollars", function(){
      expect(Money.moneyTrade(1, "eurotousd")).to.equal(1.24);
    });
  });

  describe("moneyTrade", function(){
    it("should convert dollars to australian dollars", function(){
      expect(Money.moneyTrade(1, "usdtoaud")).to.equal(1.27);
    });
  });

  describe("moneyTrade", function(){
    it("should convert australian dollars to dollars", function(){
      expect(Money.moneyTrade(1, "audtousd")).to.equal(.79);
    });
  });

  describe("moneyTrade", function(){
    it("should convert dollars to canadian dollars", function(){
      expect(Money.moneyTrade(1, "usdtocad")).to.equal(1.26);
    });
  });

  describe("moneyTrade", function(){
    it("should convert canadian dollars to dollars", function(){
      expect(Money.moneyTrade(1, "cadtousd")).to.equal(.79);
    });
  });

  describe("moneyTrade", function(){
    it("should convert euros to pounds", function(){
      expect(Money.moneyTrade(1, "eurotogbp")).to.equal(.89);
    });
  });

  describe("moneyTrade", function(){
    it("should convert pounds to euros", function(){
      expect(Money.moneyTrade(1, "gbptoeuro")).to.equal(1.12);
    });
  });

  describe("moneyTrade", function(){
    it("should convert euros to australian dollars", function(){
      expect(Money.moneyTrade(1, "eurotoaud")).to.equal(1.57);
    });
  });

  describe("moneyTrade", function(){
    it("should convert australian dollars to euros", function(){
      expect(Money.moneyTrade(1, "audtoeuro")).to.equal(.64);
    });
  });

  describe("moneyTrade", function(){
    it("should convert euros to canadian dollars", function(){
      expect(Money.moneyTrade(1, "eurotocad")).to.equal(1.56);
    });
  });

  describe("moneyTrade", function(){
    it("should convert canadian dollars to euros", function(){
      expect(Money.moneyTrade(1, "cadtoeuro")).to.equal(.64);
    });
  });

  describe("moneyTrade", function(){
    it("should convert pounds to australian dollars", function(){
      expect(Money.moneyTrade(1, "gbptoaud")).to.equal(1.76);
    });
  });



})
