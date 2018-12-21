{ console.log('--- String() ---')

// String: 'number' -> 'string'
const number_to_string = [
  
  ];
run_tests(String, number_to_string)

// String: 'boolean' -> 'string'
const boolean_to_string = [
    
  ];
run_tests(String, boolean_to_string)

// String: 'undefined' -> 'string'
const undefined_to_string = [
    
  ];
run_tests(String, undefined_to_string)





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