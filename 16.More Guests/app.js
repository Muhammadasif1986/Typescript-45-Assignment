"use strict";
// 16.	More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//   • Print a new set of invitation messages, one for each person in your list.
let guest_list = ['Farhan', 'Akhter', 'tanveer', 'shahid'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('\n\nDear Mr, ' + guest_list[i] + ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
}
let absent_guest = 'Akhter';
let new_guest = 'Nouman';
guest_list[`1`] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`\n\nDear Mr, ${guest_list[i]} ,\n\nit is our Pleaser to invite you in our party.\n\nThank you.`);
}
console.log(`\n\nMr. ${absent_guest} is not coming in Party.`);
console.log('\n\nGood news we found a big dinner table, so we are inviting three more guests.');
guest_list.unshift('sajjad');
guest_list.splice(4, 0, 'Adnan');
guest_list.push('Kashif');
for (let i = 0; i < guest_list.length; i++) {
    console.log('\n\nDear Mr, ' + guest_list[i] + ',\n\nit is our Pleaser to invite you in our party.\n\nThank you.');
}
console.log('\n\t' + guest_list + ' Thanks,\n\t');
