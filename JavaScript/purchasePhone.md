## Practice

There is absolutely no substitute for practice in learning programming. No amount of articulate writing on my part is alone going to make you a programmer.

With that in mind, let's try practicing some of the concepts we learned here in this chapter. I'll give the "requirements," and you try it first. Then consult the code listing below to see how I approached it.

* Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
* After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
* Finally, check the amount against your bank account balance to see if you can afford it or not.
* You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
* You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
* **Bonus Challenge:** Try to incorporate input into this program, perhaps with the `prompt(..)` covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

OK, go ahead. Try it. Don't peek at my code listing until you've given it a shot yourself!

**Note:** Because this is a JavaScript book, I'm obviously going to solve the practice exercise in JavaScript. But you can do it in another language for now if you feel more comfortable.

## My solution

```js
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
		console.log("You made a purchase of " + totalCost(total));
	}
	else if(total < balance){
		console.log("You have enough money to buy it but it exceeds your spending threshold");
	}
	else {
		console.log("You have insufficient funds to purchase.");
	}
```
