// 37.	Large Shirts: Modify the make_shirt() function 
// so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function Shirt (size:string='Large', text: String = 'I Love TypeScript!'){
    console.log(`creating a ${size} size shirt with print message ${text}`);
}

Shirt();
Shirt('Medium');
Shirt('Small','I Love Python!');







