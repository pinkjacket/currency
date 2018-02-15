import "bootstrap/dist/css/bootstrap.min.css";
import "./templates/styles.css";
import * as Money from "../src/money.js";

//remember to stitch together inputs so exchange rates can still work

$(document).ready(function(){
  $("#cashForm").submit(function(event){
    event.preventDefault();

    //input into variables here
    let money1 = $("#startingMoney").val();
    let country1 = $("#startingCountry").val();
    let country2 = $("#endingCountry").val();

    let exchange = country1 + "to" + country2;

    //send to backend here
    let moneyreturn = Money.moneyTrade(money1, exchange);
    let moneytyped = Money.moneySign(moneyreturn, country2);
    let hotelstay = Money.hotelCheck(moneyreturn, country2);

    //output here
  })
})
