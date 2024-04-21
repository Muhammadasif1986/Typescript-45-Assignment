"use strict";
// 43.	Unchanged Magicians: Start with your work from Exercise 
// 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names
//   and one array with the Great added to each magician’s name.
// 42.	Great Magicians: Start with a copy of your program from Exercise
//  39. Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. Call show_magicians() 
//   to see that the list has actually been modified.
let magician = ['herry potter', 'Apollo the Magnificent', 'Aether the Unseen', 'Argent the Sorcerer', ' Aquila the Enigma'];
function copy_arr(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = 'The Great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(`${element} "the Great"`);
    });
}
const copymagicianArry = copy_arr(magician);
make_great(copymagicianArry);
console.log('\n\nThis is my original \n');
show_magicians(magician);
console.log('\n\nThis is my modify copy of the Array\n');
show_magicians(copymagicianArry);
