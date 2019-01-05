learning objectives
* the primitive types in JS  
* explicit coercion on JS
* subsets: collections from within a set that match a criteria. ie. even numbers are a subset of numbers
* subsets of the primitives based on how they coerce across types: ie. all strings that map to NaN, all numbers that map to true
* 'proof cases' - test cases based on the rules of javascript. ie. all strings made up of only numbers will become that number, so just make one test case with '1' and name it accordingly
* basic mapping notation - f: A -> B.  f is a function that maps from set A to set B

Exercises
* focusing on the coercion functions: write 'proof cases' for each of the 4 primitive coercers, coercing between primitives
* focusing on the types: complete the primitives-tables.md

Challenges:
* use regex to define the important subsets of strings for each coercer
* explore invertability of coercions. ie. Number('1e3') === 1000 === Number('1000'), but String(1000) === 1000 === String(1e3) --> 1e3 is "lost", there is no way to know it was the original argument  

todo: 
* factor out consolemd in favor of inline console styling - so you can see the file & line for each log
