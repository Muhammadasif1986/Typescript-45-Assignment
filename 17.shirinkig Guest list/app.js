// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list = ['Farhan', 'Akhter', 'tanveer', 'shahid'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
// }
var absent_guest = 'Akhter';
var new_guest = 'Nouman';
guest_list["1"] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
// }
console.log("\n\nMr. ".concat(absent_guest, " is not coming in Party."));
console.log('\n\nGood news we found a bigg dinner table, so we are inviting three more guests.');
// mazeed 3 guest add kye hai.
guest_list.unshift('sajjad');
guest_list.splice(4, 0, 'Adnan');
guest_list.push('Kashif');
// guest ko invite kya hai.
for (var i = 0; i < guest_list.length; i++) {
    console.log('\n\nDear Mr, ' + guest_list[i] + ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
}
// 2 se zayda guest ko remove kya hai.
console.log('\n\nsorry we cannt arrange big table, Only two Guest will be invite.\n');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Mr. ".concat(remove_guest, " we are not invited for dinner."));
}
// bachy huy guest ko invite kya hai.
for (var i = 0; i < guest_list.length; i++) {
    console.log('\n\nDear Mr, ' + guest_list[i] + ',\n\nyou are still invited.\n\nThank you.');
}
// guest list emty kardi hai
guest_list.splice(0, 3);
console.log(guest_list);
