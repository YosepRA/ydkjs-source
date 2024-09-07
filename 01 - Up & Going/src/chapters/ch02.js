function ch02() {
  console.log("You Don't Know JS V01-Ch02");
  console.log(
    '/* ==================================================================== */',
  );

  /* ===================================================================== */

  // // Coercion and Equality

  // const string42 = '42';
  // const number42 = 42;

  // /* When using loose equality (==), values are coerced. In the case of "a == b",
  // value of 'a', which is '42' (string of 42), is coerced into number. Then the
  // comparison becomes "42 == 42", a comparison between two numbers, which
  // results in true. */
  // console.log("'42' == 42", string42 == number42); // true
  // console.log("'42' === 42", string42 === number42); // false

  // const numberArrayOne = [1, 2, 3];
  // const numberArrayTwo = [1, 2, 3];
  // const numberString = '1,2,3';

  // /* Arrays are coerced into a string of comma-separated value. Therefore, when compared
  // with its string of comma-separated counterpart, it results in true. And since arrays
  // are objects, the comparison between two arrays is a comparison between two object
  // references, which is not equal. */
  // console.log('[1, 2, 3] == "1,2,3"', numberArrayOne == numberString); // true
  // console.log('[1, 2, 3] == "1,2,3"', numberArrayTwo == numberString); // true
  // console.log('[1, 2, 3] == [1, 2, 3]', numberArrayOne == numberArrayTwo); // false

  // const number11 = 11;
  // const string12 = '12';
  // const string13 = '13';

  // /* Inequality operator coercion. Since it's possible to compare between two strings,
  // then there is a quirk when one of the value is not string.
  // When both values are string, the comparison is made alphabetically.
  // When one of the values is not a string, then both values are coerced to be numbers. */
  // console.log("11 < '12'", number11 < string12); // true
  // console.log("'12' < '13'", string12 < string13); // true

  // const number14 = 14;
  // const foo = 'foo';

  // /* Therefore, when one of the value is not a string, and it can't be coerced properly
  // into numbers, then it produces NaN (invalid number). And since according the the spec,
  // NaN is neither greater than nor less than any other value, the comparisons below
  // result in false. */
  // console.log("14 < 'foo'", number14 < foo); // false
  // console.log("14 > 'foo'", number14 > foo); // false
  // console.log("14 == 'foo'", number14 == foo); // false

  /* ===================================================================== */

  // // Function Scopes

  // function fooOne() {
  //   var a = 1;

  //   function bar() {
  //     var b = 2;

  //     function baz() {
  //       var c = 3;

  //       console.log(a, b, c); // 1, 2, 3
  //     }

  //     baz();
  //     console.log(a, b); // 1, 2
  //   }

  //   bar();
  //   console.log(a);
  // }

  // fooOne();

  /* ===================================================================== */

  // // Conditionals

  // function switchCase() {
  //   const a = 2;

  //   switch (a) {
  //     case 2:
  //       console.log('2');
  //       /* Adding 'break' is important if you only want to run the logic for a specific
  //       case. If you omit it, then it continues to execute the next case block regardless
  //       of whether the conditionals are true or not (called 'fall-through'). */
  //       break;

  //     case 10:
  //       console.log('10');
  //       break;

  //     default:
  //       console.log('default');
  //       break;
  //   }
  // }

  // switchCase();

  /* ===================================================================== */

  // // Immediately-Invoked-Function-Expression (IIFE)

  // const a = 42;

  // (function IIFE() {
  //   const a = 10;

  //   console.log(a); // 10
  // })();

  // console.log(a); // 42

  // const x = (function IIFE() {
  //   return 14;
  // })();

  // console.log(x); // 14

  /* ===================================================================== */

  // Closure

  function makeAdder(x) {
    function add(y) {
      return x + y;
    }

    return add;
  }

  const addByOne = makeAdder(1);
  const addByTwo = makeAdder(2);

  console.log('addByOne(2)', addByOne(2)); // 3
  console.log('addByTwo(5)', addByTwo(5)); // 7

  // Module Pattern

  function User() {
    let username, password;

    function login(user, pw) {
      username = user;
      password = pw;
    }

    function printUsername() {
      console.log('username:', username);
    }

    const publicAPI = {
      login,
      printUsername,
    };

    return publicAPI;
  }

  /* Each instance has its own scope. Therefore, user 'Joe' has its own set of
  values and functions which are exposed via returned object from 'User' function. */
  const joe = User();

  joe.login('Joe', 'password123');
  joe.printUsername();
}

export default ch02;
