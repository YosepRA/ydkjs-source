function v02ch01() {
  console.log("You Don't Know JS V02-Ch01");
  console.log(
    '/* ==================================================================== */',
  );

  /* ===================================================================== */

  // // LHS-RHS Lookup Quiz

  // function foo(a) {
  //   var b = a;

  //   return a + b;
  // }

  // var c = foo(2);
  // console.log('🚀 ~ v02ch01 ~ c:', c);

  // /*
  //   1. Identify all the LHS look-ups (there are 3)
  //     - 'c' on 'var c = foo(2)'
  //     - 'a' on 'foo' function parameter.
  //     - 'b' on 'var b = a'
  //   2. Identify all the RHS look-ups (there are 4)
  //     - 'foo()' on 'var c = foo(2)'
  //     - 'a' on 'var b = a'
  //     - 'a' on 'return a + b'
  //     - 'b' on 'return a + b'
  // */

  /* ===================================================================== */

  // Why differentiating between LHS and RHS matter?
  // Because it behaves differently when it is not found in the Scope list.

  function foo(a) {
    console.log(a + b);
  }

  /* If 'b' is declared beforehand, even if there is no value in it, the Scope
  has declared its value as 'undefined'.
  However, if there isn't even any variable declaration 'b' beforehand, the Engine
  will throw a 'ReferenceError: b is not defined' error because RHS lookup on 'b'
  resulted in an identifier that simply doesn't exist.  */
  // var b;

  console.log('Before `var b = 2`:', b); // undefined
  // console.log('Empty c:', c); // ReferenceError is thrown
  foo(2); // NaN. Because 'a + undefined'

  var b = 2;

  console.log('After `var b = 2`:', b); // 2

  /* Result is 4. Because at this point, not only 'b' exist in the Scope, but also the
  Engine has assigned 'b', which is previously empty to, with a value of '2'.
  Therefore, 'a + b' becomes '2 + 2' which results in '4'. */
  foo(2);
}

export default v02ch01;
