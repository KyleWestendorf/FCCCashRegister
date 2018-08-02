function checkCashRegister(price, cash, cid) {
  
  console.log("New Test-----------------------------------------------------" + price + " " + cash);
  // Here is your change, ma'am.
  let owed = cash - price;
  
  var penny = .01;
  var nickel = .05;
  var dime = .1;
  var quarter = .25;
  var dollar = 1;
  var five = 5;
  var ten = 10;
  var twenty = 20;
  var onehundred = 100;
  
  let pennies = cid[0][1];
   let nickels = cid[1][1];
    let dimes = cid[2][1];
     let quarters = cid[3][1];
      let dollars = cid[4][1];
       let fives = cid[5][1];
        let tens = cid[6][1];
         let twenties = cid[7][1];
          let onehundreds = cid[8][1];

  let totalAvailable = pennies + nickels + dimes + quarters + dollars + fives + tens + twenties + onehundreds;
  pennies = pennies / .01;
  nickels = Math.round((nickels / .05) * 10) / 10;
  dimes = dimes /.1;
  quarters = quarters /.25;
  dollars = dollars;
  fives = fives / 5;
  tens = tens / 10;
  twenties = twenties / 20;
  onehundreds = onehundreds / 100;
  

  
  let changeDrawer = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]];
  let changeHundreds = changeDrawer[0];
  let changeTwenties = changeDrawer[1];
  let changeTens = changeDrawer[2];
  let changeFives = changeDrawer[3];
  let changeOnes = changeDrawer[4];
  let changeQuarters = changeDrawer[5];
  let changeDimes = changeDrawer[6];
  let changenickels = changeDrawer[7];
  let changePennies = changeDrawer[8];

  
  console.log(pennies + " " + nickels + " " + dimes + " " + quarters + " " + dollars + " " + tens + " " + twenties + " " + onehundreds)
  if(totalAvailable < owed) return {status: "INSUFFICIENT_FUNDS", change: []};

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
           changeTwenties[1] += 20;
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
        case ((Math.round((owed - nickel) * 100) / 100) >= 0) && (nickels > 0):
           owed = Math.round((owed - nickel)*100) /100;
           nickels -= 1;
           Math.round((changenickels[1] += .05) * 100) / 100;
           break;
        case ((Math.round((owed - penny) * 100) / 100) >= 0) && (pennies > 0):
           Math.round((owed -= penny) * 100) / 100;
           pennies -= 1;
           Math.round((changePennies[1] += .01) * 100) / 100;;
           break;
        default: 
            return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }

  changeHundreds[1] = changeHundreds[1].toFixed(2);
  changeTwenties[1] = changeTwenties[1].toFixed(2);
  changeTens[1] = changeTens[1].toFixed(2);
  changeFives[1] = changeFives[1].toFixed(2);
  changeOnes[1] = changeOnes[1].toFixed(2);
  changeQuarters[1] = changeQuarters[1].toFixed(2);
  changeDimes[1] = changeDimes[1].toFixed(2);
  changenickels[1] = changenickels[1].toFixed(2);
  changePennies[1] = changePennies[1].toFixed(2);
  let closedDrawer = changeDrawer.slice().reverse();
  closedDrawer.map(item => item[1] = parseFloat( item[1] ));
  changeDrawer = changeDrawer.filter(item => item[1] > 0);
  changeDrawer.map(item => item[1] = parseFloat( item[1] ));

  console.log("This is change Drawer " + changeDrawer);
  let totalAvailable2 = pennies + nickels + dimes + quarters + dollars + fives + tens + twenties + onehundreds;
  console.log("This is totalAvailable2" + totalAvailable2);
  debugger;
  if(totalAvailable2 == 0) {
    
      console.log({status: "CLOSED", change: closedDrawer});
      return {status: "CLOSED", change: closedDrawer};
  } else {
      console.log({status: "OPEN", change: changeDrawer});
      return {status: "OPEN", change: changeDrawer};
  }
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


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
