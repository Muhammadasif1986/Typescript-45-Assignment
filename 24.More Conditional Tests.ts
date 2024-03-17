// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// • Tests for equality and inequality with strings
// • Numerical tests involving equality and inequality, greater than and less than, greate,'Apple'==='Apple');
console.log('Equality Test with string:', 'Apple'==='Apple');
console.log('inequality Test with string:', 'Apple'as string != 'orang');

// • Tests using the lower case function
console.log('lowercase function Test:','MANGO'.toLowerCase()==='mango');

// • Numerical tests involving equality and inequality,
console.log('Equality Test with number:',26===26);
console.log('inequality Test with number:',31 as number != 30);

// greater than and less than, greater than or equal to, and less than or equal to
console.log('Greater than Test:',11>9);
console.log('less than Test:',9<11);
console.log('Greater than or equal to Test:',11>=11);
console.log('less than or equal to Test:', 11 <= 12);

// • Tests using "and" and "or" operators
console.log('And operator Test:', 11==11 && 12 <= 12);
console.log('Or operator Test:', 11===11 || 15 <= 12);


// • Test whether an item is in a array
const fruit_Name = ['Apple','stobbery','lichi','Mango','kino',];
console.log('Test"kino" in Array', fruit_Name.includes('kino'))
// • Test whether an item is not in a array
console.log('Test"Amrood" is not in Array', !fruit_Name.includes('Amrood'));



