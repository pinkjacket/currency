import { xrate } from "./exchangerates.js";
import { symbol } from "./symbol.js";
import { hotelrate } from "./hotelrates.js";

export function moneyTrade(amount, conversion){
  let firstreturn = amount * xrate[conversion];
  let rounded = Math.round((firstreturn + 0.00001) * 100)/100;
  return rounded;
}

export function moneySign(amount, csign){
  let newmoney = symbol[csign] + amount.toFixed();
  return newmoney;
}

export function hotelCheck(amount, cashtype){
  let nights = amount / hotelrate[cashtype];
  let nightsrounded = Math.floor(nights);
  return nightsrounded;
}
