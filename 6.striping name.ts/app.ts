// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once.


const person_name = '   \n\tshahid\t\n  ';
console.log(person_name);

// Print the name once, 
// so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

const out_whiteSpace = person_name.trim();
console.log(out_whiteSpace);
