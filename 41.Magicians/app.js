"use strict";
// 41.	Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let magician = ['herry potter', 'Apollo the Magnificent', 'Aether the Unseen', 'Argent the Sorcerer', ' Aquila the Enigma'];
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
