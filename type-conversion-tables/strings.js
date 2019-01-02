{ console.log('# typeof x === "string"');

  const empty = '';
  const empty_string = {
      to_number: Number(empty),
      to_boolean: Boolean(empty),
      to_undefined: void empty
    }

  const white = '\t \n ';
  const white_space = {
      to_number: Number(white),
      to_boolean: Boolean(white),
      to_undefined: void white
    }

  const whole = '1';
  const whole_numbers = {
      to_number: Number(whole),
      to_boolean: Boolean(whole),
      to_undefined: void whole
    }

  const decimal = '1.1';
  const decimal_numbers = {
      to_number: Number(decimal),
      to_boolean: Boolean(decimal),
      to_undefined: void decimal
    }
  
  const scientific = '1e3';
  const scientific_notation = {
      to_number: Number(scientific),
      to_boolean: Boolean(scientific),
      to_undefined: void scientific
    }

  const string_table = {
      [empty+': empty string']: empty_string,
      [white+': white space']: white_space,
      [whole+': whole numbers']: whole_numbers,
      [decimal+': decimal numbers']: decimal_numbers,
      [scientific+': scientific notation']: scientific_notation
    }

  console.table(string_table);
}
