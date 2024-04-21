// // 32.	Checking Usernames: Do the following to create a program that simulates
// //  how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users : string[] = ['Mashoo','Kashif','Nouman','Imran','AbdulAllah'];

let new_users : string[] = ['Tanveer','Kashif', 'Nouman','ShaHid','Adnan'];
new_users.forEach(new_usersname => {
    let lowercase : string = new_usersname.toLowerCase();
console.log(lowercase);


    
    if(current_users.map(C_users => C_users.toLowerCase()).includes(lowercase)) {
console.log(`This username ${new_usersname} has already been used.please write a different user name`);
}
else {
    console.log(`This username ${new_usersname} is available.`);
}
})

