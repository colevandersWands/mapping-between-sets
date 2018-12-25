{ 
/* null is used as a placeholder, replace null with your response
  there is no operator that converts to null
  so none of these assertions can be accidentally correct
*/  
/* 1 */ console.assert( String(undefined) === null, '1: String(undefined)');
/* 2 */ console.assert( String(typeof undefined) === null, '2: String(typeof undefined)');
/* 3 */ console.assert( String("undefined") === null, '3: String("undefined")');
/* 4 */ console.assert( String(typeof "undefined") === null, '4: String(typeof "undefined")');

// ... and many more
}