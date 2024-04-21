let guest_list = ['Farhan','Akhter','tanveer','shahid'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
// }
let absent_guest = 'Akhter';
let new_guest = 'Nouman';

guest_list[`1`] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');
// }
// console.log(`\n\nMr. ${absent_guest} is not coming in Party.`);
// console.log('\n\nGood news we found a bigg dinner table, so we are inviting three more guests.');
// mazeed 3 guest add kye hai.
guest_list.unshift('sajjad');
guest_list.splice(4, 0,'Adnan');
guest_list.push('Kashif');
// // guest ko invite kya hai.
// for(let i=0; i<guest_list.length; i++){
//     console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nit is our Pleasur to invite you in our party.\n\nThank you.');}
// 2 se zayda guest ko remove kya hai.
    // console.log('\n\nsorry we cannt arrange big table, Only two Guest will be invite.\n');
    while(guest_list.length>2){
        let remove_guest = guest_list.pop()
        // console.log(`Sorry Mr. ${remove_guest} we are not invited for dinner.`)
    }
    // bachy huy guest ko invite kya hai.
    // for(let i=0; i<guest_list.length; i++){
    //     console.log('\n\nDear Mr, '+guest_list[i]+ ',\n\nyou are still invited.\n\nThank you.');}
        
        // guest list emty kardi hai
    guest_list.splice(0,3)
    console.log(guest_list);
    
    // Excercise No 19.
    
    // 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
    // indicating the number of people you are inviting to dinner.
    console.log(`Total No Of Guest:${guest_list.length}`);