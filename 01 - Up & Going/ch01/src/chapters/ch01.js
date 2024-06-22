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

  // Conditionals

  const bankBalance = 300;
  const phonePrice = 99.99;

  if (phonePrice < bankBalance) {
    console.log(
      `The price of this phone is $${20}, and my bank balance is $${bankBalance}. This phone is affordable!`,
    );
  }

  const accessoryPrice = 15;
  const phoneAndAccessoryPrice = phonePrice + accessoryPrice;

  if (phoneAndAccessoryPrice < bankBalance) {
    console.log(
      `The total of phone and accessories price is $${phoneAndAccessoryPrice}, and my bank balance is $${bankBalance}. I can afford both the phone and the accesories.`,
    );
  } else {
    console.log("I can't afford phone plus accessories.");
  }
}

export default ch01;
