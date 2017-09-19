var TAX_RATE = 1.15;
var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 19.99;

var balance = prompt("Enter your total spending money: ");
var phoneCount = 0;
var accessoryCount = 0;
var total = 0;
var spendingThreshold = prompt("Enter how much of it you would like to spend: ");


// Check if the user inputs a value greater than their spending amount. Exit if true
if (balance < spendingThreshold) {
	console.log("You cannot spend more than you have");
	exit();	
}
// Calculate the total cost and add the correct string format
function totalCost(total){
	total *= TAX_RATE;
	return "$" + total.toFixed(2);
}

// Spend as much money as you can	
while (balance > total) {
	total += PHONE_PRICE;
	phoneCount++;
	if (spendingThreshold > total)
	{
		total += ACCESSORY_PRICE;
		accessoryCount++;
	}
	

}

console.log("Your balance is : $" + balance + " and your spending threshold is: " + spendingThreshold);
console.log("Your are trying to purchase: " + phoneCount + " phone(s) and " + accessoryCount + " accessory");
console.log("Your total is " + totalCost(total));

//Check if you have enough money to purchase the phones
	if(total < spendingThreshold) {
		console.log("You have purchased " + phoneCount + " phone(s). The total amount is : " + total.toFixed(2));
	}
	else if(total < balance){
		console.log("You have enough money to buy it but it exceeds your spending threshold");
	}
	else {
		console.log("You have insufficient funds to purchase " + phoneCount + " phone(s)");
	}
	
	