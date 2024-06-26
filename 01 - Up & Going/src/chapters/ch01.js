function ch01() {
  // const a = 21;
  // const b = a * 2;

  // console.log(b);

  /* ===================================================================== */

  // // Variables

  // let amount = 99.99;

  // amount = amount * 2;

  // console.log(amount); // 199.98

  // amount = '$' + String(amount);

  // console.log(amount); // $199.98

  /* ===================================================================== */

  // // Tax

  // const TAX_RATE = 0.08;

  // const salary = 99.99;

  // const tax = salary + salary * TAX_RATE;

  // console.log(tax); // 107.9892
  // console.log(tax.toFixed(2)); // 107.99

  /* ===================================================================== */

  // // Conditionals

  // const bankBalance = 300;
  // const phonePrice = 99.99;

  // if (phonePrice < bankBalance) {
  //   console.log(
  //     `The price of this phone is $${20}, and my bank balance is $${bankBalance}. This phone is affordable!`,
  //   );
  // }

  // const accessoryPrice = 15;
  // const phoneAndAccessoryPrice = phonePrice + accessoryPrice;

  // if (phoneAndAccessoryPrice < bankBalance) {
  //   console.log(
  //     `The total of phone and accessories price is $${phoneAndAccessoryPrice}, and my bank balance is $${bankBalance}. I can afford both the phone and the accesories.`,
  //   );
  // } else {
  //   console.log("I can't afford phone plus accessories.");
  // }

  /* ===================================================================== */

  // // Loops

  // const maxCustomers = 5;
  // let numOfCustomers = maxCustomers;

  // while (numOfCustomers > 0) {
  //   // Count from one.
  //   const customerNumber = Math.abs(numOfCustomers - maxCustomers - 1);

  //   console.log(`The clerk is serving customer number ${customerNumber}`);

  //   numOfCustomers = numOfCustomers - 1;
  // }

  /* ===================================================================== */

  // // Functions

  // const TAX_RATE = 0.08;

  // function calculateFinalPurchaseAmount(amount) {
  //   const total = amount + amount * TAX_RATE;

  //   return total;
  // }

  // const phonePrice = 49.99;
  // const totalPhonePrice = calculateFinalPurchaseAmount(phonePrice);

  // console.log(`Total phone price is $${totalPhonePrice.toFixed(2)}`);

  /* ===================================================================== */

  // Practice
  /* 
    - Create an app to keep on buying phones until bank balance is no longer 
    sufficient.
    - Add tax to the total purchase.
    - Use prompt for bank balance input for additional challenge.
  */

  const taxRate = 0.08;
  const phonePrice = 9.99;
  const phoneAccesoryPrice = 1.99;
  const phoneAndAccessoryPrice = phonePrice + phoneAccesoryPrice;

  let bankBalance = 0;

  function calculateTotalPrice(amount) {
    const totalAmount = amount + amount * taxRate;

    return totalAmount;
  }

  function purchase() {
    let totalPrice = 0;
    let phoneAndAccessoryQuantity = 0;

    // Phone, accessory, plus tax.
    const unitPrice = calculateTotalPrice(phoneAndAccessoryPrice);

    while (totalPrice + unitPrice < bankBalance) {
      totalPrice = totalPrice + unitPrice;
      phoneAndAccessoryQuantity = phoneAndAccessoryQuantity + 1;
    }

    return { totalPrice, unitPrice, phoneAndAccessoryQuantity };
  }

  function exercise() {
    bankBalance = parseFloat(prompt('Enter your bank balance'));

    if (Number.isNaN(bankBalance)) {
      const message = 'Bank balance should only contain numbers';

      alert(message);
      throw new Error(message);
    }

    const purchasedPhone = purchase();

    if (purchasedPhone.phoneAndAccessoryQuantity < 1) {
      console.log(
        "You can't afford to buy the phone plus accessory with your bank balance.",
      );

      return undefined;
    }

    console.log(
      `With my bank balance of $${bankBalance}, I can buy ${purchasedPhone.phoneAndAccessoryQuantity} set${purchasedPhone.phoneAndAccessoryQuantity > 1 ? 's' : ''} of phone and accessory with a unit price of $${purchasedPhone.unitPrice.toFixed(2)} and a total price of $${purchasedPhone.totalPrice.toFixed(2)}.`,
    );
  }

  exercise();
}

export default ch01;
