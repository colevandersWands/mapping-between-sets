{ console.log('--- Number() ---');

// Number: 'string' -> 'number'
const string_to_number = [
    // make one test case per interesting type of string
  ];
run_tests(Number, string_to_number)

// Number: 'boolean' -> 'number'
const boolean_to_number = [

  ];
run_tests(Number, boolean_to_number)

// Number: 'undefined' -> 'number'
const undefined_to_number = [
    
  ];
run_tests(Number, undefined_to_number)





// testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };
}