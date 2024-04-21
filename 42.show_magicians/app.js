"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise
//  39. Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. Call show_magicians() 
//   to see that the list has actually been modified.
let magician = ['herry potter', 'Apollo the Magnificent', 'Aether the Unseen', 'Argent the Sorcerer', ' Aquila the Enigma'];
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
make_great(magician);
show_magicians(magician);
//make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
