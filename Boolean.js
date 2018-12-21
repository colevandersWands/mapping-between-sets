{ console.log('--- Boolean() ---')

// Boolean: 'string' -> 'boolean'
const string_to_boolean = [
    // make one test case per relevant type of string
  ];
run_tests(Boolean, string_to_boolean)

// Boolean: 'number' -> 'boolean'
const number_to_boolean = [
    
  ];
run_tests(Boolean, number_to_boolean)

// Boolean: 'undefined' -> 'boolean'
const undefined_to_boolean = [
    
  ];
run_tests(Boolean, undefined_to_boolean)









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