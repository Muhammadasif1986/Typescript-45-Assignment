// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14.
//  Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.






let guest_list = ['Farhan','Akhter','tanveer','shahid'];
for(let i=0; i<guest_list.length; i++){
    console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
}
let absent_guest = 'Akhter';
let new_guest = 'Nouman';

guest_list[`1`] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
}
console.log(`\n\nMr. ${absent_guest} is not coming in Party.`);