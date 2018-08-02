function checkCashRegister(price, cash, cid) {
  
  console.log("New Test-----------------------------------------------------" + price + " " + cash);
  // Here is your change, ma'am.
  let owed = cash - price;
  
  var penny = .01;
  var nickle = .05;
  var dime = .1;
  var quarter = .25;
  var dollar = 1;
  var five = 5;
  var ten = 10;
  var twenty = 20;
  var onehundred = 100;
  
  [[,pennies], [,nickles], [,dimes],[,quarters],[,dollars],[,fives],[,tens],[,twenties],[,onehundreds]] = cid;
  
  pennies = pennies / .01;
  nickles = Math.round((nickles / .05) * 10) / 10;
  dimes = dimes /.1;
  quarters = quarters /.25;
  dollars = dollars;
  fives = fives / 5;
  tens = tens / 10;
  twenties = twenties / 20;
  onehundreds = onehundreds / 100;

  
  
  let changeDrawer = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKLE", 0], ["PENNY", 0]];
  [changeHundreds, changeTwenties, changeTens, changeFives, changeOnes, changeQuarters, changeDimes, changeNickles, changePennies] = changeDrawer;
  
  console.log(pennies + " " + nickles + " " + dimes + " " + quarters + " " + dollars + " " + tens + " " + twenties + " " + onehundreds)
  while (owed > 0) {
    console.log("Owed" + owed);
    console.log(Math.round(owed - quarter));
    
    owed = Math.round((owed * 100)) / 100;
    switch(true) {
        case ((owed - onehundred >= 0) && (onehundreds > 0)):
           Math.round((owed-= onehundred) * 100) /100 ;
           onehundreds -= 1;
           changeHundreds[1] += 100;
           break;
        case ((owed - twenty >= 0) && (twenties > 0)):
           Math.round((owed-= twenty) * 100) / 100;
           twenties -= 1;
           changeTens[1] += 20;
           break;
        case ((owed - ten >= 0) && (tens > 0)):
           Math.round((owed-= ten) * 100 ) / 100;
           tens -= 1;
           changeTens[1] += 10;
           break;
        case ((owed - five >= 0) && (fives > 0)):
           Math.round((owed-= five) * 100 ) / 100;
           fives -= 1;
           changeFives[1] += 5;
           break;
        case ((owed - dollar >= 0) && (dollars > 0)):
           Math.round((owed-= dollar) * 100) / 100;
           dollars -= 1;
           changeOnes[1] += 1;
           break;
        case ((Math.round((owed - quarter) * 100) / 100) >= 0) && (quarters > 0):
           owed = Math.round((owed - quarter)*100) /100;
           quarters -= 1;
           Math.round((changeQuarters[1] += quarter) * 100) / 100;
           break;
        case ((Math.round((owed - dime) * 100) / 100) >= 0) && (dimes > 0):
           owed = Math.round((owed - dime)*100) /100;
           dimes -= 1;
           Math.round((changeDimes[1] += .1) * 100) / 100;
           break;
        case ((Math.round((owed - nickle) * 100) / 100) >= 0) && (nickles > 0):
           owed = Math.round((owed - nickle)*100) /100;
           nickles -= 1;
           Math.round((changeNickles[1] += .05) * 100) / 100;
           
           break;
        case ((Math.round((owed - penny) * 100) / 100) >= 0) && (pennies > 0):
           Math.round((owed -= penny) * 100) / 100;
           pennies -= 1;
           Math.round((changePennies[1] += .01) * 100) / 100;;
         
           break;
    }
  }
  console.log(changeDrawer);
 }

  
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
