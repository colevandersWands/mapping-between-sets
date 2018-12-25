{ console.log('--- void ---')

// void: 'number' -> 'undefined'
const number_to_undefined = [

  ];
run_tests((a)=>{return void a}, number_to_undefined)

// void: 'boolean' -> 'undefined'
const boolean_to_undefined = [
    
  ];
run_tests((a)=>{return void a}, boolean_to_undefined)

// void: 'string' -> 'undefined'
const string_to_undefined = [
    
  ];
run_tests((a)=>{return void a}, string_to_undefined)




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