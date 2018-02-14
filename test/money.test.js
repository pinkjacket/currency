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

  describe("moneyTrade", function(){
    it("should convert australian dollars to pounds", function(){
      expect(Money.moneyTrade(1, "audtogbp")).to.equal(.57);
    });
  });

  describe("moneyTrade", function(){
    it("should convert pounds to canadian dollars", function(){
      expect(Money.moneyTrade(1, "gbptocad")).to.equal(1.75);
    });
  });

  describe("moneyTrade", function(){
    it("should convert canadian dollars to pounds", function(){
      expect(Money.moneyTrade(1, "cadtogbp")).to.equal(.57);
    });
  });

  describe("moneyTrade", function(){
    it("should convert australian dollars to canadian dollars", function(){
      expect(Money.moneyTrade(1, "audtocad")).to.equal(.99);
    });
  });

  describe("moneyTrade", function(){
    it("should convert canadian dollars to australian dollars", function(){
      expect(Money.moneyTrade(1, "cadtoaud")).to.equal(1.01);
    });
  });

  describe("moneySign", function(){
    it("should attach a dollar sign to a number that has been converted to dollars", function(){
      expect(Money.moneySign(1, "dollar")).to.equal("$1");
    });
  });

  describe("moneySign", function(){
    it("should attach a pound sign to a number that has been converted to pounds", function(){
      expect(Money.moneySign(1, "pound")).to.equal("£1");
    });
  });

  describe("moneySign", function(){
    it("should attach a euro sign to a number that has been converted to euros", function(){
      expect(Money.moneySign(1, "euro")).to.equal("€1");
    });
  });

  describe("moneySign", function(){
    it("should attach an australian dollar sign to a number that has been converted to australian dollars", function(){
      expect(Money.moneySign(1, "australian")).to.equal("A$1");
    });
  });

  describe("moneySign", function(){
    it("should attach a canadian dollar sign to a number that has been converted to canadian dollars", function(){
      expect(Money.moneySign(1, "canadian")).to.equal("C$1");
    });
  });

  describe("hotelCheck", function(){
    it("should check how many nights one can stay at an $89-equivalent hotel with the converted sum, for dollars", function(){
      expect(Money.hotelCheck(200, "usd")).to.equal(2);
    });
  });

  describe("hotelCheck", function(){
    it("should check how many nights one can stay at an $89-equivalent hotel with the converted sum, for pounds", function(){
      expect(Money.hotelCheck(200, "gbp")).to.equal(3);
    });
  });

  describe("hotelCheck", function(){
    it("should check how many nights one can stay at an $89-equivalent hotel with the converted sum, for euros", function(){
      expect(Money.hotelCheck(200, "euro")).to.equal(2);
    });
  });

})
